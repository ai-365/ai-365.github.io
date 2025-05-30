---
title: 字符串
---

本文内容：
-  内置函数str()
-  format()
-  大小写
-  合并字符串
-   isxxxx()系列函数
-   移除前缀、后缀
-   startswidth()和endswidth()


### 内置函数str()

使用str()可将其它数据类型转换为字符串。下面是一些示例：

```py
str1 = str(123)
print(str1,type(str1))
# 123 <class 'str'>

str2 = str([1,2,3])
print(str2,type(str2))
# [1, 2, 3] <class 'str'>

str3 = str({"a":1,"b":2})
print(str3,type(str3))
# {'a': 1, 'b': 2} <class 'str'>
```

使用str()可将其它数据类型转换为字符串。下面是一些示例：

```py
str1 = str(123)

str2 = str([1,2,3])

str3 = str({"a":1,"b":2})
```

str()可以避免字符串和数字合并时发生的错误，例如下面的例子，你可能期望输出 'I am 40 years old'，但实际会发生语法错误：

```py
age = 40
print('I am ' + age + ' years old')
# TypeError: can only concatenate str (not "int") to str
```

此时，str()就派上用场了，将整数转为字符串：

```py
age = 40
print('I am ' + str(age) + ' years old')
# I am 40 years old
```


###  format()

执行字符串格式化操作。点号左边的字符串如果包括花括号括起来的替换域，替换域可以包含位置索引。点号右边写上替换为的值，如果有多个替换域，依次书写。


```py
"The sum of 1 + 2 is {0}".format(1+2)
# 'The sum of 1 + 2 is 3'
```

###  大小写

- 小写：str.lower()
- 大写： str.upper()
- 大写转小写，小写转大写： str.swapcase()


###  合并字符串

可以使用加号合并两个或多个字符串，例如：

```py
'Py' + 'thon'
# 'Python'
```

使用空格也可以合并，不过这种方式仅适用于字符串字面量，例如：

```py
'Py'  'thon'
# 'Python'
```

###  isxxxx()系列函数

- isalnum()： 如果字符串中的所有字符都是字母或数字且至少有一个字符，则返回 True，， 否则返回 False。
- isspace()： 如果字符串中只有空白字符且至少有一个字符则返回 True ，否则返回 False 。
- istitle()： 如果字符串中至少有一个字符且为标题字符串则返回 True ，例如大写字符之后只能带非大写字符而小写字符必须有大写字符打头。 否则返回 False 。
- isupper()： 如果字符串中至少有一个区分大小写的字符且此类字符均为大写则返回 True ，否则返回 False 。
- islower()： 如果字符串中至少有一个区分大小写的字符且此类字符均为小写则返回 True ，否则返回 False 。
- isspace()： 如果字符串中只有空白字符且至少有一个字符则返回 True ，否则返回 False 。
- isnumeric()： 如果字符串中至少有一个字符且所有字符均为数值字符则返回 True ，否则返回 False 。 
- isdigit()： 如果字符串中的所有字符都是数字，并且至少有一个字符，返回 True ，否则返回 False 。

###  移除前缀、后缀

```py
str.removeprefix(prefix)
```

如果字符串以prefix开头，则返回删除了该前缀的新子串。如果不以该前缀开头，返回原字符串。

```py
'TestHook'.removeprefix('Test')
# 'Hook'

'BaseTestCase'.removeprefix('Test')
# 'BaseTestCase'
#  虽然包含，但不是前缀
```

```py
str.removesuffix(suffix)
```

如果字符串以 suffix 字符串结尾，则返回删除了该后缀的新子串。如果不以该后缀结尾，返回原字符串。

```py
'MiscTests'.removesuffix('Tests')
# 'Misc'
```

###   startswith()和endswith()


```py
str.endswith(substr)
```

如果字符串以指定的 substr结尾则返回 True，否则返回 False。 substr 也可以为由多个供查找的后缀构成的元组。

可选参数，限定起始和结束位置。

```py
str.startswith(substr)
```

如果字符串以指定的 substr 开始则返回 True，否则返回 False。substr 也可以为一个元组，只要有一个符合要求就返回True。




