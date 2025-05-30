---
title: OOP
---

###  类的编码风格

- 类名应采用大驼峰命名法，并使用清晰的语义。
- 在类名的下一行包含一个文档字符串，用于写明该类的简要介绍，或者作用等信息。
- 在类中，使用一个空行分隔方法。
- 如果一个文件有多个类，类与类之间使用两个及以上的空行分隔，并写好注释。

###  类的定义

使用class关键字创建类，类名习惯上首字母大写。注意，类名后面一定要跟上括号和冒号。

```py
class Dog():
        """一次模拟小狗的简单尝试"""

        def __init__(self, name, age):
                self.name = name
                self.age = age

        def sit(self):
                print(self.name + ' is now sitting.')
```

类定义中的所有方法，第一个参数一定是self，表示对应的实例。

`__init__`为构造方法，在实例化时默认调用。在实例化时，从self之后的第二个参数开始，依次传入实例的实际属性。


###  类的实例化

直接像函数一样调用类名，传入实际的成员属性，即可实例化一个实例。

注意，不要写new。

```py
dog = Dog('milk', 3)
```

###  使用句号语法访问属性和成员

```py
dog.name
# milk

dog.sit()
# milk is now sitting.
```

##  类型提示

Python中，比较常见的类型有str、int、float。

```py
a:int = 1

str:str = 'hello' 
```
