##  网页直接读写本地文件： File System API

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <button id="button">打开文件</button>

    <script>
        document.getElementById('button').onclick = handler

             async function handler(){
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile()
            const text = await file.text()
            console.log('旧内容:',text)
            const writable = await fileHandle.createWritable()
            await writable.write(text+'\n新内容\n新内容\n')
            await writable.close();

            const file2 = await fileHandle.getFile()
            const text2 = await file2.text()
            console.log('新内容:',text2)

        }
    </script>

</body>

</html>

```
