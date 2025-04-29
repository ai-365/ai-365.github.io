---
title: 使用vite快速创建一个React项目
---


```sh
npm create vite@latest my-react-app -- --template react
```

注意，中间的 -- 不能遗漏。  --template react 指定模板是React。

◆ 配置局域网地址

默认只有localhost地址，配置局域网地址进行端口转发。

直接复制下面代码到vite.config.js中

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        allowedHosts: true,
    }
})
```