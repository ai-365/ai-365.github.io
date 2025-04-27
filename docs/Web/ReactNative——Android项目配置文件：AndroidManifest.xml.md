AndroidManifest.xml是安卓项目的配置文件，里面包含了从应用级别到页面级别的各种属性设置。该文件需要引用其它文件的内容，如变量、图片、代码文件等，因此，需要先弄清楚Android项目结构。

###  Android项目源码结构

react native项目通过Gradle工具编译后的安卓项目代码放在android子文件夹下，而安卓子项目的源代码又放在app/src/main目录下，该目录有三个子文件（夹）：
- java： 存放Java或Kotlin代码。
- AndroidManifest.xml： Android应用配置文件。
- res ： 存放资源文件。

其中，res文件夹又有4个子目录：
- drawable： 存放图片文件或图片描述文件。
- layout： 存放页面描述文件，后缀名为xml。
- values： 存放变量定义文件。例如字符串变量strings.xml、颜色变量colors.xml、样式变量styles.xml等。

由于设备的分辨率不同，所以同一张图片往往需要准备不同的分辨率的图片。因此，drawable又有几个子目录：
- drawable-xhdpi： 存放适配720P屏幕的图片。
- drawable-xxhdpi： 存放适配1080P屏幕的图片。
- drawable-xxxhdpi： 存放适配1.5K及以上屏幕的图片。

在这三个目录存放不同分辨率的同名图片，应用在运行时，会自动根据屏幕分辨率选择具体文件夹下的图片。

大致明白了Android项目结构，就可以分析AndroidManifest.xml文件的内容了。因为后缀名是xml，所以AndroidManifest.xml遵循标准的XML语法。一个XML文件的内容是由多级嵌套节点组成的，每个节点通常包含开始标签、节点属性、子节点、结束标签。下面剖析常见的几个节点。

###  mainfest节点

manifest元素是安卓配置文件的根元素。属性包括：
- xmlns： XML版本。
- package： 包名，通常为公司域名的逆序字符串。

###   application节点

application节点是mainfest节点的子节点，指定了应用级别的一些配置信息，主要属性包括：
- android:allowBackup， 是否运行应用备份。为true表示允许，false为不允许。
- android:icon， 指定App在手机屏幕上显示的图标。
- android:label， 指定App在手机屏幕上显示的名称。
- android:roundIcon， 指定App的圆角图标。

###   XML文件中的变量说明

无论是AndroidManifest.xml，还是页面描述文件，都需要用到变量。

字符串变量放在了res/values目录下的strings.xml中。例如：

```
<resources>
        <string name="变量名">变量值</string>
</resources>
```

这样就可以在其它位置直接使用该变量，加上“@string/”前缀即可：

```
android:label = "@string/变量名"
```

除了字符串变量，另一个经常引用的资源就是图片。假设软件运行在1080P屏幕上，则首先要把图片放到res/drawable/drawable-xxhdpi目录下，然后可以在xml文件中通过属性android:src引用了，格式语法为：

```
android:src = "@drawable/不带后缀名的图片名称"
```


###  activity节点

activity节点是application节点的子节点，它是活动页面的注册声明。一个activity节点代表一个页面，只有在这里注册了activity节点，才能在运行时访问对应的页面。

一个页面通常包含两部分：xml页面描述文件、Java或Kotlin代码文件。

页面描述文件、代码文件、用于注册页面的activity节点的android:name属性，这三个名称应该按照规则对应。用语言描述这种规则不好理解，直接给出示例更加直接，示例如下：

```
页面描述文件名： activity_main.xml
代码逻辑文件名 ： MainActivity.java 或 MainActivity.kt
activity节点：
<activity  android:name=".MainActivity" > </activity>
如果没有子节点，也可以简写成：
<activity  android:name=".MainActivity"  />
```

另外，如果该页面是App的入口页面，还应该在该activity节点下面添加一些内容，修改后的节点内容如下：

```
<activity  android:name=".MainActivity">
        <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER">
        </intent-filter>
</activity>
```

###  user-permission节点

user-permission节点是manifest的子节点，与application节点同级。该节点用来声明应用所需的权限。一个权限对应一个user-permission节点，权限名称作为android:name属性的值。

例如，如果应用需要访问网络，则需要声明：

```
<uses-permission android:name="android.permission.INTERNET" />
```

常见的权限名称如下列表。

网络访问类：

- android.permission.INTERNET	允许应用联网
- android.permission.CHANGE_WIFI_STATE 允许程序改变Wi-Fi连接状态
- android.permission.CHANGE_NETWORK_STATE 允许程序改变网络连接状态
- android.permission.BLUETOOTH 允许程序连接到已配对的蓝牙设备
- android.permission.ACCESS_WIFI_STATE 允许程序访问Wi-Fi网络状态信息


电话短信类：

- android.permission.WRITE_SMS 允许程序写短信
- android.permission.READ_SMS 允许程序读取短信息
- android.permission.READ_OWNER_DATA 允许程序读取所有者数据
- android.permission.SEND_SMS 允许程序发送SMS短信
- android.permission.CALL_PHONE 运行程序打电话
- android.permission.WRITE_SETTINGS 允许程序读取或写入系统设置
- android.permission.WRITE_CONTACTS 允许程序写入联系人数据
- android.permission.RECEIVE_SMS 允许程序监控一个将收到短信息，记录或处理
- android.permission.WRITE_CALENDAR 允许一个程序写入用户日历数据

多媒体类：

- android.permission.SET_WALLPAPER 允许程序设置壁纸
- android.permission.RECORD_AUDIO 允许程序录制音频
- android.permission.CAMERA  允许使用照相机的权限
- android.permission.VIBRATE 允许访问振动设备
- android.permission.MODIFY_AUDIO_SETTINGS 允许程序修改全局音频设置

系统设置类：

- android.permission.MODIFY_PHONE_STATE 允许修改话机状态
- android.permission.INSTALL_PACKAGES 允许安装程序
- android.permission.CLEAR_APP_USER_DATA 允许一个程序清除用户设置
- android.permission.DISABLE_KEYGUARD 允许程序禁用键盘锁
- android.permission.CHANGE_CONFIGURATION 允许一个程序修改当前设置
- android.permission.BRICK 请求能够禁用设备
- android.permission.SET_TIME_ZONE 允许程序设置时间区域
- android.permission.SET_ANIMATION_SCALE 修改全局信息比例
- android.permission.REBOOT 请求能够重新启动设备
- android.permission.SET_ORIENTATION  允许旋转屏幕的权限
- android.permission.DELETE_PACKAGES  允许删除安装包权限
- android.permission.FLASHLIGHT  允许访问闪光灯的权限


