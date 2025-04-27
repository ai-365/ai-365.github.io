##  克隆

###  git clone 命令

git clone的作用是将仓库下载到本地，语法如下：

```sh
git clone https://github.com/用户/仓库.git
```

### 使用git clone 而不是 git init

由于大多数情况下我们是要将本地仓库推送到远程Github仓库，所以推荐先在Github初始化好仓库，然后拷贝仓库地址，使用git clone。因为这样在本地的.git文件夹内就已经包含了远程地址，之后在本地完成编辑和提交后直接使用git push就可以推送到克隆的那个仓库。

如果使用git init，就要事先使用git remote添加远程仓库，而且很容易造成本地仓库和远程仓库的冲突。

因此，推荐使用git clone而不是git init。

