###  PowerShell执行策略

基于安全的考虑，PowerShell默认是不能执行脚本的，需要更改执行策略。

如下命令行得到当前执行策略：

```
get-executtionpolicy
```

如下命令设置执行策略：

```
set-executtionpolicy -executtionpolicy remotesigned
```

-  restriced ： 默认设置，不能执行脚本
-  allsigned  ：只允许执行加密签名的脚本
-  remotesigned ：推荐，远程签名，允许执行自己编写的或下载的脚本
-  unrestricted ： 允许任何脚本


### 工作目录

打印工作目录：

```
pwd
或
get-location
```

设置工作目录：

```
Set-Location -Path C:\Windows
Set-Location -Path ..   # 回到上一级
或
cd  C:\Windows
cd  ..  # 回到上一级
```

###  设置和打印变量

变量以美元符号 ` $ ` 开头，后接一个等号，然后是变量值：

```
$a=1
$b = 2   # 空格可有可无，没有像Linux那样严格
```

打印变量使用 `$变量名` 即可：

```
$a=1  
$a
```

PowerShell能根据值自动确定变量的类型。


###   字符串变量

使用单引号或双引号可以设置字符串的值：

```
$a = "hello"
$a  # hello
$b = 'world'
$b  # world
```

但是这两种引号有很大的区别。如果引号中没有对其它变量的引用，那么两种引号均可，如果有，那么在双引号中使用变量会被解析成值，这就是变量内插，而在单引号则不会。

```
$a = 'hello'
$b = "$a,wold" # hello,world    双引号，存在变量的解析
$c = '$a,world'  # $a,world   单引号，原样输出
```



###    别名

```
Get-Alias 	 获取当前会话中的所有别名
New-Alias 	 创建新别名
Set-Alias 	 创建或更改别名
Remove-Alias 	 删除别名
Export-Alias 	 将一个或多个别名导出到文件
Import-Alias 	 将别名文件导入 PowerShell
```


## 获取内置别名

```
Get-Alias
```

获取以p开头的别名：

```
Get-Alias -Name p*
```

## 创建别名

```
New-Alias -Name gas -Value Get-AuthenticodeSignature

Set-Alias
```

## 内置的常用别名

```
 cat -> Get-Content
cd -> Set-Location
cp -> Copy-Item
del -> Remove-Item
dir -> Get-ChildItem
echo -> Write-Output
gc -> Get-Content
gl -> Get-Location
ls -> Get-ChildItem
mv -> Move-Item
rm -> Remove-Item
sc -> Set-Content
write -> Write-Output
```


