##  iframe

###    iframe标签

`<iframe>` 标签可以将另一个页面嵌套进另一个页面。 例如：

主页面main.html：

```html
<h1>main page</h1>
<iframe src="sub.html"><iframe>
```

子页面sub.html：

```html
<h1>sub page</h1>
```


###   postMessage()

postMessage()方法用于主页面向子页面发送消息。

首先，在需要发送消息的源窗口中，通过iframe 标签引入另一个窗口，然后，iframe元素调用postMessage()方法发送消息，主页面main.html的代码如下：

```html
<h1>main page</h1>
<iframe src="sub.html" id="sub"><iframe>

<script>
        document.querySelector('#sub').contentWindow.postMessage('message from main page!')
</script>
```

然后，在子页面sub.html就可以监听消息：

```html
<h2>sub page</h2>
<script>
window.onmessage=e=> document.body+=e.data
</script>
```
