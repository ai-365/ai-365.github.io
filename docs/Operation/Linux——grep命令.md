### grep命令

可以在一个或多个文件中查找字符串

按行查找的。

在文本文件1.txt中查找word：

```sh
grep word 1.txt
```

在多个文件中，在输出前加上文件名及冒号，然后是包含搜索内容的文本。

```
grep word  *.txt
1.txt :
        1.txt中包含word的行
2.txt:
        2.txt中包含word的行
3.txt:
        3.txt中包含word的行
```

只显示包含内容的文件名：

```sh
grep  -l   text  *.txt
```

不区分大小写，如下示例搜索包含word、Word、WORD的行：

```sh
grep -i  word 1.txt
```

grep命令也支持管道，如下示例筛选出以.txt为后缀的文件：

```sh
ls | grep  *.txt
```



