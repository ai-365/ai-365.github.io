
PowerShell内置了对CSV文件的读取和写入。

## CSV

例如有一个1.csv文件，内容如下：

```
名称,数量
苹果,5
橘子,10
梨子,8
```

如下命令读取CSV内容：

```sh
import-csv  1.csv
```
这将按对象格式打印出CSV内容，PowerShell会自动识别首行作为字段名：

```
名称 数量
---- ----
苹果 5
橘子 10
梨子 8
```

如下示例打印每一行并且打印每个字段：

```sh
$rows = import-csv  1.csv
$rows.length  # 3  有几条记录（排除第一行）
foreach （$row in $rows）{
    echo $row   # 打印每一行
}
```
这里的rows是一个数组，CSV中的每一行记录对应数组的一个元素。

## JSON 

PowerShell也内置对JSON文件的读取和写入。

使用如下命令从CSV转为JSON：

```sh
import-CSV   1.csv    -delimiter  ','  |  convertto-json
```
