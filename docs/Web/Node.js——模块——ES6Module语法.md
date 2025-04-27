##  ES6 Module

###  如何使用ESM语法

ESM，即ES Module，在2015年的ES6版本中被推出，这种语法同时支持Nodejs和浏览器环境。

要使用ESM语法，有两种方式：
- 将扩展名改为.mjs。
- 在同目录下的package.json中，添加一行：` "type" : "module" ` 。

###  具名导出和导入

1、 具名导出

使用export 关键字加上花括号，填入要导出的对象，用逗号隔开，例如example.mjs文件：

```js
const a = 1;
const str = "hello";
const arr = [1,2,3];
const foo = ()=>console.log("hello,world");

export  {a,str,arr,foo} 
```

请注意，这里的花括号不是对象，这个语法也不是对象简写，只是语法规则规定将要导出的对象写在export {} 中而已。

2、 具名导入

使用import关键字和花括号，填入需要导入的对象，用逗号隔开，例如：

```js
import   {a,str,arr,fun}   from "./example.mjs"
console.log(str)
console.log(arr)
foo()
```

3、 导入所有对象

如果需要导入所有对象，则可以使用如下import.mjs文件中的语法。

```js
import * as vars from "./export.js"

console.log(vars.str)
console.log(vars.arr)
vars.foo()
```

4、 重命名

有些时候从不同的文件导入同名变量，这时候就发生了命名冲突，可以使用as起个别名，如下import.mjs文件：

```js
import { data as data1 } from "./export1.js"
import { data as data2 } from "./export2.js"
```



###  默认导出和导入

1、 默认导出

使用export default 关键字加上花括号，例如：

```js
const a = 1;
const b = 2;
const str = "hello";
const arr = [1,2,3];
const foo = ()=>console.log("hello,world");

export default {a,b,str,arr,foo}
```

2、 默认导入

在本文件中使用一个自己取的名称，例如：

```js
import  datas  from './export.js'

console.log(datas.a)
console.log(datas.arr)
datas.foo()
```

