### 输出到终端——echo命令

echo是非常常见的命令，它的作用是输出内容到终端，例如：

```sh
$ echo  hello  bash 
hello bash
```

echo会解析所有的命令行参数，而且会忽略空白符：
```sh
$a="bash"
$echo   hello        $data
hello bash  
```

要想保留空白字符，需要将其放入单引号或双引号中：

```sh
echo   '   hello     bash   '  
echo  "   hello     bash   "
```
单引号和双引号的区别是对变量的解析与否，双引号会读取以$开头的单词并尝试解析变量值，再插入到字符串中，这种方式叫做“内插”。而单引号则不理会进行变量解析。

如果不需要解析变量，则使用单引号即可：

```
echo  'hello $bash'
hello $bash
```

## 写内容到文件的快速方式

echo命令经常用来快速将少量文本内容写入到文本文件，使用重定向符号`>`或`>>`将内容保存到文件而不输出到终端。这两个符号分别可以覆盖内容和追加内容到文件。例如：

```
echo hello bash  >    1.md
echo hello bash  >>  1.md
```
