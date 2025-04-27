# 将文本文件读取到数组中

Get-Content 将从文件读取的数据视为数组，其中每行文件内容为一个元素。

```sh
$arr = Get-Content  .\1.md  -encoding utf8
$arr  # 逐行输出文件的每行内容
```
使用utf8是为了避免中文文件的乱码。

可以通过检查返回的内容的长度来确认此点：

```sh
(Get-Content -Path C:\boot.ini).Length
6
```

如下命令将剪贴板读取到数组中：

```sh
$arr = Get-clipboard 
$arr[0]  # 第一行内容
```

