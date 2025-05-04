---
title: 输出重定向
---
## out-host

out-host是管道命令，接受管道前一部分传递过来的命令，然后将数据发送到主机窗口。
```sh
ls  | out-host
```

注意，只能作为管道命令，不能写在开头。

## out-file

out-file是管道命令，接收管道前一部分传递过来的命令，然后将数据保存到文件，如果本来应该显示在终端，则此时不会显示。例如：

```sh
ls | out-file 1.md
```

很多时候需要使用特定的编码保存，如下示例使用utf8保存：

```sh
ls | out-file 1.md -encoding utf8
```
