# 列出文件列表


使用Get-ChildItem列出目录下的文件列表，类似与Linux的ls命令。

```sh
Get-ChildItem -Path   C:\ 
Get-ChildItem -Path C:\ -Force #  显示隐藏项
```

## 使用通配符

可以使用通配符以便缩小文件列表范围。通配符主要有两种：

- `*` :	表示任意数量的字符
- `?` :	表示任意单个字符

例如，若要在 当前文件夹中查找带有后缀 .md 并且基名称中正好有五个字符的所有文件，请输入以下命令：

```sh
Get-ChildItem ?????.md
```

若要在 当前目录中查找以字母 x 开头的所有文件，请键入：

```sh
Get-ChildItem x*
```

若要在 当前目录中查找所有md文件，请键入：

```sh
Get-ChildItem *.md
```


若要查找名称以“x”或“z”开头的所有文件，请键入：

```sh
Get-ChildItem [xz]*
```



# 复制文件或文件夹

Copy-Item命令的作用是复制文件或文件夹，例如：

```sh
Copy-Item -Path 1.txt -Destination 2.txt
```

如果文件已存在，则会失败，使用-Force选项覆盖：

```sh
Copy-Item -Path 1.txt -Destination 2.txt -Force
```

以下命令以递归方式将文件夹 C:\temp\test1 复制到新文件夹 C:\temp\DeleteMe：

```sh
Copy-Item C:\temp\test1 -Recurse C:\temp\DeleteMe
```

下面的命令将 C:\data 中任意位置包含的所有 .txt 文件都复制到 C:\temp\text：

```sh
Copy-Item -Filter *.txt -Path c:\data -Recurse -Destination C:\temp\text
```



# 创建文件和文件夹

使用如下命令创建文件：

```sh
New-Item  1.txt -ItemType file
New-Item  2.txt   # 简写形式
```

使用如下命令创建文件夹：

```sh
New-Item  folder -ItemType Directory
```

使用-Force选项覆盖已存在的文件或文件夹

# 删除文件和文件夹

使用如下命令删除文件和文件夹：

```sh
Remove-Item 1.txt 
Remove-Item folder -Recurse
```


在删除文件时默认需要二次确认是否删除，使用 -Recurse不询问。
