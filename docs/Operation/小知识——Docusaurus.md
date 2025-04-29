###  目录结构

一个新的Docusaurus项目的目录的说明如下：

-  /blog/ ： 包含博客的 Markdown 文件。如果你关闭了博客功能，则可以将此目录删
除。你还可以通过设置 path 参数来改变此目录的名称。在 博客功能指南 文档中可以找到更多详细信息

-  /docs/ ： 包含文档的 Markdown 文件。可在 sidebars.js 中自定义文档在侧边栏中的顺序。如果你关闭了文档功能，则可以删除该目录。你还可以通过设置 path 参数来改变此目录的名称。在 文档功能指南 中可以找到更多详细信息

-  /src/ - 非文档文件，例如独立页面（pages）或自定义的 React 组件。你不必严格地遵守将非文档文件放到这里，但是将它们集中在此目录下可以更轻松地进行管理，以便您需要进行某些格式校验或处理

-  /src/pages ：此目录中的任何扩展名为 JSX/TSX/MDX 文件都将被转换为网站的独立页面(page)。 可以在 独立页面（pages）指南 中找到更多详细信息

-  /static/ - 存放静态文件的目录。此处的所有内容都将被复制到最终的 build 目录的根目录下

-  /docusaurus.config.js - 包含站点配置的配置文件。与 Docusaurus 1 中的 siteConfig.js 文件等价

-  /package.json - Docusaurus 网站也是一个 React 应用程序。你可以在其中安装和使用所需的任何 npm 软件包

-  /sidebars.js - 生成文档时使用此文件来指定侧边栏中的文档顺序

###  文档页面

文档页面具有顶部导航栏，左侧文件列表，右侧目录大纲，是最常用的页面风格。

应将使用文档页面的md文件放到docs目录下。

默认情况下，要在其它文件中链接docs下的文件，有两种方式：
-  相对路径
-  /docs/[文件路径]。 例如，在src/pages/index.js中，要引用/docs/helloworld.md文件，则链接应为`/docs/helloworld`

◆  文档文件与生成的网页链接的映射关系

默认情况下，文档页面的网页链接始终相对于/docs，例如：
-  /docs/helloworld.md：  [url]/[baseUrl]/docs/helloworld
-  /docs/support/help.md： [url]/[baseUrl]/docs/support/help

如果网站只有文档功能，那么可以通过将配置文件中docs的routeBasePath设置为'/'：

```js
docs: {
    routeBasePath: '/',
}
```

此时，文档页面的网页链接的映射关系就变成了：
-  /docs/helloworld.md：  [url]/[baseUrl]/helloworld
-  /docs/support/help.md： [url]/[baseUrl]/support/help





###  独立页面

博客有两种风格的页面：
-  文档风格： 左侧是侧边栏、右侧是本篇文档的大纲
-  独立页面风格： 在文档风格的基础上，取消掉侧边栏和面包屑导航

/src/pages/下的js文件，只要使用export default导出React组件，就自动成为独立页面，访问路径就是文件路径。

例如：
-  /src/pages/hello.js，访问路径是` [baseURL]/hello `
-  /src/pages/index.js，访问路径是 `[baseURL]`
-  /src/pages/help.md， 访问路径是 `[baseURL]/help`

###  检查`<>`符号

用`<>`包裹的会被假定会元素标签，如果不是标准的HTML元素，则会报错，因此，应尽量避免使用`<`、`>`、`<>`符号，如果费用不可，需要使用反引号包裹。

###  失效链接和路由冲突设置

使用如下三个选项设置检测到失效链接或路由冲突时的处理行为，有四种取值：
-  ignore： 忽略
-  log： 记录到控制台
-  warn： 在控制台显示警告信息
-  throw： 报错

下面三个选项默认情况下检测到失效链接会直接报错（throw），影响使用体验，因此手动修改以覆盖默认值。

```
-  onBrokenLinks: 'warn',  // 失效链接警告  
-  onBrokenMarkdownLinks: 'warn',  // 失效markdown链接警告
-  onBrokenAnchors: 'log', // markdown文件中失效的锚点，仅记录
-  onDuplicateRoutes: 'warn' // 路由冲突时发出警告
```

### 侧边栏

对于文件夹，主要有三个属性：
-  type： 设置为‘category’，表示是文件夹
-  label： 显示名称
-  items： 是一个由对象组成的数组，每个元素都表示一个文件

对于每个文件，主要有三个属性：
-  type： 设置为‘doc’，表示是文件
-  id： ‘文件名不要后缀’
-  label： ‘文件名显示名称’

一个示例如下：

```js
{
    type: 'category',
    label: '显示名称',
    items: [
        {
            type: 'doc',
            id: '文件名1不要后缀',
            label: '显示名称1'
        },
        {
            type: 'doc',
            id: '文件名2不要后缀',
            label: '显示名称2'
        },
    ] 
}
```

###  面包屑导航

默认情况下，面包屑根据当前页面的侧边栏路径自动生成。也可以取消面包屑导航：

```js
export default {
    presets: [
        [
            '@docusaurus/preset-classic,
            {
                docs: {
                    breadcrumbs: false,
                },
            }
        ]
    ],
}

```


### 顶部导航

顶部导航由navbar指定，items属性是一个由对象组成的数组，每个元素表示一个文件链接，主要包括如下属性：
-  type： 设置为doc，表示一个文件
-  position： 可选left或right，在左侧还是在右侧显示
-  docId： 文件名不要后缀
-  label： 显示名称

```js
navbar: {
    items: [
        {
            to: '文件路径不要后缀',
            label: '显示名称',
            position: 'left',
        }
    ]
}
```