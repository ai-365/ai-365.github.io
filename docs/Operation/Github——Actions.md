### 新建工作流

工作流在仓库的 .github/workflows 目录中定义。 一个仓库可以有多个工作流。工作流文件的后缀名是.yml。

###  jobs

一个工作流可以有多个job。

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
-  注意steps中的每个步骤前面加上 `-`，表示这几个步骤是并列关系

on表示触发条件，一般为push，也可以手动触发。

###  检出仓库到容器

工作流的本质是讲仓库中的文件复制到云端中的Linux容器中执行，该容器中安装了常用的软件如nodejs、python、java等。因此第一步就是将仓库复制到容器中，这一步称为“检出”，使用：

```
actions/checkout@v4
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

