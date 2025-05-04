---
title: HTTP
---

###   快速启动静态文件服务器


快速起一个静态文件服务器：

```sh
python -m http.server 65000
```

###   使用FastAPI实现HTTP服务器

FastAPI是Python 的第三方库，用于实现HTTP服务器。如下是一个简单的示例：

```py
import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse 
import json

app = FastAPI()

@app.post("/post")
# request形参表示请求体，会自动把json转为dict
async def post(request:dict):
        print(request)
        headers = {"Content-Type":"application/json"}
        # 内容为json格式，要与Content-Type 对应
        content = '{"key":"value"}'
        # 返回的消息要包括：状态码、响应头、响应体
        return JSONResponse(status_code=200, headers=headers, content=content)

# 启动
if __name__ == "__main__":
    import uvicorn
    # 启动服务，注意app值为——入口文件:入口函数
    uvicorn.run(app='server:app', host="127.0.0.1", port=8080)

```


###   使用requests模块发送请求

一个典型的HTTP请求包括如下四个组成部分：

-  Method
-  URL
-  headers
-  body

发送post请求：

```py
import requests

url = 'http://127.0.0.1:8080/post'
headers = {'Content-Type': 'application/json'}
body = '{"key":"value"}'

response = requests.post(url, headers=headers, data=body)

# 打印响应码
print(response.status_code)
# 200

print(response.json())
```

发送get请求：

```py
import requests

url = 'http://127.0.0.1:8080/post'
headers = {'Content-Type': 'application/json'}

response = requests.get(url, headers=headers)

# 打印响应码
print(response.status_code)
# 200

print(response.json())
```


 ###   在flask中构造json响应体

在Web开发中，我们经常需要将列表数据封装到HTTP响应中返回给客户端。假设有一个API端点负责返回用户列表：

```py
from flask import jsonify

users = [
    {'id': 1, 'name': 'Alice'},
    {'id': 2, 'name': 'Bob'},
]

@app.route('/users')
def get_users():
    return jsonify(users=users)
```

