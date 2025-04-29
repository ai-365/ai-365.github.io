---
title： 新建或转化为数组
---


有多种方式新建或转换为数组。

###   Array()

第一种方式是使用Array()构造函数，如下：

```js
const arr1 = new Array()  // 建立一个空数组
const arr2 = new Array(3)  // 建立一个包含3个元素的数组
```


###  数组字面量

第二种方式是使用数组字面量，外层用中括号(`[]`)包裹，数组元素之间用逗号隔开，如下：

```js
const arr1 = []  // 建立一个空数组
const arr2 = [1,2,3]  // 建立一个数组，包括3个元素
```

###  Array.from()

第三种方式是使用Array.from()静态方法，该方法接收一个可迭代对象，例如：

```js
const str = 'hello'  // 字符串是可迭代对象
const arr1 = Array.from(str) 
console.log(arr1)  // ['h','e','l','l','o']
const set = new Set(1,2,3)  // 集合是可迭代对象
const arr2 = Array.from(set)
console.log(arr2)  // [1,2,3]
```

###  Array.of()

第四种方式是使用Array.of()静态方法，该方法与Array.from()类似，区别是Array.of()接收若干个元素作为参数组成新数组的元素，例如：

```js
const arr = Array.of(1,2,3)
console.log(arr) // [1,2,3]
```

###  三点运算符

第五种方式是使用三点运算符(...)，该方法可以看作是Array.from()方法的语法糖，接收一个可迭代对象，通常用于快速将字符串转化为数组，例如：

```js
const str = 'hello'
const arr = [...str]
console.log(arr)  // ['h','e','l','l','o']
```

当然，还有许多方法可以新建或返回新数组，比如:Object.keys()、Object.values()、Object.entries(),这将在后面会讲到。
