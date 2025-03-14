<p id="toc">目录：</p>
<a href="#toc" style="position:fixed; opacity:0.1;bottom:5vw;left:5vw;font-size:1.5rem ">🔼</a>


- [块级和行内元素](#块级和行内元素)
  - [块级元素](#块级元素)
  - [行内元素](#行内元素)
  - [行内块元素](#行内块元素)
- [padding和marging](#padding和marging)
- [块级的宽度和高度](#块级的宽度和高度)


##  块级和行内元素

### 块级元素

如果一个元素是块级元素，或者通过display:block设置成了块，那么这种元素一个独占一行。因此，块级元素是纵向堆叠的。

块元素的宽默认是父元素宽的100%，高由内容撑起来。

例如div、p、h1-h6默认都是块级元素。

### 行内元素

如果一个元素是行内元素，或者通过display:block设置成了行内元素，那么这种元素只能占据文本空间，简单点说，一个行内元素就只相当于一个汉字。行内元素可以包含行内元素，但不能包含块元素。

行内元素的宽和高都由内容撑起来。

例如strong、span、code默认都是行内元素。

### 行内块元素

行内块元素是一种特殊的网页元素，它结合了行内元素和块级元素的特点。具体来说，行内块元素可以在同一行中与其他行内元素一起显示，但它不像行内元素那样只能占据文本空间，也不像块级元素那样独占一行。行内块元素能够设置宽度、高度以及边框、 margin 等样式属性。此外，行内块元素还能容纳其他行内元素，而不仅仅是行内元素本身。

要将元素设置成行内块，使用：

```
display: inline-block;
```

简单点说，行内块元素的特性和块元素完全一样，除了一点：它不独占一行。

例如img、input、button默认都是行内块元素。


##  padding和marging

一个容器元素例如div通常分为：
- margin	外边距
- border	边框
- padding	内边距

对于四个方向上的长度属性，包括内外边距、边框宽度，可以设置4个、3个、2个、1个值，这四种情况代表的含义如下：

- 设置4个值： 依次为上、右、下、左，顺时针旋转。
- 设置3个值：依次为上、左右、下。这点容易忘记。
- 设置2个值：依次会上下、左右。
- 设置1个值：四周采用相同的值。

##  块级的宽度和高度

块级元素的宽度和高度默认继承自父元素。

如果都没有设置，宽度是父元素的宽度，与width:100%等效。而高度由内容撑起来。

如果只设置了宽度，那么高度由内容撑起来。与height:auto。

如果只设置了高度，由于div为块元素，必须占据一行，宽度是父元素的宽度，与width:100%等效。
