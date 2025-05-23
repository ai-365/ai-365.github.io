---
title: 编写Dockerfile文件
---


Dockerfile是构建镜像的配置文件，Docker依据Dockerfile文件逐行执行其中的命令，从而构建我们所需的镜像。

###  FROM ： 获取基础镜像

FROM的作用是获取基础镜像，必须写且必须写在第一行。

FROM的格式为：

```
FROM image:tag
```

image是镜像名称，tag是版本标签，一般为数字或latest，如果不写默认为最新版。

###  COPY：复制本地文件到镜像

COPY 的作用是将本地文件复制到镜像内的虚拟目录。COPY的语法格式为：

```
COPY src1 src2 ...  dest
```

src可以是文件或目录。dest是镜像的目标目录。不过，尽量不要将src写成文件夹，因为会复制整个目录的内容,包括文件系统元数据。

文件名支持使用通配符。

COPY命令的示例如下：

```
COPY  *.html  *.js  *.css  /opt
```

复制文件还有一个命令是ADD。ADD和COPY都是复制，但由于COPY命令更透明，一般优先使用COPY。

###  RUN：执行命令
 
RUN的作用是在构建时执行一条或多条命令，例如通过yum或apt下载软件包。

需要特别指出的是，Dockerfile的每一行命令被执行后都会新增一层镜像。因此，最佳的做法是将RUN执行的多条命令合并在一行写，用&&连接，这样有助于减小最终镜像的体积。

RUN命令示例如下：

```
RUN echo 1 && echo 2
```

###  WORKDIR ：设置初始目录

WORKDIR的作用是设置容器启动后的初始目录，类似于cd。此后的命令都将以此为工作目录。

###  ENV：设置环境变量

ENV的作用是设置环境变量，可以一次设置一个：

```
ENV key1=value1 key2=value2
```

###  CMD ：容器启动后的初识命令

从镜像开启容器实例后运行的初始命令，初始命令只能有一个。

CMD命令包括各选项参数用引号包裹，各个部分逗号隔开。例如：

```
CMD echo "hello"
```

###  docker build命令

根据Dockerfile配置文件，创建一个镜像。

默认配置文件为项目目录下的Dockerfile文件。

```
docker build -t 镜像名称:tag  .
```

最后的点号(.)表示将本目录下的所有文件打包成一个镜像，一定不能忽略。
