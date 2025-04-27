

###  重定向

使用` > ` 符号将左边本来应该输出到终端的内容重定向到文件，例如：

```
ls > file.txt
```

不过这会覆盖file.txt本来的内容，有些时候我们只是想追加输出，则可以使用` >> ` 符号：

```
ls >> file.txt
```

如果要将输出和错误定向到不同文件，使用 ` > ` 和 ` 2> ` 符号。 

例如，当前目录中，exist.txt存在，noexist.txt不存在，运行如下命令：

```
cat exist.txt noexist.txt > sure.txt 2> error.txt
```

这把 exist.txt 的文件拷贝到sure.txt。而由于noexist.md不存在，所以读取出错，会把错误信息“no such file...”等信息输出到error.txt。

如下命令将输出和错误发送到同一文件：

```
cat exist.txt noexist.txt  >& out.txt 
```

如果要丢弃输出，使用 ` >  /dev/null  2>&1 ` ，例如：

```
cat file.txt  >  /dev/null  2>&1
```

可以使用多个命令组合重定向，例如：

```
pwd; ls; date > file.txt
```

pwd和ls依然会输出到屏幕，只会把date的结果保存到1.md

可以使用括号，先在子shell中执行，然后重定向：

```
(pwd ; ls ; date ) > file.txt
```

