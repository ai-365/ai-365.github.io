---
title: Electron——入门
---
## 安装

运行如下命令安装Electron：

```sh
npm i electron
```

## main.js文件

main.js是应用程序的入口文件。内容如下：

```js
const { app, BrowserWindow } = require('electron') 
 
const mainWindow = null
app.on('ready',()=>{
    mainWindow = new BrowserWindow({ 
        width:500,
        height:500,
        webPreferences:{ 
          nodeIntegration:true //设置为true就可以在这个渲染进程中调用Node.js
        }
    });
 
    mainWindow.loadFile('index.html'); // 加载本地文件
    // mainWindow.loadURL('https://zhuiyi.ai/'); // 加载远程文件
 
    mainWindow.webContents.openDevTools({ mode: 'bottom' }); // 控制台开关
  
    mainWindow.on('close',()=>{ 
        // 在窗口要关闭的时候触发
        e.preventDefault(); // 避免进程意外关闭导致进程销毁
    })
 
    mainWindow.on('closed',()=>{ 
       // 当窗口已经关闭的时候触发
    })
 
})
```

## index.html文件

main.js中使用的index.html就是第一个页面。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

## 启动应用

运行如下命令启动应用：

```
npx electron .
```
