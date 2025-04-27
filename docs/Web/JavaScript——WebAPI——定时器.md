##  定时器API

JavaScript定时器API可以延迟执行、循环执行另一个函数，有三种方法：
-  setTimeout() ：延迟执行
-  setInterval() ：循环执行
-  requestAnimationFrame() ： 逐帧循环执行

 ###  setTimeout()

setTimeout()的作用是在一定延时之后执行某个函数。它接受两个参数，第一个参数是函数名称，也可以是箭头函数，第二个参数是延迟的时间，单位为毫秒。

如下示例先定义了要执行的函数，然后将函数名称传给setTimeout()，注意，函数名称后面不可以加括号。

```
function foo(){
        console.log('2秒后')
}
setTimeout(foo, 2000)
```

上述示例在Node.js环境下也同样适用。

###   setInterval()

setInterval()的作用是按照给定的时间间隔重复执行一个函数。它接受两个参数，第一个参数是函数名称，也可以是箭头函数，第二个参数是间隔时间，单位为毫秒。

可以使用clearInterval()函数取消定时。只需要将setInterval()赋给一个变量，如果要取消定时，将该变量传给clearInterval()即可。如下是一个按秒更新的计数器，在5秒之后便不再更新：

```js
let a = 0
   
const 循环 = setInterval(foo, 1000)

function foo() {
    a = a + 1
    console.log(a)
    if (a == 5) clearInterval(循环)
}
```

上述示例在Node.js环境下也同样适用。

 ###   requestAnimationFrame()

requestAnimationFrame() 告诉浏览器希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

requestAnimationFrame()的基本语法如下：

```js
function animation(){
      // 每次执行的逻辑
      requestAnimationFrame(animation)
}
animation()
```


如下示例代码，变量a会在每帧之后加1：

```html
<body>
</body>

<script>
     let a = 0
     function animation() {
            a = a + 1
            document.body.innerHTML = a
            requestAnimationFrame(animation)
      }
     animation()
</script>
```
