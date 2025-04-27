##  路径的反斜杠问题

由于Windows平台文件的路径包含反斜杠，而这在Python中表示转义，为了规避这个问题，推荐在路径字符串前面加上r标识。

虽然有时候不加也能正常解析，但是最佳做法是始终加上。

##  列举文件

如下示例列举当前目录下的所有文件或子文件夹：

```py
import os
li= os.listdir('.')
print(li)
```

##   工作目录

获取工作目录

使用getcwd()获取工作目录：

```py
os.getcwd()
# 'C:\\Users\\用户名'
```

###  改变工作目录

使用chdir()改变工作目录：

```py
os.chdir(r'C:\Users\用户名\Desktop')
os.getcwd()
# 'C:\\Users\\用户名\\Desktop'
```

##   新建文件夹

使用os.mkdir()方法新建文件夹。

```py
import os
os.mkdir('Test') # 在当地目录新建Test文件夹
```

##   重命名文件或目录

使用rename()方法重命名文件或目录，语法如下：
```py
os.rename(old_name, new_name)
```

通过这种方式也可以移动文件（夹）。

##  路径处理

###  相对路径和绝对路径之间的转换

相对路径到绝对路径的转化，使用：

```py
os.path.abspath('file.txt') # 返回当前目录下file.txt文件的绝对路径
# 'D:\\Test\\file.txt'
```

###   提取和去掉路径的最后一部分

basename()方法提取路径的最后一部分。如果是文件，则返回文件名（含后缀）；如果是目录，则返回目录名。

```py
os.path.basename(r"D:\Test\file.txt")
# 'file.txt'
```

dirname()获取路径所在的文件夹，即去掉路径的最后一个部分，例如：

```py
os.path.dirname(r"D:\Test\file.txt")
# 'D:\\Test'
```

###   合并多段路径

使用join()方法合并多段路径：

```py
os.path.join(r"D:\Test", r"Test\file.txt")
# 'D:\\Test\\Test\\file.txt'
```

###  检测路径是否存在

os.path模块可以检测是否是文件夹、文件、链接、是否存在该路径：

- os.path.isdir(p) ： 检测是否是文件夹
- os.path.isfile(p) ： 检测是否是文件
- os.path.isexists(p)： 检测是否存在该路径
- os.path.islink(p)： 检测是否是链接

以上方法中的p表示路径，可以传入相对或绝对路径。

##  删除操作

###  删除文件

使用remove()方法删除文件，传入文件的相对或绝对路径。注意，这种方法会永久删除文件，而不会将文件移动到回收站。

###  删除空文件夹

使用os.rmdir(p)删除空文件夹：

```py
os.rmdir(r'D:\Test')
```

如果文件夹不是空的，则会报错。

使用os.removedirs(p)递归删除空文件夹：

```py
os.removedirs(r'D:\Test')
```

###  删除非空文件夹

如果要删除非空文件夹，应使用shutil库的rmtree(p)方法。

```py
import shutil
shutil.rmtree(r'D:\Test')
```
