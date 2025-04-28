
第一个参数是数组，第二个参数指定形状。
如果不指定第二个参数，则遵循传入的数组的形状
tf.tensor([1, 2, 3, 4]).print();

tf.tensor([[1, 2], [3, 4]]).print();

第二个参数指定形状
tf.tensor([1, 2, 3, 4], [2, 2]).print();

构建1维张量
tf.tensor1d([1, 2, 3]).print();

构建2维张量，传入一个2维数组
tf.tensor2d([[1, 2], [3, 4]]).print();

构建3维张量，传入一个3维数组
tf.tensor3d([[[1], [2]], [[3], [4]]]).print();

也可以在第二个参数中指定张量的形状
tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();

tf.Tensor

tf.Tensor表示具有形状和元素数据类型的张量

tr.zeros

创建全0矩阵

tf.zeros([2, 2]).print();  

安装TensorFlow.js

```html
<script src=" https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js" > </script>
```


创建一个模型

```
const model = tf.sequential();
```

添加层

model.add(tf.layers.dense({units: 1}));

inputShape
 神经网络的输入形状，如果只有1个数字，则为[1]

units
 该层的输出个数

activation
激活函数，一般为relu，如果是最后一层输出，则为softmax

形状

输入的形状为样本的形状，不包括样本数量。只要在训练时才包括样本数量。


添加层

model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));

```html
<!DOCTYPE html>
<html>
<head>
  <title>TensorFlow.js Tutorial</title>

  <!-- Import TensorFlow.js -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>
  <!-- Import tfjs-vis -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@1.0.2/dist/tfjs-vis.umd.min.js"></script>

  <!-- Import the main script file -->
  <script src="script.js"></script>

</head>

<body>
</body>
</html>
```

script.js：

```js
//获取数据
async function getData() {
  const carsDataResponse = await fetch('./carsData.json');
  const carsData = await carsDataResponse.json();
  const cleaned = carsData.map(car => ({
    mpg: car.Miles_per_Gallon,
    horsepower: car.Horsepower,
  }))
  .filter(car => (car.mpg != null && car.horsepower != null));

  return cleaned;
}



async function run() {
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    {name: 'Horsepower v MPG'},
    {values},
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300
    }
  );

        // Create the model
        const model = createModel();
        tfvis.show.modelSummary({name: 'Model Summary'}, model);
        

  // More code will be added below
        const tensorData = convertToTensor(data);
        const {inputs, labels} = tensorData;
        
        await trainModel(model, inputs, labels);
        console.log('Done Training');
        
        testModel(model, data, tensorData);

}

document.addEventListener('DOMContentLoaded', run);


//  创建模型
function createModel() {
  // Create a sequential model
  const model = tf.sequential();

  // Add a single input layer
  model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));

  // Add an output layer
  model.add(tf.layers.dense({units: 1, useBias: true}));

  return model;
}




// 转换数据为张量
function convertToTensor(data) {
  // Wrapping these calculations in a tidy will dispose any
  // intermediate tensors.

  return tf.tidy(() => {
    // Step 1. Shuffle the data
    tf.util.shuffle(data);

    // Step 2. Convert data to Tensor
    const inputs = data.map(d => d.horsepower)
    const labels = data.map(d => d.mpg);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      // Return the min/max bounds so we can use them later.
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    }
  });
}


// 开始训练模型
async function trainModel(model, inputs, labels) {
  // Prepare the model for training.
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ['mse'],
  });

  const batchSize = 32;
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: 'Training Performance' },
      ['loss', 'mse'],
      { height: 200, callbacks: ['onEpochEnd'] }
    )
  });
}


function testModel(model, inputData, normalizationData) {
  const {inputMax, inputMin, labelMin, labelMax} = normalizationData;

  // Generate predictions for a uniform range of numbers between 0 and 1;
  // We un-normalize the data by doing the inverse of the min-max scaling
  // that we did earlier.
  const [xs, preds] = tf.tidy(() => {

    const xs = tf.linspace(0, 1, 100);
    const preds = model.predict(xs.reshape([100, 1]));

    const unNormXs = xs
      .mul(inputMax.sub(inputMin))
      .add(inputMin);

    const unNormPreds = preds
      .mul(labelMax.sub(labelMin))
      .add(labelMin);

    // Un-normalize the data
    return [unNormXs.dataSync(), unNormPreds.dataSync()];
  });

  const predictedPoints = Array.from(xs).map((val, i) => {
    return {x: val, y: preds[i]}
  });

  const originalPoints = inputData.map(d => ({
    x: d.horsepower, y: d.mpg,
  }));

  tfvis.render.scatterplot(
    {name: 'Model Predictions vs Original Data'},
    {values: [originalPoints, predictedPoints], series: ['original', 'predicted']},
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300
    }
  );
}
```

