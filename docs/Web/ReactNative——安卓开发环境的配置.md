###   Android SDK的安装和配置

要开发安卓项目，必须安装Android SDK。可以直接下载Android Studio，这会附带安装Android SDK，也可以只下载Android SDK命令行工具。本文讲解Android SDK命令行工具的安装和使用。

1、下载并解压cmdline-tools命令行工具

首先需要去Android 开发者官网下载cmdline-tools压缩包。打开 https://developer.android.google.cn/studio?hl=zh-cn ，将页面拉到最底部，可以清晰地找到“仅限命令行工具”，根据平台下载对应的压缩包，这里我们选择Windows版本，压缩包体积应该在150MB左右。


![仅限命令行工具]( https://s21.ax1x.com/2024/06/25/pkso9Zq.png) 

下载后解压，将解压出来的 ` cmdline-tools ` 文件夹放到一个只包含英文路径文件夹下，本示例为 ` D:\Android-SDK ` 。 

2、设置ANDROID_HOME环境变量

在用户或系统的环境变量列表中，新增一个环境变量ANDROID_HOME，其变量值为刚刚存放cmdline-tools文件夹的路径，本示例为` D:\Android-SDK `。

请注意，设置 ` ANDROID_HOME ` 环境变量这个步骤非常重要，开发时的许多命令都会读取这个变量，读不到就会报错！

然后，注销或重启电脑以使环境变量生效。

3、移动cmdline-tools下的文件

在 ` %ANDROID_HOME%\cmdlines-tools ` 中新建一个名为latest的文件夹，将原先 cmdline-tools 下的四个文件移动到这里。这一步是官方文档推荐的做法，目的是方便 cmdline-tools 版本的管理。

现在，你的目录结构应该如下图所示：



4、在Path环境变量中添加条目

进入到用户或系统的Path环境变量中，添加一条：

```
%ANDROID_HOME%\cmdline-tools\latest\bin
```

这是为了方便直接直接调用sdkmanager.bat。sdkmanager.bat 用于查看、安装、更新和卸载 Android SDK 的软件包。

5、安装Android开发工具包

使用如下命令列出可用的安卓工具包及其版本：

```sh
sdkmanager.bat  --list --no_https --proxy=http --proxy_host=g.cn --proxy_port=80
```

后面的--proxy_host表示国内的镜像仓库，因为国外的无法访问。

任何Android开发都至少需要安装下面命令中列出的三个包：

```
sdkmanager.bat "build-tools;34.0.0" "platform-tools" "platforms;android-34" --no_https --proxy=http --proxy_host=g.cn --proxy_port=80
```

这里对上面3个工具包的含义做一些解释：
- "build-tools;34.0.0" ： build工具，直接安装list列表中最高的那个版本即可，目前是34.0.0。
- "platform-tools" ：平台工具，没有版本选择，默认安装最新版，直接写这个即可。
- "platforms;android-34" ：注意，这里很重要。这里34的意思是安卓的api34。Android14对应api34，Android13对应api33。api34可以兼容安卓9以上的版本，因此直接安装这个版本即可。

使用如下命令检查已经安装的包：

```sh
sdkmanager.bat  --list_installed
```

输出内容：应该至少包含如下三个条目：

```sh
Installed packages:
  Path                 | Version | Description                | Location
  -------              | ------- | -------                    | -------
  build-tools;34.0.0   | 34.0.0  | Android SDK Build-Tools 34 | build-tools\34.0.0
  platform-tools       | 35.0.0  | Android SDK Platform-Tools | platform-tools
  platforms;android-34 | 3       | Android SDK Platform 34    | platforms\android-34

```

6、接受许可

这个步骤容易被忽略，但却非常非常重要，一定一定要执行！使用如下命令接受许可：

```sh
sdkmanager --licenses
```

系统会提示你接受所有尚未接受的许可。在每一次终端的询问中需要手动输入 y 表示同意使用协议，默认是N（不同意）。

7、在Path环境变量中添加条目

在用户或系统的PATH环境变量中新增如下两项：

```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\build-tools\34.0.0
```

注销或重启电脑以使环境变量生效。

在终端中运行 ` adb ` 命令，如果输出了adb的帮助信息则环境变量设置成功。

至此，Android SDK配置工作已经完成了。


###   JDK的安装和配置

构建安卓项目时，需要用到Gradle打包工具，而Gradle又依赖于JDK，因此需要提前安装JDK。注意，JDK版本必须与Gradle的版本对应，目前，Gradle 8.6适配的最高版本是JDK 20。

进入JDK下载页面下载对应的版本，然后安装，本示例安装目录为：` D:\Program Files\Java\jdk-20 `。

在用户或系统环境变量设置窗口中，新增一条变量，变量名是` JAVA_HOME ` ，变量值是JDK的安装目录，本例中为` D:\Program Files\Java\jdk-20 `。

在PATH环境变量中新增一条：

```
%JAVA_HOME%\bin
```

打开终端，运行下面两个命令：

```sh
javac
java
```

如果输出了帮助信息，则JDK安装配置成功。

###   安卓手机的有线调试和无线调试

将电脑连接到手机是安卓开发的必备步骤。以小米手机为例，进入 “设置—— 我的设备——全部参数与信息” ，连续点击 “MIUI版本” 7次，即可打开开发者选项 。

进入“设置——更多设置——开发者选项”，开启“USB调试”、“USB安装”、“USB调试（安全设置）”。


![开启调试]( https://s21.ax1x.com/2024/06/25/pksTQns.png) 

使用数据线连接电脑和手机，会自动触发打开一个弹窗，在弹窗中有“传输照片”、“传输文件”等选项，选择传输文件。

运行：

```sh
adb  devices 
```

输出的内容中，手机设备标识符右边的状态是device表示已连接。注意，一定要是device，其它的单词都表示未连接。


![adb devices]( https://s21.ax1x.com/2024/06/25/pksT96H.png) 


有线调试需要一直连着数据线，不是很方便。现在大多数手机都支持无线调试。

要使用无线调试，有两个前提条件：

1、 手机已经与电脑使用USB成功连接过一次，且授权没有撤销。对于小米手机，应该要在无线调试页面的下方看到一个“已配对的设备”。
2、 手机与电脑在同一WiFi下，也可以打开电脑上的移动热点。

从有线调试切换到无线调试的过程中，可能需要运行adb kill-server重启一次adb服务，以及重启一次手机上的无线调试开关。重启无线调试开关后，手机的IP地址端口号会改变。


![无线调试]( https://s21.ax1x.com/2024/06/25/pksTJhT.png)

在无线调试页面可以看到手机IP地址和端口，使用adb connect命令连接这个IP地址和端口，例如：

```sh
adb connect 192.168.0.104:39287
```

如果输出connected表示连接成功。

此时，在终端运行 adb devices ，如果设备的状态是device表示连接成功。


![adb devices]( https://s21.ax1x.com/2024/06/25/pksT96H.png)

###   adb命令的使用
- 安装apk ： ` adb install  xxx.apk   -r ` ， -r选项表示覆盖安装
- 显示第三方应用  ： `adb shell pm list packages -3 `
- 显示所有应用    ` adb shell pm list packages  `
- 传递文件 ：  ` adb  push  1.png    /sdcard/1 `
- 拉取文件 ： ` adb    push   .    /sdcard/1/1.png `
- 向屏幕输入一些信息：   ` adb shell input text "hello"  `
- 模拟屏幕点击 ： `  adb shell input tap 500 1450 `
- 模拟滑动：   ` adb shell input swipe 100 500 100 1450 100 `
- 查看电池：  ` adb shell dumpsys battery `


###   Gradle的配置和使用

gradle是React Native和Flutter调试、构建安卓App的打包工具。gradle可以简单的类比为前端的webpack，webpack将源文件打包成HTML、CSS、JavaScript，而gradle将源文件打包成apk或aar（Android Assemble Bundle）。

gradle无需安装，gradle的本质是一些安卓源代码、脚本和配置文件，会调用Android SDK和Java命令构建安卓Apk。

1、Gradle项目结构

gradle项目的文件结构如下：

```
.gradle 
app
gradle
        └─wrapper
                └─gradle-wrapper.jar
                └─gradle-wrapper.propertier
build.gradle
gradle.properties
gradlew
gradlew.bat
settings.gradle
```

每个文件的含义如下：
- .gradle : gradle本地配置
- app：apk的输出目录
- gradle/wrapper/gradle-wrapper.properties： gradle-wrapper的配置文件
- gradle/wrapper/gradle-wrapper.jar： 与gradle-wrapper.propertier对应
- build.gradle ： gradle项目的配置文件
- gradle.properties： gradle项目的配置文件
- gradlew： Linux、MacOS平台构建安卓app时运行的脚本
- gradlew.bat： Windows平台构建安卓app时运行的脚本
- settings.gradle： gradle项目的配置文件

2、 gradle和gradle-wrapper的区别

gradle是一个全局、通用的构建工具，而gradle-wrapper是在项目本地目录使用的构建工具。

对于React Native或Flutter而言，并不需要使用gradle，直接运行gradlew.bat脚本即可，gradlew就是gradle-wrapper对应的脚本工具。

3、 添加国内镜像仓库

换源几乎是包管理器的必备操作。有些软件包的仓库在国内是无法访问的，因此需要增加国内的镜像仓库，实际上只需要改两个文件：

- ./android/gradle/wrapper/gradle-wrapper.properties
- ./android/build.gradle

下面依次说明怎么修改。

要修改的第一个文件是gradle-wrapper.properties，只需要修改distributionUrl的那一行，把后面的链接改成国内阿里云的，文件是gradle-8.6-all.zip，注意版本。

```
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https://mirrors.aliyun.com/macports/distfiles/gradle/gradle-8.6-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

这里补充说明一下每一行的含义：

- distributionBase ： gradle的根目录。GRADLE_USER_HOME默认为家目录下的.gradle文件夹，保持默认，不要修改。
- distributionPath ：gradle的路径，与上面的根目录组合就是gradle的实际位置。
- zipStoreBase和zipStorePath ： 第三方工具的放置位置。

要修改的第二个文件是build.gradle。这里面的repositories部分定义了gradle应该去哪里下载第三方插件，默认内容是google()和mavenCentral()两个国外仓库。

这两个仓库需要使用挂代理才能使用，但是不能删除，因为有些插件的有些版本国内的镜像仓库并没有，必须要去这里下载。所以保留这两个仓库，在后面添加三个仓库，修改后的内容是：

```
repositories {
     google()
     mavenCentral()
     maven { url 'https://maven.aliyun.com/repository/google' }
     maven { url 'https://maven.aliyun.com/repository/jcenter' }
     maven { url 'https://maven.aliyun.com/nexus/content/groups/public'}
    }
```

4、使用gradlew打包安卓apk

通过Flutter命令构建好安卓子项目后，就可以构建apk了。首先进入android子项目中：

```sh
cd android
```

然后运行如下命令开始打包apk：

```sh
.\gradlew.bat assemble
```

实际上gradlew.bat 还有很多其它子命令，表示不同的任务，使用如下命令查看：

```sh
.\gradlew.bat tasks
```

比较常用的有三个命令：
- .\gradlew.bat assemble： 打包成apk文件，国内应用商店使用这个文件。
- .\gradlew.bat bundle： 打包成aar文件，谷歌应用商店使用这个文件。
- .\gradlew.bat build： 除了打包成安装包，还会进行测试等工作。

打包完成后，在./android/app/build/outputs/apk/release文件夹下，可以找到app-release.apk文件。将这个文件拷贝到手机安装即可。不过，由于app没有签名，会提示不能直接安装，忽略风险继续安装即可。
