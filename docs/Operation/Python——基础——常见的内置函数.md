本文主要介绍了一些内置函数的用法。

## input()

input()函数用于将用户在终端的输入赋值给变量，该函数接收一个参数作为提示信息：

```py
a = input("请输入a的值：")
```

## type()

将某个变量作为参数传给type()函数，可以返回该变量的数据类型。如下是一些常见的数据类型：

```py
print(type(123))
# <class 'int'>

print(type(123.456))
# <class 'float'>

print(type('hello'))
# <class 'str'>  

print(type(True))
# <class 'bool'>

print(type([]))
# <class 'list'>

print(type({}))
# <class 'dict'>
```


## int()

如果一个字符串是整数形式，那么可以使用int()将其转化为真正的整数，例如：

```py
str1 = '123'
num = int(str1)
print(num, type(num)) 
# 123  <class 'int'>
```

## float()

如果一个字符串是浮点数形式，那么可以使用int()将其转化为真正的浮点数，例如：

```py
str = '123.456'
float1 = float(str)
print(float1, type(float1)))
# 123.456  <class 'float'>
```

### tuple()

tuple()函数接受一个可迭代对象，例如字符串或列表，从而得到一个新元组。

通过字符串得到元组：

```py
tuple("hello")
```

通过列表得到元组：

```py
tuple([1,2,3])
```

类似tuple的函数还有str()、list()等，用于将形式相似的其它类型转化为本类型。
