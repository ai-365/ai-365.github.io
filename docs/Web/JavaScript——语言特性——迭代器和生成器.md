---
title: 迭代器
---


###   迭代器

对于某种数据类型，如果它的元素可以按照确定的顺序进行有限的读取，那么我们认为这个数据类型是可迭代对象。所以，可迭代对象有两大关键特征：元素的数量是有限的；元素的顺序是确定的。

因此，数组、Map、Set都是可迭代类型。要特别注意两种类型：string是可迭代对象，里面的字符是它的元素；而Object类型不是可迭代对象，因为Object的元素的顺序是不确定的。

所有的可迭代对象都有一个 ` [Symbol.iterator]() ` 方法，使用该方法可以返回一个迭代器

```js  
const arr = [1,2,3]  
const iter = arr[Symbol.iterator]()  
```

返回的迭代器有一个next()方法，不断得弹出元素值，done属性为false表示还有值可以被弹出，直到done属性变为true表示至此所有元素已经“耗尽”：

```js
iter.next()   //=> {value:1, done:false}
iter.next()  // => {value:2, done:false}
iter.next()  // => {value:3, done:true}，元素耗尽
iter.next()  //=> {value:undefined ,done:true}，后面的值都将是undefined
```

forEach()是大多数可迭代对象都具有的方法，forEach()方法接收一个回调函数作为参数，该函数接收三个参数：可迭代对象的元素、该元素的索引位置以及可迭代对象本身。

```js
const map = new Map().set('a',1).set('b',2).set('c',3)
map.forEach((element,index,map)=>{
console.log(index, element)
})
// out：
//  a 1
//  b 2
//  c 3
```

###   生成器

生成器的作用是生成一个自定义的可迭代对象，通过yield不断生成元素，通过return生成终止。生成器是一个函数，与普通函数的区别是在函数名称前面加上了一个星号。

```js
function * generator() {
    yield 1
    yield 2
    return 3
}
const iter = generator()
iter.next()   //=> {value:1, done:false}
iter.next()  // => {value:2, done:false}
iter.next()  // => {value:3, done:true}，元素耗尽
iter.next()  //=> {value:undefined ,done:true}，后面的值都将是undefined
```
