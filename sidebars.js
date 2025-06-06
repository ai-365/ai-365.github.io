// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
export default {

  JavaScriptSidebar: [
    { type: 'doc', id: 'Web/JavaScript——TOC', label: '目录' },
    {
      type: 'category', label: '基础', items: [
        { type: 'doc', id: 'Web/JavaScript——基础——字符串模板字面量', label: '字符串模板字面量' },
        { type: 'doc', id: 'Web/JavaScript——基础——字符串基础', label: '字符串基础' },
        { type: 'doc', id: 'Web/JavaScript——基础——字符串的方法', label: '字符串的方法' },
        { type: 'doc', id: 'Web/JavaScript——基础——正则表达式', label: '正则表达式' },
        { type: 'doc', id: 'Web/JavaScript——基础——相等判定', label: '相等判定' },
        { type: 'doc', id: 'Web/JavaScript——基础——数值类型', label: '数值类型' },
        { type: 'doc', id: 'Web/JavaScript——基础——数据类型简介', label: '数据类型简介' },
        { type: 'doc', id: 'Web/JavaScript——基础——可选链', label: '可选链' },
        { type: 'doc', id: 'Web/JavaScript——基础——简介', label: '简介' },
        { type: 'doc', id: 'Web/JavaScript——基础——布尔类型', label: '布尔类型' },
      ]
    },

    {
      type: 'category', label: '函数', items: [
        { type: 'doc', id: 'Web/JavaScript——函数——立执行函数', label: '立执行函数' },
        { type: 'doc', id: 'Web/JavaScript——函数——箭头函数', label: '箭头函数' },
        { type: 'doc', id: 'Web/JavaScript——函数——函数内部的this对象', label: '函数内部的this对象' },
        { type: 'doc', id: 'Web/JavaScript——函数——函数内部的arguments对象', label: '函数内部的arguments对象' },
        { type: 'doc', id: 'Web/JavaScript——函数——函数的call()和apply()方法', label: '函数的call()和apply()方法' },
        { type: 'doc', id: 'Web/JavaScript——函数——函数的暂时性死区', label: '函数的暂时性死区' },
        { type: 'doc', id: 'Web/JavaScript——函数——函数的默认参数', label: '函数的默认参数' },
        { type: 'doc', id: 'Web/JavaScript——函数——参数收集和参数扩展', label: '参数收集和参数扩展' },

      ]
    },

    {
      type: 'category', label: '数组', items: [
        { type: 'doc', id: 'Web/JavaScript——数组——数组的本质也是对象', label: '数组的本质也是对象' },
        { type: 'doc', id: 'Web/JavaScript——数组——数组的方法', label: '数组的方法' },
        { type: 'doc', id: 'Web/JavaScript——数组——数组的归并', label: '数组的归并' },
        { type: 'doc', id: 'Web/JavaScript——数组——数组的基础语法', label: '数组的基础语法' },
        { type: 'doc', id: 'Web/JavaScript——数组——数组的排序', label: '数组的排序' },
        { type: 'doc', id: 'Web/JavaScript——数组——新建或转化为数组', label: '新建或转化为数组' },
        { type: 'doc', id: 'Web/JavaScript——数组——Set集合类型', label: 'Set集合类型' },
      ]
    },

    {
      type: 'category', label: '对象', items: [
        { type: 'doc', id: 'Web/JavaScript——对象——对象的方法', label: '对象的方法' },
        { type: 'doc', id: 'Web/JavaScript——对象——Map映射类型', label: 'Map映射类型' },
        { type: 'doc', id: 'Web/JavaScript——对象——JSON', label: 'JSON' },
        { type: 'doc', id: 'Web/JavaScript——对象——自定义事件', label: '自定义事件' },
        { type: 'doc', id: 'Web/JavaScript——迭代器和生成器', label: '迭代器和生成器' },
        { type: 'doc', id: 'Web/JavaScript——对象——面向对象', label: '面向对象' },
        { type: 'doc', id: 'Web/JavaScript——对象——对象的getter和setter', label: '对象的getter和setter' },
        { type: 'doc', id: 'Web/JavaScript——对象——对象的语法规则', label: '对象的语法规则' },
        { type: 'doc', id: 'Web/JavaScript——对象——对象的属性特性', label: '对象的属性特性' },
      ]
    },

    {
      type: 'category', label: 'WebAPI', items: [
        { type: 'doc', id: 'Web/JavaScript——WebAPI——地理定位', label: '地理定位' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——定时器', label: '定时器' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——桌面通知', label: '桌面通知' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——自定义事件', label: '自定义事件' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——Fetch', label: 'Fetch' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——FileSystemAPI', label: 'FileSystemAPI' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——iframe', label: 'iframe' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——LocalStorage', label: 'LocalStorage' },
        { type: 'doc', id: 'Web/JavaScript——WebAPI——URLAPI', label: 'URLAPI' },
      ]
    },

    {
      type: 'category', label: 'DOM', items: [
        { type: 'doc', id: 'Web/JavaScript——DOM——获取元素', label: '获取元素' },
        { type: 'doc', id: 'Web/JavaScript——DOM——添加元素', label: '添加元素' },
        { type: 'doc', id: 'Web/JavaScript——DOM——删除元素', label: '删除元素' },
      ]
    }

  ],

  ReactSidebar: [
    { type: 'doc', id: 'Web/React——TOC', label: '目录' },
    { type: 'doc', id: 'Web/React——新建React项目', label: '新建React项目' },
    { type: 'doc', id: 'Web/React——使用Vite创建React项目', label: '使用Vite创建React项目' },
    { type: 'doc', id: 'Web/React——添加样式', label: '添加样式' },
    {
      type: 'category', label: 'Hooks', items: [
        { type: 'doc', id: 'Web/React——Hooks——Hooks使用规则', label: 'Hooks使用规则' },
        { type: 'doc', id: 'Web/React——Hooks——useState()', label: 'useState()' },
        { type: 'doc', id: 'Web/React——Hooks——useEffect()', label: 'useEffect()' },
      ]
    },
    {
      type: 'category', label: 'React Native', items: [
        { type: 'doc', id: 'Web/ReactNative——安卓开发环境的配置', label: '安卓开发环境的配置' },
        { type: 'doc', id: 'Web/ReactNative——预先打包项目文件说明', label: '预先打包项目文件说明' },
        { type: 'doc', id: 'Web/ReactNative——安卓apk签名', label: '安卓apk签名' },
        { type: 'doc', id: 'Web/ReactNative——安卓项目配置文件', label: '安卓项目配置文件' },
      ]
    }
  ],


  CSSSidebar: [
    {
      type: 'category', label: '容器样式', items: [
        { type: 'doc', id: 'Web/CSS——容器样式——轮廓', label: '轮廓' },
        { type: 'doc', id: 'Web/CSS——容器样式——边框', label: '边框' },
        { type: 'doc', id: 'Web/CSS——容器样式——背景', label: '背景' },

      ]
    },
    {
      type: 'category', label: '特殊效果', items: [
        { type: 'doc', id: 'Web/CSS——特殊效果——box-shadow块阴影', label: 'box-shadow块阴影' },
        { type: 'doc', id: 'Web/CSS——特殊效果——线性渐变', label: '线性渐变' },
        { type: 'doc', id: 'Web/CSS——特殊效果——图片阴影', label: '图片阴影' },
        { type: 'doc', id: 'Web/CSS——特殊效果——利用border-radius属性实现裁剪', label: '利用border-radius属性实现裁剪' },
        { type: 'doc', id: 'Web/CSS——特殊效果——过渡', label: '特殊效果——过渡' },
        { type: 'doc', id: 'Web/CSS——特殊效果——动画', label: '特殊效果——动画' },
      ]
    }
  ],


  LinuxSidebar: [
    { type: 'doc', id: 'Operation/Linux——TOC', label: '目录' },
    { type: 'doc', id: 'Operation/小知识——阿里云盘命令行', label: '阿里云盘命令行' },
    { type: 'doc', id: 'Operation/小知识——压缩和解压', label: '压缩和解压' },
    { type: 'doc', id: 'Operation/小知识——Docusaurus', label: 'Docusaurus' },
    { type: 'doc', id: 'Operation/Git——安装和配置', label: '安装和配置' },
    { type: 'doc', id: 'Operation/Git——分支', label: '分支' },
    { type: 'doc', id: 'Operation/Git——回退', label: '回退' },
    { type: 'doc', id: 'Operation/Git——克隆', label: '克隆' },
    { type: 'doc', id: 'Operation/Git——推送到远程仓库', label: '推送到远程仓库' },
    { type: 'doc', id: 'Operation/Git——暂存和提交', label: '暂存和提交' },
    { type: 'doc', id: 'Operation/Git——最常用的Git命令', label: '最常用的Git命令' },
    { type: 'doc', id: 'Operation/Github——Actions', label: 'Github Actions' },
    { type: 'doc', id: 'Operation/Linux——编写Dockerfile文件', label: '编写Dockerfile文件' },
    { type: 'doc', id: 'Operation/Linux——变量', label: '变量' },
    { type: 'doc', id: 'Operation/Linux——管道', label: '管道' },
    { type: 'doc', id: 'Operation/Linux——进程管理', label: '进程管理' },
    { type: 'doc', id: 'Operation/Linux——使用Docker', label: '使用Docker' },
    { type: 'doc', id: 'Operation/Linux——输出重定向', label: '输出重定向' },
    { type: 'doc', id: 'Operation/Linux——数组', label: '数组' },
    { type: 'doc', id: 'Operation/Linux——条件表达式和if语句', label: '条件表达式和if语句' },
    { type: 'doc', id: 'Operation/Linux——重定向', label: '重定向' },
    { type: 'doc', id: 'Operation/Linux——curl命令', label: 'curl命令' },
    { type: 'doc', id: 'Operation/Linux——echo命令', label: 'echo命令' },
    { type: 'doc', id: 'Operation/Linux——grep命令', label: 'grep命令' },
    { type: 'doc', id: 'Operation/Linux——PATH环境变量', label: 'PATH环境变量' },
    { type: 'doc', id: 'Operation/Linux——read命令', label: 'read命令' },
    { type: 'doc', id: 'Operation/Linux——sed命令', label: 'sed命令' },
    { type: 'doc', id: 'Operation/Linux——ssh命令', label: 'ssh命令' },
    { type: 'doc', id: 'Operation/Linux——vim', label: 'vim' },
    { type: 'doc', id: 'Operation/Linux——wc命令', label: 'wc命令' },
    { type: 'doc', id: 'Operation/Linux——which和type命令', label: 'which和type命令' },
    { type: 'doc', id: 'Operation/PowerShell——比较运算符', label: '比较运算符' },
    { type: 'doc', id: 'Operation/PowerShell——读取文件到数组', label: '读取文件到数组' },
    { type: 'doc', id: 'Operation/PowerShell——获取剪贴板内容', label: '获取剪贴板内容' },
    { type: 'doc', id: 'Operation/PowerShell——基础', label: '基础' },
    { type: 'doc', id: 'Operation/PowerShell——数组', label: '数组' },
    { type: 'doc', id: 'Operation/PowerShell——文件管理', label: '文件管理' },
    { type: 'doc', id: 'Operation/PowerShell——CSV和JSON', label: 'CSV和JSON' },
  ],

  PythonSidebar: [
    { type: 'doc', id: 'Operation/Python——TOC', label: '目录' },
    { type: 'doc', id: 'Operation/Python——读写环境变量', label: '读写环境变量' },
    { type: 'doc', id: 'Operation/Python——发送桌面通知', label: '发送桌面通知' },
    { type: 'doc', id: 'Operation/Python——函数', label: '函数' },
    {
      type: 'category', label: '基础', items: [
        { type: 'doc', id: 'Operation/Python——基础——常见的内置函数', label: '常见的内置函数' },
        { type: 'doc', id: 'Operation/Python——基础——基础语法', label: '基础语法' },
        { type: 'doc', id: 'Operation/Python——基础——正则表达式', label: '正则表达式' },
        { type: 'doc', id: 'Operation/Python——基础——字符串', label: '字符串' },
      ]
    },

    { type: 'doc', id: 'Operation/Python——列表', label: '列表' },
    { type: 'doc', id: 'Operation/Python——面向对象', label: '面向对象' },
    { type: 'doc', id: 'Operation/Python——命令行参数', label: '命令行参数' },
    { type: 'doc', id: 'Operation/Python——模块', label: '模块' },
    { type: 'doc', id: 'Operation/Python——日期和时间', label: '日期和时间' },
    { type: 'doc', id: 'Operation/Python——文件目录处理', label: '文件目录处理' },
    { type: 'doc', id: 'Operation/Python——文件内容处理', label: '文件内容处理' },
    { type: 'doc', id: 'Operation/Python——虚拟环境', label: '虚拟环境' },
    { type: 'doc', id: 'Operation/Python——序列', label: '序列' },
    { type: 'doc', id: 'Operation/Python——异步', label: '异步' },
    { type: 'doc', id: 'Operation/Python——映射', label: '映射' },
    { type: 'doc', id: 'Operation/Python——元组', label: '元组' },
    { type: 'doc', id: 'Operation/Python——执行系统命令', label: '执行系统命令' },
    { type: 'doc', id: 'Operation/Python——字典', label: '字典' },
    { type: 'doc', id: 'Operation/Python——HTTP', label: 'HTTP' },
    { type: 'doc', id: 'Operation/Python——pip包管理器', label: 'pip包管理器' },
  ],

};


