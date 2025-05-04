---
title: 虚拟环境：venv
---


要创建虚拟环境，请确定要放置它的目录：

```sh
python -m venv 虚拟环境目录
```

一旦创建虚拟环境，就会在虚拟环境目录的Scripts下面找到两个脚本文件：
- activate.ps1 激活该虚拟环境。
- deactivate.ps1 退出该虚拟环境

虚拟环境本质上是一个文件夹，包含了特定包及其版本。避免了多个项目第三方包版本的冲突。

执行如下命令，安装requirements.txt列出的包依赖：

```sh
pip install -r requirements.txt
```
