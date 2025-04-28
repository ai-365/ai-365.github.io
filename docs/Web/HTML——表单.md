###  服务器代码

本章所有的案例涉及的服务器均使用如下代码处理表单提交过来的数据：

```js
const http = require('http')
http.createServer((request,response)=>{
request.on('data', data=> {
    console.log(`${decodeURI(data)}`)
    response.end('success')
})
}).listen(8080,()=>{
    console.log('running on http://localhost:8080')
})

```

###  表单数据校验


required	必须输入
pattern="ab|cd|ef"	为ab或cd或ef中的一个
minlength="6" maxlength="6"	限制输入长度

正则表达式pattern属性对客户端表单校验非常有用。


###  input单行文本

```html

<form action="http://localhost:8080" method='post'>

        <input type="text" name=a">
        <input type="text" name=b">

        <input type="submit">
</form>

```

为了统一表单提交的流程，建议均使用post方法，此时请求体的body为：

```
name1=value1&name2&value2……
```

表单元素中最重要的属性是name，作为提交的body的键，一定要写。

例如，如果在上述两个文本框中分别输入1和2，则提交的请求体的body为a=1&b=2。


###  input用于其它控件

input除了type为text的纯文本外，还可以作为特殊文本的输入框。

```html

<form action="http://localhost:8080" method='post'>

        邮箱:<input type="email" name="a"> <br>   
        电话:<input type="tel" name="b">  <br>     
        网址:<input type="url" name="c">    <br>  
        搜索框:<input type="search" name="d"> <br>  
        
        数字:<input type="number" name="e"  min="1" max="10" step="2">  <br>     
        滑块:<input type="range"  name="f"   min="1" max="5" step="1" value="2"> <br> 
        
        日期和时间:<input type="datetime-local" name="g">   <br> 
        日期:<input type="date"  name='h'>   <br>   
        时间:<input type="time"  name="i">  <br>   
        
        颜色:<input type="color" name="j">  <br> 

        <input type="submit">
</form>

```

###  多行文本

```
<form action="http://localhost:8080" method='post'>
        <textarea  name="a" ></textarea>
        <input type='submit'>
</form>
```

cols	可见宽度
rows	可见行数
wrap	换行，soft提交的文字没有换行，hard有换行
both	默认值——允许横向和纵向缩放行为。
horizontal	只允许横向水平缩放行为
vertical	只允许纵向竖直缩放行为
none	不允许缩放行为

###  单选框

```
<form action="http://localhost:8080" method="post">
<input type="radio" value="1" name="aaa">第1项
<input type="radio" value="2" name="aaa">第2项
<input type="submit">
```

这里的“第1项”和“第2项”只是每个项目的可读名称，HTML只关心name和value两个属性。name作为提交时的键，相同的name作为一组。而value是提交时的键值。

例如上面的示例中，如果选择了第二项，提交文本就是a=2


###  下拉框

一个简单的下拉框是由 `<select>` 元素及一个或多个 `<option> `子元素构成的，每个子元素指定了选择框的可能取值。

```html
<form action='http://localhost:8080' method='post'>
        <select name=''a">
                <option>1</option>
                <option>2</option>
        </select>
        <input  type='submit'>
</form>
```

value属性不是必须得，如果没有，会将`<option>`元素中的内容作为提交的值。

给`<select>`添加multiple  属性允许多选。给`<option>` 添加selected属性表示默认选中的项目。

###  单选框

```
<form action="http://localhost:8080" method="post">
<input type="radio" value="1" name="aaa">第1项
<input type="radio" value="2" name="aaa">第2项
<input type="submit">
```

这里的“第1项”和“第2项”只是每个项目的可读名称，HTML只关心name和value两个属性。name作为提交时的键，相同的name作为一组。而value是提交时的键值。

例如上面的示例中，如果选择了第二项，提交文本就是a=2

###  复选框

```html
<form action="http://localhost:8080" method='post'>
    <input  type="checkbox"  name="a"  value="1" />
    <input type="submit">
</form>

如果勾选了复选框并提交，那么提交的body就是a=1




