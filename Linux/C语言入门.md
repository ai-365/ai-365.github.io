<p id="toc">目录：</p>
<a href="#toc" style="position:fixed; opacity:0.1;top:60vh;font-size:1.5rem ">🔼</a>

- [数组和指针](#数组和指针)
- [字符串和指针](#字符串和指针)
- [结构体和指针](#结构体和指针)


printf()函数的作用是打印内容到控制台。

printf()最简单的用法是传递一个字符串字面量：

```
printf("hello,world!")
```

如果要输出包含变量的字符串，则需要使用转换说明语法，该语法使用一个百分号加一个字母，用于匹配变量的类型以及输出形式，从第二个参数开始，依次匹配变量和转换说明。常见的转换说明包括：
- %d： 有符号十进制整数
- %s： 字符串
- %p： 指针
- %f： 浮点数
- %c： 单个字符

printf()同时也会解析转义字符：

```
int a = 1;
char str[20] = "hello,wolrd"; 
printf("output:\n %d \n %s",  a , str );
```

###  数组和指针

数组表示多个相同类型的元素的有序集合，数组在内存中是连续分布的，因此，使用指针运算读取元素非常快。

声明数组需要定义元素的类型，然后将数组名称后面加上中括号，中括号里面可以写上数组的最大长度，也可以不写，不过，最佳实践是永远都写上最大长度。等号右边将元素用花括号包裹，逗号隔开：

```
int arr[3] = {1,2,3};
```

实际元素的数量可以少于定义的长度，但是不能超过定义的长度。

数组名称是一个指针类型，指向数组的第一个元素的地址，也叫数组的首地址：

```
int arr[3] = {1,2,3};
printf("first element address: %p \n", &arr[0]);
printf("%p",  arr);
```

通过输出的结果可以看到，arr的值是一个地址，与数组首地址&arr[0]是相同的。

数组名是一个指针，如果该指针加1，表示该指针向后移动一个元素类型所占字节的长度，也就是跳到下一个元素，例如本例中，元素类型是int，占4个字节，所以向后移动了4个字节，刚好跳到了下一个元素的位置。

在下述代码中，定义了一个指针p，并将数组名称赋给它。此时p指向第一个元素，之后p++，此时p跳到了下一个元素。分别用p和*p打印除了此时的地址及值：

```
int arr[3] = {1,2,3};
int * p = arr;
printf("first address: %p \n", p);
printf("first address: %p \n", &arr[0]);
printf("first value: %d \n", *p);
printf("first value: %d \n", arr[0]);
p++;
printf("second address: %p \n", p);
printf("second address: %p \n", &arr[1]);
printf("second value: %d \n", *p);
printf("second value: %d \n", arr[1]);
p++;
printf("thrid address: %p \n", p);
printf("thrid address: %p \n", &arr[2]);
printf("third value: %d \n", *p);
printf("third value: %d \n", arr[2]);
```

输出结果如下：

```
first address: 0x7ffdb1610e80 
first address: 0x7ffdb1610e80 
first value: 1 
first value: 1 
second address: 0x7ffdb1610e84 
second address: 0x7ffdb1610e84 
second value: 2 
second value: 2 
thrid address: 0x7ffdb1610e88 
thrid address: 0x7ffdb1610e88 
third value: 3 
third value: 3 
```

根据结果可以得知，每次指针加1，地址就加了4个字节，刚好是整数类型所需的字节数。同时，使用*p读取元素值，和使用arr[1]读取元素值是等价的。

请注意，指针p并不知道自己指向的是数组的某个元素，还是一个独立的整数，它只知道自己指向了一个存储整型数据的内存地址而已。运行p++，它也只是按照数据类型移动了4个字节而已，它也并不知道移到了下一个元素，只是因为数组在内存中是连续分布的，指针的移动“刚好对上了”下一个元素的地址而已。总而言之，指针不认识数组，只知道自己指向一个地址，然后根据指针运算规则移动一定的字节长度，然后取出值而已。

我们可以接着上面的代码，虽然上面已经移动到了最后一个元素的位置，但是仍然可以再继续移动：

```sh
p++;
printf("next address: %p \n", p);
printf("next value: %d \n", *p);
```

输出结果是：

```
thrid address: 0x7ffdb1610e8c 
third value: -1025609304 
```

可以看到，指针依然移动了4个字节，依然读取了内存中的值，但这个值是没有意义的，它也不知道自己是否还处于数组所在的内存区域中。


###  字符串和指针

C语言并没有专门用于存储字符串的数据类型，字符串存储在char类型的数组中，如下定义了一个字符串变量：

```
char a[10] = "hello";  
```

要让字符数组表示为字符串，该字符数组的末尾一定要是空字符'\0'，这是普通的字符数组和字符串的最显著的区别，只有在，只有这样，系统才会识别为字符串。上面的字符串声明示例等价于：

```
char a[10] = {'h','e','l','l','o','\0'};
```

如下示例中，a会识别为字符串，而b只是由字符组成的数组，因为末尾没有空字符'\0'：

```c
char a[10] = {'h','e','l','l','o','\0'};
char b[10] =   {'h','e','l','l','o'};
```

因此，在指定字符数组的长度时，要确保该值至少比字符个数多1，因为与要容纳最后的空字符。也就是说，字符串的长度永远比字符数量多1。

不过，通常并不使用字符串数组的方式声明字符串字面量，而是直接采用引号的方式，编译器会自动加入末尾的空字符'\0'。

除了使用字符数组的方式声明字符串以外，还可以使用字符指针：

```c
    const char * str = "hello";
```

与数值、字符这种单一类型不同的是，str的数据类型虽然是指针，但是打印字符串时依然使用的是a，只需要使用%s转换说明即可：

```c
printf("address: %p \n value : %s ", str, str );
```


###  结构体和指针

结构体变量表示一组属性的集合，使用结构体变量首先要使用struct 关键字声明一个结构体类型，例如：

```
struct book{
        char name[20];
        float price;
};
```

结构体类型book包含两个属性成员：字符数组类型的name和浮点类型的price。

定义了结构体类型后，就可以新建一个该类型的结构体变量并对成员依次赋值：

```
struct book book1 = {
        "C Primer Plus",
        89.00
};
```

也可以先定义结构变量，再单独为每个成员赋值：

```
struct book  book1 ;
book1.name = "C Primer Plus";
book1.price = 89.00;
```

除了声明单个结构体变量，还可以声明结构体数组，数组中的每个元素都是一个结构变量，成员相同，对应的值不同。如下示例定义了结构体数组books，其中有2个结构：

```
struct book books[2];
```

books[0]表示第一个结构体，要读写其中的成员，使用books[0].name和books[0].price。类似地，books[1]表示第二个结构体，其中的成员是books[1].name和books[1].price。

在生命结构体数组的时候也可以同时为每个元素的成员赋值：

```
struct book{
        char name[20];
        float price;
};

struct book books[2] = {
        {
                "C Primer Plus",
                89.00
        },
        {
                "C++ Primer Plus",
                99.00
        } 
};
```

指针表示指向某个变量的内存地址，结构体类型的指针则表示指向某个结构体变量的内存地址。

指向结构的指针比结构本身更容易操控。结构体数组本质是也是数组，所以使用指针运算可以直接跳到下一个结构体元素的地址。对于函数调用，传递指针比拷贝结构体变量副本更有效率。

如下示例代码先定义一个结构体类型book，然后定义了一个结构体数组books，随后声明了指向该数组的指针，该指针首先指向第一个结构体元素，然后通过解引用方式读取结构体变量中的成员，最后通过指针运算移动指针，读取下一个结构体元素：

```
struct book{
        char name[20];
        float price;
};

struct book books[2] = {
        {
                "C Primer Plus",
                89.00
        },
        {
                "C++ Primer Plus",
                99.00
        } 
};

/* 这是一个指向结构变量的指针 */
struct book * p;

/*  由于books是数组，所以等价于 p=&books[0]  */
p= books;

/* 由于优先级的原因，*p需要用括号括起来 */
printf("%s \n",(*p).name);

/* 指针指向了数组中的下一个结构变量 */
p ++ ;
printf("%s \n",(*p).name);
```
