---
title: path模块
---


如果需要处理路径，则需要用到path模块。首先使用如下代码引入path模块：

```js
const path = require('path')
```

下面列出了一些常用的预定义路径：
- process.cwd() 当前工作目录的绝对路径。
- __filename  当前代码文件的绝对路径。
-  __dirname 当前代码文件所在目录的绝对路径。
- os.homedir() 家目录，需要先引入os模块。
- path.sep  /或\，取决于操作系统。


如下是使用path模块进行路径解析的示例代码：

```js
const p = "D:\\Test\\example.js"
console.log(path.basename(p))  // example.js，含后缀的文件名
console.log(path.extname(p))  // .js ， 后缀名
console.log(path.basename(p, path.extname(p))) // example，不含后缀的文件名
console.log(path.dirname(p)) //  D:\Test ，所在目录
```

path.join()用于组合多个路径，它会自己处理路径中存在的'/'、'//'、'..'。
```js
console.log(path.join('a','//b','./c')) // a\b\c

// 自动解析相对路径符号
console.log(path.join('a',  '.',  'b',  '..',  'c')) // a\c 
```

path.normalize()规范化路径为当前操作系统的格式。

```js
console.log(path.normalize('a/b/c')) // a\b\c

'/foo/bar/baz/asdf'
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))  // '/foo/bar/baz/asdf'

```

path.resolve()从最后一个路径开始，反向处理。

```js
path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', '/baz')   // returns '/baz'
path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home', 'foo', 'build','aaaa','aadada','../../..', 'asset') //return '/home/foo/asset'
```
