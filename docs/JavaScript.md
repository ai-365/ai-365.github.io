# 基础

##  JavaScript简介

-  JavaScript的历史
-  Ecmascript的标准发布和新增特性
-  JavaScript组成

###   JavaScript的历史

JavaScript问世于1995年，最初是用于控制浏览器页面行为的脚本语言，例如验证某个字段是否已经填写，或者测试输入值的合法性。后来，欧洲计算机制造商协会（Ecma）下属的TC39委员会发布了ECMA-262，作为ECMAScript的语言标准。1998年，ECMAScript被纳入国际标准。此后，各大浏览器厂商以ECMAScript标准为依据，分别实现了自己的JavaScript语言。时至今日，对ECMAScript支持最好的浏览器是Google Chrome和Microsoft Edge，这两个浏览器均使用了Chromium开源内核。Chromium基于Google开源的V8引擎。

除了作为浏览器的脚本语言，在2009年，Node.js问世。Node.js是一个基于Chrome V8引擎的JavaScript运行时。Node.js在语法上采用了JavaScript语言，同时带来了用于操作服务端的模块，例如：文件系统模块fs、操作系统模块os。Node.js将JavaScript的宿主环境从浏览器端带到了服务器端。

经过了27年的发展，如今的JavaScript已经成长为了最流行的语言之一，以及开发者们最喜爱的编程语言之一。

###  Ecmascript的标准发布和新增特性

ECMAScript 标准自2015年以来每年6月会发布一个新版本。ECMAScript 的某个特性从想法到最终的标准一般会经历stage0——stage4 五个阶段，分别是：strawman（最初想法）、proposal（提案）、draft（草案）、candidate（候选）、finished（完成）。一般而言，一个提案一旦进入草案阶段就很有可能会纳入最终的标准。

在以前，从标准的发布到浏览器厂商的支持又会经历很长的时间，这时可以使用polyfill框架用于实现浏览器暂不支持的特性。不过现在这种情况已经得到了好转，甚至对于很多特性，往往是浏览器厂商率先推出，而后TC39委员会将其作为标准纳入。

下面列出了自ECMAScript 2015 发布以来的新增特性：

* ES6：发行于2015年6月，新增了许多影响深远的特性：箭头函数、模块、迭代器、生成器、期约、反射、代理。ES6的发布对于JavaScript来说是一个里程碑事件，这是经典JavaScript和现代JavaScript的分水岭，奠定了JavaScript繁荣的基础。之后的ES版本也可以统称为“ES6”。
* ES7：发布于2016年6月，新增了指数操作符。
- ES8：发布于2017年6月，`async/await`、`Object.values()/keys()/entries()`、对象字面量拖尾逗号。async和await又是现代JavaScript发展史上另外一个极其重要的特性。
- ES9：发布于2018年6月，新增了`Promise finally()`、异步迭代、剩余和扩展属性。
- ES10：发布于2019年6月，新增了数组打平、字符串定长填充等特性。
- ES11：发布于2020年6月，新增了可选链、空位合并等特性。
- ES12：发布于2021年6月，新增了`Promise any()`、`String.prototype.replaceAll()`等特性。
- ES13：发布于2022年6月，新增了顶层`await`、`Array.prototype.at()`、class私有方法 / 静态方法等特性。
- ES14：发布于2023年6月，主要新增了数组的非破坏性方法，例如`Array.prototype.toReversed()`、`Array.prototype.toSorted()`等。

### Javascript的组成

一般而言，我们所说的Javascript指的是客户端Javascript，也就是浏览器中的Javascript脚本。但是，严格来讲，根据使用环境，我们将Javascript分为两类：
- 客户端Javascript：在浏览器中运行的Javascript。
- 服务端Javascript：可以访问本地操作系统的Javascript。比如最初的Node.js，以及近几年比较热门的Deno.js、Bun.js。

客户端JavaScript由ECMAScript、BOM、DOM三部分组成：
- EcmaScript：即ECMA-262定义的国际标准，定义了语法规则、数据类型、关键字、模块、全局对象等核心语言特性。
- DOM（Document Object Model）：文档对象模型，规定了JavaScript如何操作HTML元素。
- BOM（Browser Object Model）：浏览器对象模型，用于与浏览器窗口交互，例如页面导航、浏览历史、离线存储等。

服务端JavaScript也就是Node.js，其Javascript的组成分为如下几部分：
- EcmaScript：即ECMA-262定义的国际标准，定义了语法规则、数据类型、关键字、模块、全局对象、异步、代理等核心语言特性。
- CommonJS：用于访问本地操作系统的API，包含了大量开箱急用的模块，例如文件系统模块fs、操作系统模块os、Web服务器模块http等。

## 数据类型
本节内容：
-  原始值和引用值
-  typeof 操作符

###  原始值和引用值

Javascript的数据类型大体上分为两类：原始类型和引用类型。原始类型的数据值保存于栈中，引用类型的值保存于堆中，这是这两种类型最根本的区别，也决定了后续对这两种类型的赋值、修改、拷贝操作的不同。

原始类型保存于栈中，它是一种先进后出的数据结构，从管理角度来讲，它是由操作系统分配管理的，也就是说它是规整的，内存的大小在申请之后不会发生变化。因此，它不会出现碎片化，并且读取速度非常的快，因此基本的原始数据类型就非常适合存放于栈中。

原始数据类型分为如下几类，后面我们会一一详细讲到：
- 数值
- 字符串
- 布尔值
- null
- undefined
- Symbol

相比于栈的固定大小，堆的分配非常自由，它是由程序员自己去分配的，比如程序员考虑到某些情况需要更多的内存，它就可以在堆上面申请一个足够大的内存。除此之外，内存的分配非常自由，它并不要求是连续的内存，只要有空间，都可以被拿来分配。不过这样就会导致产生很多碎片，不利于高速读取，因此堆的操作的速度要比栈慢很多。堆主要存放的是大小不固定的内存结构，因此，对象、数组、结构体等引用类型经常被存放到堆上。

基于栈的存储特性，当我们为一个引用类型赋值时，本质上赋予的是一个指针，也叫内存地址，这才导致了声明方式和拷贝方式与原始类型的不同。

引用数据类型分为如下两个大类：基本引用类型、集合引用类型。

基本引用类型又分为：
-  原始值包装类型：包括Number、String、Boolean。
-  内置引用类型：包括Date、RegExp、Math等。

集合引用类型是我们经常使用的类型，分为：
-  对象（狭义的）
-  数组
-  集合（弱集合）
-  映射（弱映射）

###  typeof 操作符

由于Javascript的类型是松散的，不像静态语言那样需要事先声明，Javascript会根据数据值本身去推导数据类型，typeof操作符就是为此而生的。对一个值使用typeof操作符会返回如下字符串之一：

-  "undefined" : 未定义的值
-  "boolean" : 布尔值
-  "string" : 字符串 
-  "number" : 数值
-  "object" : 表示值为对象(非函数)或null
-  "function" : 表示值为函数
-  "symbol" ：表示值为符号
## 相等判定

本节内容：
-  原始值的相等性判定
-  引用值的相等性判定

###   原始值的相等性判定

JavaScript原始值的相等性判定有两种情况：宽松相等、严格相等，分别使用两个和三个等号。这两种相等比较的区别只有一个：

```
是否预先进行类型转换
```

如果两个原始值的类型不同，宽松相等会预先将类型转换成同一类型后，再进行判断。如果是严格相等，则不会预先转换类型，类型不同直接就判定为不相等。

用一个示例可以很好的进行说明：

```js
console.log(1==true)  // true，预先转换了类型，相等

console.log(1===true)  // false 不进行类型转换
```


###   引用值的相等性判定

与原始值不同的是，引用值的相等比较只比较指针。

引用值的相等性判定不区分严格与宽松，两个和三个等号是完全等价的。引用值的相等判定只有一个依据：

```
比较两个引用值的指针是否指向同一处
```

例如，如下两个对象，虽然内容上看起来一样，但是它们实际的内容却存储在内存的不同地方，即指针的指向不一样，因此永远不会相等：

```js
const obj1 = {name:"bob"}
const obj2 = {name:"bob"}
console.log(obj1==obj2)  // false 
console.log(obj1===obj2)  // false 
```

将一个对象使用等号赋值给另一个对象时，默认使用浅拷贝，即只拷贝指针，那么这两个对象的指针指向同一处，因此相等，如下示例：

```
const obj1 = {name:"bob"}
obj2 = obj1   // 此时只拷贝了指针
console.log(obj1==obj2)  // true
console.log(obj1===obj2) // true
```

##    可选链

可选链是ES2020新增标准。

如果对象obj不存在属性c，则obj.c返回undefined。而如果继续对obj.c读取属性，例如obj.c.d，则此时会报错，使用EcmaScript 2020新增的可选链(?.)特性， 可以解决这个报错的问题。如下示例：

```js
const obj = {a:1,b:2}
console.log(obj.c)  // undefined
console.log(obj.c.d)  // 报错，因为obj.c为undefined
console.log(obj?.c?.d)  // 存在属性则返回，不存在则会返回undefined，而不会报错 
```

可选链加强了程序的健壮性，无需开发者手动处理潜在的报错问题。

##  布尔类型

布尔类型只有两种值的原始类型 : true和false。

下面这些值可以被显示或隐式地转换为true：
-  非空字符串。注意，一个空格字符也算非空字符串。
-  任意对象，包括空对象。
-  正负无穷大（ Infinity、- Infinity）。
- 非零数值。

下面这些值可以被显示或隐式地转换为false：
- 空字符串""。
- NaN。
- 数字0。
- null。
- undefined。

可以使用 !!() 或 Boolean()将其它形式的值显示地转换为布尔类型，以便于条件判断，前者是后者的简写形式。

来看下面的示例：

```js
// 下面这些值都视作true
Boolean(hello')  // => true
Boolean('  ')  // 非空字符串，空格也算非空
Boolean(5/0)  // 正负无穷大
Boolean({})   // 任意对象，包括空对象

// 下面这些值都视作false
Boolean('')   // =>false 空字符串
Boolean(0)   
Boolean(NaN)
Boolean(null)
Boolean(undefined)
```

在 if 语句中，不必显式地使用 Boolean() ，会自动隐式调用:

```js
const a=2
if (a){console.log(true)}   //=> true
let b
if (b){console.log(true)}
else {console.log(false)}   //=> false
```
