##   数组的基础语法

###   数组元素的默认值

如果没有给定数组的某个元素的具体值，那么该元素就会被赋予默认值undefined，例如：

```js
const arr = new Array(3)
console.log(arr[0]) // undefined 
```

###   数组的长度

数组的长度不是固定的，哪怕一开始指定数组的长度，其长度也是可以动态伸缩的。例如：

```
const arr= new Array(3)
arr[3] = 1
console.log(arr) // 4
```

###   数组的拖尾逗号

有些时候，我们会看到数组元素的结尾也存在一个逗号，这种逗号叫做拖尾逗号，通常是为了在频繁地增减数组元素的时候同时保证语法的正确，拖尾逗号不占用数组的长度，例如：

```
// 下面两种写法的结果是一样的
const arr1 = [1,2,3]
const arr2 = [1,2,3,]
console.log(arr1.length, arr2.length)  // 3  3
```

