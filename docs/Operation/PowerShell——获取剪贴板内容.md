
很多时候需要获取剪贴板的内容，PowerShell提供了内置的命令Get-Clipboard。

复制一段文本，运行如下命令在控制台输出剪贴板内容：

```sh
Get-Clipboard
```

如下命令将剪贴板读取到数组中：

```sh
$arr = Get-clipboard 
$arr[0]  # 第一行内容
$arr[-1]  # 最后一行内容
```


