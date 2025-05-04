---
title: 推送到远程仓库
---



###   远程仓库管理

命令	|	作用
---	|	---
` git remote `	|	显示远程仓库
` git remote -v `	|	显示远程仓库的详细信息
` git remote add origin 仓库url `	|	新建远程仓库，origin只是命名习惯，可以任意取名，下同
` git remote rm origin `	|	删除远程仓库
` git remote rename origin 新名称 ` 	|	重命名远程仓库
` git push origin 本地分支:远程分支 `	|	将本地仓库的分支上传到远程仓库的分支
` git push origin master `	|	一般情况下，本地和远程仓库的分支名均为master，那么可以这样简写
` git push --force origin 本地分支:远程分支 `	|	忽略其它的提交，强制推送，`--force`等同于`-f`，注意`--force`选项谨慎使用。
` git pull `	|	将本地的仓库与远程仓库对齐


###  git push

git push的作用是将本地仓库推送到远程仓库，如果之前是用git clone下载下来的仓库，那么在.git文件夹会自动记录远程仓库的地址，那么可以直接运行如下命令推送到远程仓库：

```sh
git push
```

如果之前是用git init 初始化的本地仓库，那么就需要使用git remote add 先添加远程仓库，一般名称为origin，然后运行：

```sh
git  push  origin  master:master
```

