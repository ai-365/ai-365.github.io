---
title: 发送桌面通知
---

使用plyer库，可以直接发送桌面通知。

安装plyer：

```sh
pip install plyer
```


如下示例发送了一个桌面通知：

```sh
from plyer import notification
notification.notify(
    title="test",		#标题
    message="aaaa",	#内容
    timeout=5,		#通知持续时间
)
```

