---
title: 文件内容处理
---

##  打开文件

读写文件的第一步是打开文件，使用内置的open()函数，该函数需要指定三个参数：文件名、打开方式、编码。

如果文件名包含路径，路径之间使用正斜杠即可，这也适用于Windows平台。

打开方式大部分情况下只需要三种：r（只读）、w（覆盖写）、a（追加）。

对于编码，大部分情况使用通用的utf8编码即可。

在处理文件对象时，最好使用 with 关键字。优点是，子句体结束后，文件会正确关闭，即便触发异常也可以。而且，使用 with 相比等效的 try-finally 代码块要简短得多。

```py
with open('file.txt',encoding='utf8') as f:
```

f 也叫做文件描述符，这和C语言中的概念是类似的。得到f后，就可以对文件内容进行读写了。



###  关闭文件

使用with语句，子句体结束后，文件会正确关闭，使用closed属性可以检查文件是否已关闭：

```py
with open('file.txt',encoding='utf8') as f :
        print(f.read())
        
f.closed # True
```

###   新建文件

没有直接的方式新建文件，可以通过open()的方式新建。因为open()的原则是不存在就新建。

```py
# 注意，一定要加上'w'或'a'参数
file = open('file.txt', 'w', encoding='utf-8')
file.write('内容')
file.close()
```

## 读取文件内容

###   读取文件内容为字符串

使用read()方法读取全部的内容到一个字符串中，例如：

```py
with open('file.txt',encoding='utf8') as f :
        print(f.read())
```


###  逐行读取文件内容

f对象是可以可迭代对象，使用next()可以逐行读取，如下示例调用了三次next()，相当于读取了前三行：

```py
with open('file.txt',encoding='utf8') as f :
        print(next(f))
        print(next(f))
        next(f)
```


###  读取文件内容为列表

要将文件读取为列表，只需要将read()替换为readlines()即可：

```py
with open('file.txt','r',encoding='utf8') as f :
        print(f.readlines())
```

文件中的每一行就是列表中的元素，元素的类型为字符串。

需要注意的是，如果前面调用了next()方法，那么“光标”就移动到了当前行，readlines()将从下一行开始读取。

###   读取CSV文件

csv第一行表示字段名，从第二行开始，每一行代表一条记录，字段之间用逗号分隔。

如下是读取CSV的示例：

```py
import csv
f=open('file.csv')
reader = csv.reader(f)
next(reader)

row1= next(reader)
print('第一行:',row1)

row2 = next(reader)
print('第二行:',row2)
```

reader是一个可迭代对象，可使用for in 语句遍历。

## 写入文件内容

###  覆盖文件内容

要写入文件内容，需要将第二个参数设置为w。如下示例先删除原有的内容，替换为新内容。如果文件不存在，则创建新文件。

```py
with open('file.txt','w',encoding='utf8') as f :
        f.write('写入的新内容')
```

###  追加文件内容

要在文件末尾追加内容，需要将第二个参数设置为a。如下示例将新内容追加到文件末尾，如果文件不存在，则创建新文件。

```py
with open('file.txt','a',encoding='utf8') as f :
        f.write('追加的新内容')
```

如果要多次追加，多次调用write()即可。

##  提取文件后缀

使用splitext()方法可以拆分路径的后缀，返回一个元组：

```py
os.path.splitext(r"D:\Test\file.txt")
# ('D:\\Test\\file', '.txt')
```


##  获取创建、访问和修改时间

- os.path.getctime(p) ： 创建（create）时间
- os.path.getatime(p)： 访问（access）时间
- os.path.getctime(p)：修改（modify）时间 

上述方法皆传入相对或绝对路径，返回的皆为时间戳。

##   Python对象与JSON格式的转换

### 将字典转化为json文本

使用json模块的dumps()方法可以将对象转换为json文本：

```py
import json
di = {'姓名':'张三', '国籍':'中国'}
jsonStr = json.dumps(di, ensure_ascii=False)
print(jsonStr)
```

注意，由于中文编码的问题，一定要加上ensure_ascii=False，以保证中文输出。

得到的jsonStr就是一个普通的文本，可以将该文本存成一个json文件。

也可以可以使用dump()方法直接将对象直接存为json文件：

```py
import json
di = {'姓名':'张三', '国籍':'中国'}
with open('file.json','w',encoding='utf8') as f :
        json.dump(di, f, ensure_ascii=False)
```

###   将json文本转化为Python字典

使用json模块的loads()方法可以将JSON文本转换为Python对象，例如：

```py
import json
jsonStr = '{"姓名": "张三", "国籍": "中国"}'

di = json.loads(jsonStr)
print(di)

```

jsonStr就是一个普通的字符串，一般来源于对一个json文件的读取，通过使用open()和read()函数读取为字符串即可。

也可以直接加载json文件为Python对象，注意，json文件一定要是utf8编码。例如：

```py
import json
with open('file.json',encoding='utf8') as f :
        di = json.load(f)
print(di)
```
