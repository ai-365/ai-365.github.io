##  边框

大部分元素都可以设置边框，例如p、div、img等等。

### 边框样式

边框样式使用border-style制定，默认边框是透明的。因此，如果要设置宽度、颜色，一定一定要首先设置border-style为可见的一种属性，例如solid，这点切记。

大多数情况只需要使用下面这条属性即可：

```css
border-style: solid;
```

border-style可以取如下值：

-  solid  ：定义实线边框，这是最常见的，一般只需要记住这个即可，下面可以不记。
-  none   ： 默认，无边框                
-  dotted ： 定义一个点线边框                
-  dashed  ：  定义一个虚线边框               
-  double ： 定义两个边框。 两个边框的宽度和 border-width 的值相同 
-  groove ： 定义3D沟槽边框。效果取决于边框的颜色值               
-  ridge  ： 定义3D脊边框。效果取决于边框的颜色值          
-  inset  ： 定义一个3D的嵌入边框。效果取决于边框的颜色值        
-  outset ： 定义一个3D突出边框。 效果取决于边框的颜色值         
   

### 边框宽度

指定宽度值：

```css
 border-width:5px;
```

使用内置关键字： thick 、medium（默认值） 和 thin。

```css
p{
        border-style:solid;
   border-width:medium;
}
```

### 边框颜色

边框颜色使用border-color指定，颜色值可以为RGB格式，也可以为十六进制格式。


###  单独设置每个边的样式

如果需要单独设置每个边的样式，则需要在属性中插入各边的名称：left、right、top、bottom，

通用语法为：

```
border-[left/right/top/bottom]-[style/color/width]
```

例如：

```css
p{
        border-top-style:dotted;
        border-left-style:solid;
        border-top-color:red;
        border-left-width: 5px;
}
```

###  合并样式

width/style/color/这三个属性可以合在一起写，中间用空格隔开，通用语法为：

```
border-[left/right/top/bottom]:  [宽度]  [样式]  [颜色]
```

如果各边是一样的，则直接指定border属性即可：

```
border : [宽度] [样式] [颜色]
```

```
p{
        border:5px solid red;
}
h1{
        border-top:5px solid red;
        border-left:5px dotted green;
}
```

### 快速设置四边框数值

如果各边的值不相等，但有不想写多行，可以将各边的值写在一行，并用空格隔开。

不同数量的值有着不同的作用，规则如下：

```
-  四个值： ` 值1  值2 值3   值4` ， 对应 ` 上  右   下   左 `。
-  三个值： ` 值1   值2   值3 ` ，对应 `上  左右共用  下` 。
-  两个值： `值1   值2 `，对应 ` 上下  左右 `。
-  一个值： 表示上下左右相等。
```

例如：

```css
p{
        border-style : dashed;
        border-width: 5px 2px;  /* 上下宽5px，左右宽2px */
        border-color: red  green blue;  /*上边颜色红色、左右颜色绿色，下边颜色蓝色*/
}
```


###   圆角边框

要定义圆角边框，使用border-radius属性。

```
border-radius: 10px;
```

也可以单独为每个角设置一个圆角值，例如：

```
border-top-left-radius: 10px;
```

四个角的名称如下：

-  左上角： top-left
-  右上角： top-right
-  左下角： bottom-left
-  右下角： bottom-right

