---
title: 对象的方法
---


###  对象的枚举

对象是一组名/值对，可以使用如下方法枚举属性名、属性值、名/值对：

```js
const obj =  {a:1, b:2, c:3}

const keys = Object.keys(obj)
console.log(keys)  //   [ 'a', 'b', 'c' ]

const values = Object.values(obj)
console.log(values)  //  [ 1, 2, 3 ]

const entries = Object.entries(obj)
console.log(entries)  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

###   对象的for in 遍历

可迭代对象可以使用for of 循环遍历，而Object类型并非可迭代对象，不过可以使用for in 方法遍历其属性名和属性值，例如：

```js
const obj = {a:1, b:2, c:3}

for (let key in obj){
        console.log(key)  // a  b  c
}
```

从这里可以看出，如果只有一个参数，那么只遍历属性名称。

###   toString()和valueOf()

所有对象实例的toString()方法会返回一个固定的字符串`[object Object]`，例如：

```js
console.log({}.toString())  // [object Object]

console.log({a:1, b:2}.toString())  // [object Object]
```

当对象与对象相加、对象与字符串相加时，会隐式调用toString()，例如：

```js
console.log({}+{})  //   [object Object][object Object]

console.log({}+'Hello')  // [object Object]Hello
```

对象示例的valueOf()返回对象本身，例如：

```js
console.log({}.valueOf())  //  {}
console.log({a:1, b:2}.valueOf())  //  { a: 1, b: 2 }
```

###   合并对象

可以使用Object.assign()合并对象，例如：

```js
const obj1 = {a:1, b:2}
const obj2 = {a:2, c:3}

const obj = Object.assign(obj1,obj2)
console.log(obj)  // { a: 2, b: 2, c: 3 }
```

合并对象时，如果存在同名属性，则后边的对象属性值会覆盖前面的属性值。

作为一种语法糖，还可以使用三点操作符合并对象：

```js
const obj1 = {a:1, b:2}
const obj2 = {a:2, c:3}

const obj = {...obj1,...obj2}
console.log(obj)  // { a: 2, b: 2, c: 3 }
```

最后，要特别说明的是，无论使用Object.assign()，还是使用三点运算符，只推荐源对象不包括嵌套属性、并且属性值是原始值的时候使用，此时新对象对于源对象是独立的，不存在深浅拷贝的问题。如果源对象包括嵌套属性、或者属性值存在非原始值（其实嵌套属性本身也意味着属性值非原始值了），那么新对象的某些属性可能还引用着源对象，这里面有一些语法陷阱需要避免，需要先使用其它方式将对象打平，再进行合并。
