---
title: pip包管理器
---

pip是Python官方的包管理器，默认随着Python程序一起安装。

要检查pip是否已经安装，在终端中运行：

```sh
pip
```

如果已经安装，则会输出pip的帮助信息。

要安装Python包，运行：

```sh
pip install package
```

pip默认会将包安装到如下位置：

```sh
Python安装目录\Lib\site-packages
```

如果要安装到当前目录，运行：

```sh
pip install package .
```

如果将当前目录下的requirements.txt中列出的依赖安装到当前目录，运行：

```sh
pip install -r  requirements.txt  .
```

要显示已经安装的包列表，运行：

```sh
pip list
```

要卸载某个包，运行：

```sh
pip uninstall package -y
```

加上 -y 或 --yes 选项表示确认卸载，如果不加，则需要在终端中手动确认。

可以将包的下载源地址切换到国内源，例如阿里云的源，以提升下载速度。有两种方式：命令替换和手动替换。

第一种方式，命令替换，推荐使用。运行如下命令，切换成阿里云的源：

```sh
pip config set global.index-url  https://mirrors.aliyun.com/pypi/simple
```

第二种方式，手动替换。在用户家目录下，创建文件pip.ini，并添加如下内容：

```
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```

这样，pip会默认使用这个源。

当然，也可以临时指定，使用 ` -i ` 选项，例如：

```sh
pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
```

