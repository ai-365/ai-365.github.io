---
title: 面向对象
---


###    新建类

使用class关键字新建一个类，示例如下：

```js
class Example{
        a = 0;
        b = 0;

        function foo(){
                console.log(“hello，world”)

        }
}

class p1 = new Example()
p1.a=1
p1.b=2
p1.foo()


class p2 = new Example()
p2.a ='hello'
p2.b='world'
```

在上面的代码中，a、b都是实例属性，foo是实例方法。通过new 新建一个实例，然后可以读写属性、方法。

###   静态成员

静态成员是属于类，而不属于实例，通过类读取和修改。要设置静态成员，使用static关键字，例如：

```js
class Example{
        static a = 0;
}

Example.a = "hello,world"
console.log(Example.a)
```

###   私有属性

普通属性可以通过 ` 实例.属性 ` 的方式获取和修改，而私有成员则不能通过这种方式获取和修改，如果要读写私有成员，只能通过方法。要设置私有属性，使用#符号，无论是初始化还是引用私有属性，都需要使用井号。示例如下：

```js

class Example {
        a = 0;
        #b = 0;

        getB(){
                return this.#b
        }
        
        setB(newValue){
                this.#b = newValue
        }
}

const p = new Example()
console.log(p.getB())

p.setB('hello')
console.log(p.getB())



```

###   属性默认值
可以在定义类的时候，给属性一个默认值，例如：

```js
class Example{
        a = 0;
        b = 0;

        function fun1(){
                console.log(“hello，world”)

        }
}
```

虽然不给a、b赋默认值也可以通过语法检测，但给属性赋默认值是一个好的编程习惯。
