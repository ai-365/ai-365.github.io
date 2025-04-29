---
title： 字符串的方法
---


###  大小写转换

可以使用如下两种方法对字符串进行大小写转换。

```js
let str='Hello'
console.log(str.toLowercase())   // =>'hello'
console.log(str.toUpperCase())   // =>'HELLO'
```

###   indexOf()和lastIndexOf()

可以使用indexOf()返回字符或子串在字符串中第一次出现的索引位置，lastIndexOf()方法类型，只是从字符串的末尾开始查找。

```js
let str = 'hello,world'
console.log(str.indexOf('o'))  //=>4
console.log(str.lastIndexOf('o')) //=>7
console.log(str.indexOf('wo')) //=>6
```

###   includes()

可以使用includes()方法确认字符串是否包含某个字符或子串，例如：

```js
let str='hello,world'
console.log(str.includes('hello'))    //=>true
```

###  startWith()和endsWith()方法

startWith()方法用于确认字符串是否以某个字符或子串开头，而endsWith()方法用于确认字符串是否以某个字符或子串结尾。例如：

```js
let str='hello,world'
console.log(str.startsWith('hello'))  //=> true
console.log(str.endsWith('world'))    //=>true
```

###  去除字符串的首尾空格

有三种方法去除字符串的首尾空格，如下所示：

```js
let str='  hello,world  '  // 首尾各有两个空格
console.log(str.trim())      //=>'hello,world'，同时去除首尾空格
console.log(str.trimLeft())  //=>'hello,world  '，只去除左边的空格
console.log(str.trimRight()) //=>'  hello,world'，只去除右边的空格
```

###  重复字符串

使用repeat()方法对字符串进行重复，例如：

```js
let str='hello'
console.log(str.repeat(3))  //=>'hellohellohello'
```

###  padStart()和padEnd()方法

有时候需要保证字符串的长度是固定的，就需要在左右使用字符进行填充。

```js
let str='hello'
console.log(str.padStart(10))  //=> '     hello'，在左侧填充默认的5个空格
console.log(str.padEnd(10))    //=>'hello     '，在右侧填充5个空格
console.log(str.padStart(3))   //=>'hello'，长度足够，原样返回
console.log(str.padStart(10,',')) // =>',,,,,hello'，在左侧使用逗号填充
```

###  提取子字符串：slice()、substring()、substr()

要提取子字符串，有三种方法。slice()和substring()需要传入提取开始的位置和结束位置，而substr()需要传入开始位置和提取的字数量。

```js
let str='hello,world'
console.log(str.slice(4,7))  //=>'o,w' ，从索引4位置开始提取，到索引7位置之前结束（左闭右开原则）
console.log(str.slice(4))    //=> 'o,world'，从索引4位置开始提取，一直到结束
console.log(str.substr(4,3)) // =>'o,w'，从索引4位置开始提取，提取3个字符
```

