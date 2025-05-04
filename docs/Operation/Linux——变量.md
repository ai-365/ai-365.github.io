---
title: 声明变量
---


变量在Linux脚本中非常常见。

声明变量很简单，只需要使用等号将变量名和变量值连接起来即可：

```sh
a=1
str=hello
echo $a
echo $str
```

如果值有空格，则需要使用引号：

```sh
str ="hello bash"
```
要特别注意，等号两边不能有空格，下面的命令是错的：

```sh
a  =  1
bash: a: command not found
```

bash会把a当做命令、= 和1当做参数去执行。

### 打印变量

使用echo加上美元符号$和花括号打印变量：
```sh
echo $PATH
echo ${PATH}
```
如果变量名称不存在空格和特殊字符，上面两种方式都可以。如果存在空格或特殊字符，变量名称就要用花括号括起来。

## 字符串转义

有些时候我们恰好需要用到特殊字符本来的含义，例如：

```sh
echo "coffee is $five"
```

这里会找到名为five的变量解析出来，但我们的本意是只想显示“咖啡是5美元”，所以使用转义：

```sh
echo "coffee is \$five"
```

这样就输出了“coffee is $five”。