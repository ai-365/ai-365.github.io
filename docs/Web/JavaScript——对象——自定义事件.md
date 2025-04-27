##  自定义事件

class CustomEvent {
    constructor() {
        this.listeners = {};
    }
 
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }
 
    trigger(event) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback());
        }
    }
 
    emit(event) {
        this.trigger(event); // 触发change事件
    }
}
 

const myEvent = new CustomArray();

export {myEvent}


## 监听端

import { myEvent } from "./自定义事件.mjs";

myEvent.on('change', () => console.log('Array changed!'));

setInterval(()=>console.log('监听中'),1000)


## 触发端
import { myEvent} from "./自定义事件.mjs";

setInterval(()=>myEvent.push('change'),1500)

