##  暂存和提交


###   暂存：git add

git add的作用是在编辑之后，将更改统一提交到暂存区：

```sh
git add .
```

需要说明的是，在2.x版本之后，`git add .`和`git add -A`的作用是完全一样的。

###  提交： git commit

使用gti commit 将暂存区提交到本地仓库。注意，一定要使用-m选项添加提交说明：

```sh
git commit -m  '提交说明'
```


