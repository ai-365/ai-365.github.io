---
title: 优先级
---

###   默认优先级

可以在多处为同一个元素多次设置样式，这需要基于某种规则进行优先级排序，优先级高的会覆盖掉优先级低的属性。CSS样式的优先级从高到底排序如下：

- 元素内嵌样式： 使用style属性写在元素的标签内。
- 文档内嵌样式： 定义在style标签中的样式。
- 外部样式：由link标签的ref属性指定css文件的相对或绝对路径。

###  important 标记

如果在属性值结尾带上!important标记，那么就表示此处的优先级最高。例如下面的例子中，根据优先级规则，h1标题的文本应该为蓝色，但是由于style中使用了!important，所以最终结果为红色。

```html
<style>
h1{ color: red !important }
</style>

<h1 style="color:blue;">Hello,CSS</h1>
```
