---
title: CommanJS
---


CommanJS语法也叫cjs。这种方式在ES6推出之前解决了Node端JavaScript文件模块化问题，当时浏览器还不支持模块化。这种方式，只适用于Node环境，不能用于浏览器。

要使用CommanJS语法，有两种方式：
-  直接使用 .cjs 扩展名。
-  使用 .js 扩展名，并且在同级目录下的package.json中，添加一行： "type" : "commonjs" 。如果在同级目录下不存在package.json文件，则默认使用CommonJS语法。
    
1、 导出

将需要导出的值用逗号分隔、花括号包裹，然后赋给module.exports，示例如下：

```js
const a =1 
const foo=()=>console.log('hello,world')

module.exports = {a,foo}
```

2、 整体导入

导入时，可以作为一个整体对象导入，其成员就是被导入文件导出的对象。如下示例：

```js
const datas = require('./export.js')
datas.foo()
```

3、 部分导入

也可以只导入部分变量，这时需使用对象解析语法，如下示例：

```js
const {foo} = require('./export.js')
fun()
```

4、 exports和module.exports的关系

exports只是一个普通的预定义变量，默认情况下，exports的值为module.exports，一旦对exports直接赋值，exports就失去了导出的作用，变为一个普通的原始类型的变量。例如：

```js
const data = 3
exports = data
```

这相当于定义了一个普通变量。

因此，应该始终避免exports直接赋值。

但是，可以将exports看成一个对象，此时设置其属性，也可以完成导出的目的：

```js
exports.data = 3
```

此时，导出了data。

为了减少失误，最佳做法是始终使用module.exports。
