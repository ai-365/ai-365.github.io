###  curl命令

curl命令的作用是执行网络请求，取回响应结果，主要是http请求。

cURL是一个利用URL语法在命令行下工作的文件传输工具，1997年首次发行。它支持文件上传和下载，所以是综合传输工具，但按传统，习惯称cURL为下载工具。

cURL支持的通信协议有FTP、FTPS、HTTP、HTTPS、TFTP、SFTP、Gopher、SCP、Telnet、DICT、FILE、LDAP、LDAPS、IMAP、POP3、SMTP和RTSP。

curl还支持SSL认证、HTTP POST、HTTP PUT、FTP上传, 

例如如下一行命令访问百度，可用于检测是否联网：

```sh
curl https://www.baidu.com
```

然后，百度首页的html就会显示在屏幕上了。

如下命令将返回的内容保存到本地：

```sh
curl URL >> 1.html
curl  https://www.baidu.com   -o 2.html
curl    https://www.baidu.com  -O
```

-o选项可以重命名，-O选项使用服务器上的名称。

如下示例保存图片：

```sh
curl -o 1.jpg  图片链接
```

如下示例保存cookie：

```sh
curl -c cookie.txt  http://www.linux.com
```

如下示例发送cookie：

```sh
curl  -b 'a=1'  -b  'b=2'  https://www.baidu.com
```

如下示例保存header：

```sh
curl -D header.txt http://www.baidu.com
```

如下示例模拟Chrome访问：

```sh
$ curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com
```