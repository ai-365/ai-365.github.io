---
title: 布尔类型
---


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
