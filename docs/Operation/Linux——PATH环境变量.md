---
title: PATH环境变量
---

要将某个目录加入到PATH环境变量，使用：

```sh
export PATH=$PATH:新加入的目录
```

注意，第一个PATH不要加`$`符号。

要在每次终端启动时生效，将上面这一行加入到`~/.bashrc`中。