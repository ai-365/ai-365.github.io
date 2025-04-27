## Redux全局状态管理

###  定义状态仓库

三个关键概念：
-  initState ： 初始状态
-  reducer： 一个函数，接收state和action，根据action和state返回新的state。
-  action： 触发状态改变时传递的数据，一般包括type：定义类型、payload： 具体的数据。 

reducer就根据action中的type的不同分开处理，并依赖旧的state和payload返回新的state。

本例中，初始状态是{count: 0}， 如果action的type是inc，则count加1，如果type是dec，则减1，如果type是reset，则归0，如果type是其它的值，则返回旧的state。

store.js ：

```js
import {createStore} from 'redux'

const initState = {count:0}

function reducer(state,action){
        if(action.type==='inc'){
                return {count: state.count+1}
        }else if(action.type==='dec'){
                return {count: state.count-1}
        }else if(action.type==='reset'){
                return {count:0}
        }else{
                return state
        }
} 

export default createStore(reducer,initState)
```


###  监听状态的改变 subscribe()

中心仓库监听变化，一旦数据更新则执行函数
getState()方法获取最新的数据

```js
import { useState } from "react";
import store from "./store.js";

export default function(){
    const [count,setCount] = useState(0)

    Store.subscribe(()=>setCount(Store.getState().count))

    return <>
            {count}
    </>
}
```


###  触发状态的改变  dispatch()

```js
import store from "./store.js";
export default ()=>{

    return <>
        <button onClick={()=>store.dispatch({type:'inc'})}>加1</button>
        <button onClick={()=>store.dispatch({type:'dec'})}>减1</button>
        <button onClick={()=>store.dispatch({type:'reset'})}>重置</button>    
    </>
}
```
