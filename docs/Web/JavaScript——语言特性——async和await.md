##  async和await

async和await是ES2017推出的异步函数关键字，可以看做是Promise的语法糖。把函数声明为async意味着该函数的返回值将会是一个resolved状态的期约：

```js
async function foo(){
      return 'Promise Value'
      // 等价于：
      // return Promise.resolve('Promise Value')
}
console.log(foo())  
//  out：Promise { 'Promise Value' }
```

await的作用是取出期约对象中的值，同时告诉编译器异步执行后面的任务。注意，await只能定义在async函数的内部：

```js
async function foo(){
        return  'Promise Value'
}

async function bar(){
        // 取出期约对象的值
        const result = await foo()
        console.log(result)
}

bar()
```

◆  顶层await

ES2022标准推出了顶层await特性。async定义的函数依然是同步求值的，await关键字才是真正的异步。

以往，await只能写在async函数里面，ES2022新增了顶层await特性，允许await在函数外面书写。要在node环境中测试最新(ES2022)的顶层await特性，需要将后缀名改为mjs。


