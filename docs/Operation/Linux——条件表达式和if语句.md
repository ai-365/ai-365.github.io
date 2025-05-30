---
title: 条件表达式和if语句
---

###  条件表达式

在脚本中经常会用到条件表达式，条件表达式常用在if语句中，用中括号包裹，各个部分用空格隔开，例如：

```
if [ 2 -eq 3 ] then 
        echo 相等
fi
```

条件表达式中最常见的情况是比较，比较常用的比较是数值比较和字符串比较。

### 数值比较

与数学公式不同，数值比较需要用到-gt、-lt、-eq表示大于、小于、等于号，而不能是`>`、`<`、`=`。

比较运算符	|	解释	|	示例
---	|	---	|	---
-eq 	|	相等 	|	[    1  -eq  2   ]
-ne		|	不等于	|	[   1  ne  2     ]
-ge		|	大于等于	|	[   1  -eq   2    ]
-gt	|	大于	|	[   2   -gt   1   ]
-le		|	小于等于	|	[   1  -le  2  ]
-lt		|	小于	|	[  1  -le  2   ]

表格示例中空格间距比较大，就是为了题型注意各个部分一定要加上空格。

### 字符串比较

字符串的比较方式是根据ASCII逐个字母比较，常用的字符串比较运算符如下：

比较运算符	|	含义	|	示例
---	|	---	|	---
=	|	 相同	|	`[   'a'   = 'a'  ]`
!=	|	不同	|	`[  'a'   != 'b'  ]`
`<`	|	小于	|	`[  'a'   <  'A'  ]`
`>`	|	大于	|	`[  'a'   > 'A'  ]`
-n str 	|	字符串str长度是否非0	|	[   -n  'a' ]
-z str 		|	字符串str长度是否为0	|	[   -z  '' ]


### 文件判断

文件判断常用的运算符如下表：

运算符	|	解释
---	|	---
-d file	|	判断file是否为目录
-e file	|	判断file是否存在
-f file	|	检查file是否为文件
-r file	|	判断文件是否可读
-s file	|	判断file是否存在并非空
-w file	|	判断file是可写
-x file	|	判断file是可执行


###   if语句

if语句的作用是根据条件执行不同的指令。if语句的通用语法如下：

```
if [ 条件表达式 ]; then
    指令
```

注意条件表达式各个部分都要有空格，例如：

```
if [ 2 -gt 1 ] then 
        echo 大于 
fi
```

单分支就是只有一个分支，如同上面的示例。

双分支有一个if和一个else，例如：

```
if [ 2 -eq 3 ]  then 
        echo 相等
else 
        echo 不相等
fi
```

多分支有一个以上的elif，例如如下脚本1.sh：

```
if [ $1 -ge 80 ] then 
        echo 优秀
elif [ $1 -ge 60 ] then 
        echo 及格
else 
        echo 不及格
fi
```

这里$1表示传入脚本的第一个参数，运行如下示例：

```
$ bash  1.sh 88
优秀
$ bash  1.sh 76
及格
$ bash  1.sh 50
不及格
```

