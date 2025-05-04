---
title: Fetch API
---


在Node.js和浏览器环境中均可使用fetch()发送HTTP请求、接收服务器响应，语法相同。

基本示例如下：

```js
//  请求四件套：method、url、headers、body
const method = 'post'
const url = 'http://127.0.0.1:8080/post'
const headers = new Headers({'Content-Type': 'application/json'})
const body = '{"key":"value"}'

async function request(){
    const response = await fetch(url, {method, headers,body})
    // 状态码
    const status = await response.status
    console.log(status)
    // 响应体，json格式
    const result = await response.json()
    console.log(result)
}

request()
```

请求方法有两种：GET和POST，如果要携带正文（即请求体），应使用POST方法。

请求头使用new Headers()初始化，传入一个JavaScript对象，每个键值对对应着HTTP请求报文的头部的键值对。

```js
new Headers({'Content-Type': 'application/json'})
```

请求体是一个JavaScript对象，包括method、headers、body三个属性。其中，headers属性的是是一个Headers对象。

```js
const req = {
    method: 'POST',
    headers: new Headers({})
    body: 'req body'
}
```

fetch()函数返回的是一个期约对象，使用await解析期约值。如上面示例代码。

上面示例中的res对象还可以有如下属性和方法：
- status，取得返回码，如200。
- statusText，取得返回码状态，例如OK。
- headers，取得响应头。
- body， 取得响应体，这是一个ReadableStream对象。
- json()，如果响应体是一个JSON对象，使用该方法可以直接解析为JavaScript对象。

