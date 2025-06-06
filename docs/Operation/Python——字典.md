---
title: 字典
---

Python中的字典包含一个或多个键值对。这些键值对是没有顺序的，因此不能通过索引访问。

因为字典的键值对没有顺序，Python字典不是可迭代对象。

###  新建字典

通常通过一对花括号新建一个字典：

```py
di= {'a': 1, 'b': 2}
```

键需要使用单引号或双引号包裹。

###  字典的长度

通过len()方法得到字典的键值对的数量，即字典的长度：

```py
di = {'a': 1, 'b': 2, 'name': 'bob'}
print(len(di))
```

###  读取字典的值

通过中括号和引号包裹键名称可以访问对应的值。

注意，与JavaScript不同，Python字典不支持使用点号语法！

```py
di = {'a': 1, 'b': 2}
print(di['a']) 
```

###  设置或添加键值对

为键名称赋值即可添加键值对，如果键本来就存在，则会覆盖原来的值。

```py
di = {'a': 1, 'b': 2}
di['c'] = 3
di['a'] = 10
print(di) 
```

###  删除键值对

使用del语句加上键名称可以删除对应的键值对。

```py
di = {'a': 1, 'b': 2}
del di['b']
print(di)
```

###  对字典使用for遍历

```py
users = {'Hans': 'active', 'Éléonore': 'inactive', '景太郎': 'active'}
for user, status in users:
        print(user, status)
        
```

◆  keys()

使用keys()方法得到包含键的一种可迭代对象，可以使用list()包装：
    
```py
di = {'a': 1, 'b': 2}
print(list(di.keys()))  
```

通过如下方式遍历字典中的键：

```py
di = {'a': 1, 'b': 2}

for k in di.keys():
        print(k)
```

◆  values()

使用values()方法得到包含值的一种可迭代对象，可以使用list()包装：

```py
di = {'a': 1, 'b': 2}
print(list(di.values()))  
```

通过如下方式遍历字典中的值：

```
di = {'a': 1, 'b': 2}

for v in di.values():
        print(v)
```

◆  items()

使用items()方法得到包含键值对的一种可迭代对象，可以使用list()包装：

```py
di = {'a': 1, 'b': 2}
print(list(di.items))  
```

通过如下方式遍历字典中的键和值：

```py
di = {'a': 1, 'b': 2}

for k,v in di.items():
    print(k,v)
```
