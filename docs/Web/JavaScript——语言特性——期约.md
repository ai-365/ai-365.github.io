---
title: 期约
---

###   Promise对象

期约是为了简化异步编程而设计的语言特性。使用new Promise()构造函数可以新建一个期约，该函数接收一个函数作为参数，我们先传入一个空函数：

```js
const p=new Promise(()=>{})
console.log(p)
// out： Promise { <pending> }
```

上述输出表示期约的状态，目前为pending。

上面的函数参数又可以接收如下两个函数参数：
- resolve() : 可将期约的状态变为resolved。
- reject() : 可将期约的状态变为rejected。

如下示例将期约变为resolved状态：

```js
const p=new Promise((resolve,reject)=>resolve(' Promise Value '))
console.log(p)
// 输出：Promise {' Promise Value '}
```

这个输出表示期约的值是' Promise Value '，没有标明状态就是默认resolved。

如下示例将期约变为rejected状态：

```js
const p=new Promise((resolve,reject)=>reject(' Promise Rejeted Value '))
console.log(p)
// 输出： Promise { <rejected>  ' Promise Rejeted Value '}
```

这个输出结果表示期约当前的状态是rejected，期约值是' Promise Rejeted Value '。同时，此时控制台会输出一些错误信息。

通过打印期约对象，我们可以发现，期约分为三种状态：pending、resolved 和 rejected。

期约的状态决定了后续的操作是调用then()还是调用catch()。期约值是期约链式操作的数据流转的第一步。

除了构造函数以外，可以使用如下方式快速创建期约：

```js
const  p1= Promise.resolve(' Promise Value ')
console.log(p1)
// out：Promise {' Promise Value '}

const  p2= Promise.reject(' Promise Rejeted Value ')
console.log(p2)
//out： Promise { <rejected> ' Promise Rejeted Value ' }
```

###    期约方法和期约链

多层串联的回调函数本质上是多个函数的链式操作，上一个函数的返回值作为参数传递给下一个函数，使用期约对象的then()方法，就能实现链式操作，例如：

```js
const p = Promise.resolve(1)

p
.then(x=>x+1)
.then(x=>x*2)
.then(x=>console.log(x))   //=>4
```

期约对象的链式操作有三个方法：then()、catch()、finally()。这三个方法都接收一个函数作为参数，表示下一步的操作。

当期约对象的状态变为resolved时，就可以调用then()，例如：

```js
const p = Promise.resolve(1)
p
.then(x=>x+1)
.then(x=>x*2)
.then(x=>console.log(x))   //out：4
```


当期约对象的状态变为rejected时，就可以调用catch()，不过，一次正常的catch()之后，状态就会变为resolved，例如：

```js
const p= Promise.reject(1)
p
.catch(x=>x+1)
.then(x=>x*2)
.then(x=>console.log(x))   //out：4
```

期约对象无论是什么状态，都可以调用finally()。如下：

```js
const p= Promise.reject(1)
p
.finally(()=>console.log('Promise Chain Start！'))
.catch(x=>x+1)             
.then(x=>x*2)
.then(x=>console.log(x))
.finally(()=>console.log('Promise Chain Stop！'))  
```

期约链是一个串行操作，像流水线一样，每道工序可能包含：自己的操作、流转的数据，如果不显式或隐式地使用return为下一个操作提供数据，那么该步操作会直接将上一步的数据流转到下一步。

也就是说，每一步肯定有一个流转数据，就看你用不用、处不处理，每一步也肯定会输出流转数据到下一步。流转的数据就是每一步都回调函数的第一个参数，如下示例：

```js
const p= Promise.resolve(1)        
p
.then((x)=>console.log('Promise Chain Start！'))
.then(x=>{ return 6; })
.then(x=>x*2)                      
.then((x)=>console.log('Now Promise Value is' , x))  // out: 12
```

在上面这个例子中，由Promise.resolve()产生期约链条的流转数据，每一步的操作其实就是一个箭头函数，箭头函数的第一个参数是流转的数据，函数体是对流转数据的处理或其它行为，第一个then()没有对流转数据进行处理，所以直接往下传递。第二个then()对流转数据进行处理，但是显式地return 6，此时流转数据就是6。第三个then()对流转数据乘以2，注意，根据箭头函数的规则，这一行其实隐式地return了12。最后一个then()是获取流转数据并输出。

由上面的几个例子还可以看出，期约的链式操作是打平的，解决了以往的回调函数层层嵌套的问题，写法上更直观，理解起来也更直接。
