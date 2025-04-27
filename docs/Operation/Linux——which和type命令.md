# which和type命令

## which命令

which命令用于查找命令的路径，例如：

```sh
which ls
/usr/bin/ls
```

## type命令

type命令用于检查命令是否是shell自带命令，也就是说安装了这个shell就可以执行这个命令。与之相对的，外部命令是指系统安装的，与Shell无关的命令，一般情况下，一般用户执行的命令存放于/usr/bin/里面的，管理员命令存放于/usr/sbin里面。

如果输出一个路径则表示是系统命令，如下示例检测是Shell自带还是系统命令：
```sh
type cd
cd is shell builtin  # cd是shell自带

type awk
awk is /usr/bin/awk  # 系统命令
```
