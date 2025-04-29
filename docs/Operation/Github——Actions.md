### 新建工作流

工作流在仓库的 .github/workflows 目录中定义。 一个仓库可以有多个工作流。工作流文件的后缀名是.yml。

###  典型示例

一个典型的工作流文件定义内容如下：

```yml
name: 工作流名称
on: [push]
jobs:
    job1: 
        name: job1的名称
        runs-on: ubuntu-latest
        steps: 
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                node-version: 20
                cache: npm
            - name: run command
              run: |
                npm install
                npm run build
```

书写工作流是由两个基本的注意事项：
-  注意缩进，缩进表示层级关系。
-  注意steps中的每个步骤前面加上 `-`，表示这几个步骤是并列关系。

第一行name表示工作流的名称。

第二行on表示触发条件，一般为push，也可以手动触发。

jobs包括一个或多个job。

在每个job下，name表示改job的名称，runs-on表示该job运行在哪个操作系统中，一般为ubuntu-latest。

steps表示多个独立的运行步骤。主要有两类：
-  uses： 使用预定义的actions，例如检出操作、nodejs程序、upload-pages-artifact、deploy-pages等。
-  run： 在环境中需要执行的命令。

###  检出仓库到容器

工作流的本质是讲仓库中的文件复制到云端中的Linux容器中执行，该容器中安装了常用的软件如nodejs、python、java等。因此第一步就是将仓库复制到容器中，这一步称为“检出”，使用：

```yml
uses: actions/checkout@v4
```

###  name属性

每个层级都可以指定一个name，便于理解和排查错误。
-  yml文件顶层name属性： 该工作流的名称，如果不指定，则工作流名称为文件名
-  uses 上一行的name： 该uses的名称
-  run 上一行的name： 该次命令的名称

例如：

```yml
- name: Chekout out repo
  uses: actions/checkout@v4
- name: print work directory
  run: pwd
```

###  使用nodejs

```yml
uses: actions/setup-node@v4
  with:
    node-version: '20.x'
```


###  使用npm缓存

使用每次构建项目都要运行npm install，这非常浪费资源，因此可以使用npm缓存，在第一次下载了package.json中声明的包后，会将其缓存到容器的某一目录中，供后续直接使用。后续的工作流执行时，如果package.json内容没有改变，则直接使用缓存。如果内容改变，则下载新的依赖包。

```yml
uses: actions/setup-node@v4
  with:
    node-version: '20.x'
    cache: 'npm'
```

### 使用run 执行命令

使用run执行Linux的命令，例如：
```
run: echo 'hello world'
```

注意，每一步的run命令的工作目录为仓库根目录。

对于几个紧密相关的命令，推荐的最佳做法是写在一个run中：

```yml
run: |
    pwd
    npm install
    npm run build
```

###  上传某个文件夹下的内容到pages

对于博客网站，使用构建工具构建后，会将静态的html、js、css文件放到某个文件夹中，一般为build。

为了使用Github pages服务，需要将该文件夹上传到pages服务中，使用`actions/upload-pages-artifact@v3`，并需要同时指定文件夹相对路径。示例如下：

```yml
- name: Upload Build Artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: build
```

###  