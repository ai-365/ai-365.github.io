# 比较运算符


在命令行或脚本中经常会用到比较操作，比较操作主要分为数值的比较和文本的比较，返回True或False。


常见的比较运算符如下表所示：

比较运算符	|	含义	|	示例
---	|	---	|	---
-eq	|	等于	|	1  -eq 1 
-ne	|	不等于	|	1 -ne 2
-lt	|	小于	|	1 -lt 2
-le	|	小于等于	|	1 -lt 2
-gt	|	大于	|	2 -gt 1 ， 'a' -gt 'A'
-ge	|	大于等于	|	2 -ge 1
-like	|	相似（通配符比较）	|	"1.md" -like "*.md"
-notlike	|	不相似（通配符比较）	|	"1.md" -notlike "*.txt"
-contains	|	包含	|	1,2,3 -contains 1
-notcontains	|	不包含	|	1,2,3 -notcontains 4

注意，文本的比较默认不区分大小写。加上c符号区分大小写，例如：

```sh
'a'  -eq  'A'  # True 默认不区分大小写  
'a'  -ceq  'A'  # False  区分大小写
```
