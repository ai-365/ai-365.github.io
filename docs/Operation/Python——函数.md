---
title: 函数
---

## 传递实参

传递实参有三种方式： 按位置传递、 按关键字传递、传递任意数量的参数、 传递任意数量的关键字参数

###  按位置传递

位置参数是最常使用、也是默认的传参方式。

使用位置参数时，必须严格按照定义的顺序依次传入。

```py
def foo(first,last):
        print('hello', first, last)

foo('John','Baiden')
# hello Johb Baiden
```

###  按关键字传递

如果指定了形参变量名，可以不严格按照顺序传递实参值，例如：

```py
def foo(first,last):
        print('hello', first, last)

foo(last= 'Baiden', first= 'John')
# hello Johb Baiden
```


###  传递任意数量的参数

在参数前面加上星号，就变成了任意数量的实参。

在传递实参时，把后面的所有参数均打包为一个列表。

```py
def foo(*names):
    print('welcome:')
    for name in names:
        print(f'- {name}\r')

# 此时names=['mike']
foo('mike')

# 此时names=['mike','bob','smith']
foo('mike','bob','smith')
# welcome:
# - mike
# - bob
# - smith
```


###  传递任意数量的关键字参数

在参数前面加两个星号，就变成了任意数量的关键字参数。

此时，无论传递多少个关键字实参，都会打包成一个字典传给函数调用。

```py
def foo(**infos):
    print('welcome')
    for key,value in infos.items():
        print(f'- {key}:{value}')

# 此时infos={'mike':'manager'}
foo(mike='manager')

# 此时infos={'mike':'manager','bob'='programer','smith'='speaker'}
foo(mike='manager',bob='programer',smith='speaker')
```

##  Lambda函数

很多时候为了简化代码量、方便阅读，不需要单独定义函数，而直接使用Lambda函数，例如在map()函数中经常传入的是Lambda函数，而非具名函数。

使用Lambda关键字定义一个Lambda函数，语法如下：

```py
lambda 参数列表: 表达式
```

匿名函数的参数列表可以有1个或多个逗号分隔的参数，也可以没有参数。函数体经常只有一个表达式，表达式的结果就是匿名函数的返回值。示例如下：

```
lambda x : x**2
lambda x,y : x+y
```

