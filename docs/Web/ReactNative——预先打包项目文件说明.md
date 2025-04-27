由于从零开始配置React Native环境需要使用代理工具下载大量的包，这会消耗很多时间，而且还要修改一些文件内容，每次都这样做比较麻烦。因此可以先将React Native环境配置好以后将相关的依赖文件打包，未来只要下载这些文件并解压到对应的位置，同时只需要简单的配置就可以直接开始开发React Native项目了，不需要下载大量的包。

相关依赖的版本如下：
- JDK： 20
- Gradle ： 8.6
- Android： 14
- React Native： 0.73.5
- React ： 18.2.0

分享的文件包括：
- jdk-20_windows-x64_bin.exe： JDK 20。
- Android-SDK.7z： Android SDK命令行工具。
- .gradle.7z： gradle构建工具包，已经包含所有所需的依赖。
- ReactNativeDemo.7z： 已经配置好的React Native示例项目。

将这四个文件都下载到本地。

第一步，安装JDK。

双击jdk-20_windows-x64_bin.exe安装JDK到一个目录，例如 D:\Program Files\Java\jdk-20。然后在系统或用户的环境变量列表中，新建一个变量JAVA_HOME，值为JDK的安装目录。然后，在系统或用户的Path变量中，新增一条%JAVA_HOME%\bin。在终端运行 javac、java，测试是否安装配置成功。

第二步，配置Android SDK。

然后，解压 Android-SDK.7z 到一个不包含空格的英文路径，例如直接解压到D盘。在系统或用户的环境变量中，新增一个变量ANDROID_HOME，值为D:\Android-SDK。 随后，在系统或用户的Path变量中，新增三条：
- %ANDROID_HOME%\cmdline-tools\latest\bin
- %ANDROID_HOME%\platform-tools
- %ANDROID_HOME%\build-tools\34.0.0

在终端中依次运行sdkmanager.bat 、 adb检查Android SDK是否配置成功。

第三步，配置gradle。

解压.gradle.7z到用户家目录，注意，压缩包直接包含一个.gradle文件夹，因此直接解压即可，不要再重复创建.gradle文件夹，也就是说，在用户家目录的.gradle文件夹下，应该直接看到子文件夹，而不是.gradle文件夹。

第四步，连接手机。可以通过USB有线连接或者WiFi无线连接。具体方法在另一篇文章中。

至此，环境配置已经完成了。

第五步，解压ReactNativeDemo.7z到一个不包含空格的英文路径下，通过终端进入这个文件，然后运行npm run android，稍等一会儿后，在手机上会看到应用安装请求，点击允许，即可在手机上看到App画面。

要构建apk，先通过终端进入项目的android子目录，然后运行 \gradlew.bat assembleRelease，等待一段时间后，即可在app\build\outputs\apk\release目录下看到apk文件，此安装包可以直接安装到手机上。


