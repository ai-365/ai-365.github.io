##  对象的getter和setter

```js
const obj ={   
        _a:1,
        get a(){
                console.log('你读取了属性a')
        },
        set a(v){
                console.log('你设置了a的值为',v)
                this._a = v
        }
}
```
