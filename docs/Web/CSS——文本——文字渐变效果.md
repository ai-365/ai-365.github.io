---
title: 文字渐变效果
---

有些时候，需要对文字的颜色加上渐变效果，则可以使用如下的样式设置：

```html
<style>
    span {
        background-image: linear-gradient(45deg, red, green);
        background-clip: text;
        color: transparent;
        display: inline;
    }
</style>

<span>文字渐变示例</span>
```

注意，某些浏览器可能不支持文字渐变。
