# ts文件的说明
ts的文件中如果直接书写js语法的代码，那么在html文件中中直接引入ts文件，在谷歌浏览器中式可以直接使用的。
如果ts文件中有了ts的语法代码，那么就需要把这个ts文件编译成js文件，在htmk文件中引入js的文件来使用。
ts文件中的参数中的形参，如果使用了某个类型进行修饰，那么最终在比那一的js文件中式没有这个类型的。
ts文件中的变量使用的是let进行修饰，编译的js文件中的修饰符就变成了var了。

# 关于ts文件的编译
  npm i -g typescript
用命令行工具打开当前文件夹位置，然后用 
  tsc 01_第一次.ts 
将ts文件编译成 tsc 01_第一次.js 
然后在index.html使用就不会报错了(原本的ts文件声明了变量是string,直接在浏览器中使用会因不能识别而报错)

# ts在vscode中实现自动编译
1.使用typescript生成配置文件tsconfig.json
  tsc --init
2.修改tsconfig.json 配置
  "outDir":"./js",    // 将编译后的文件输出到./js目录下
  "strict": false     // 关闭严格模式
3.vscode启动监视任务：
  菜单栏终端 -> 运行任务 -> 监视tsconfig.json

# 类型注解
TS用来限制函数或变量的方式。

# interface接口
接口是对象的状态(属性)和行为(方法)的抽象(描述) --> 就是接口定义了一个数据类型，里面的内容有限制。

# class类
ES6也提供了class类的方法，一般而言，需要先定义class,然后再实例化调用。

# ts中的基本类型
boolean布尔类型  let flag: boolean = true

number浮点型     let a1: number = 10

string字符串类型    let str:string = '床前明月光'

array数组类型
```
  //  数组定义方式1
  //  语法:let 变量名：数据类型[] = [值1,值2,值3....]
  let arr1:number[] = [10,20,30,40,50]

  //  数组定义方式2:泛型的写法
  //  语法：let 变量名:Array<数据类型> = [值1,值2,值3]
  let arr2:Array<number> = [100,200,300]
```

元组类型:在定义数组的时候，类型和数据的个数，一开始级已经限定了
```
   //  注意：元组类型在使用的时候，数据的类型的位置和数据的个数，应该和在定义元组的时候的数据类型及位置一致
   let arr3:[string, number, boolean] = ['jojo',666.12345, true] 
```

枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始，依次的递增加一
```
    enum Color {
        Red,
        Green,
        Blue
    }

    // 枚举数值默认从0开始依次递增
    // 根据特定的名称得到对应的枚举数值
    let myColor: Color = Color.Green // 0
    console.log(myColor, Color.Red, Color.Blue)

    //  也可以指定元素编号来声明，只指定第一个元素，后面一次+1，全部元素位置也能手动指明
    enum Color {
        Red = 1,
        Green = 2,
        Blue = 4
    }
    let c: Color = Color.Green
```

any类型,不指定数据类型，其实实际使用中很容易被滥用
```
    let m:any = 100
    let anyArr:any[] = [100, 'jojo,我不做人啦！', true]
```

void类型，表示函数没有返回值
```
  function showMsg():void{
    console.log(`没有返回值的函数可以用void, 在函数命名的小括号后面添加`)
  }
```

object类型，表示非原始类型，也就是除 number, string, boolean之外的类型，其实你理解成js中的对象就好了
```
  function getObj(obj:object):object{
    console.log(obj)
    return {
      name:'jojo',
      age:18
    }
  }
  console.log(getObj({msg:'yooo'}))
```

undefined类型 和 null类型，undefined 和 null 默认情况下可以作为所有类型的子类型，也就是说可以把 undefined 和 null 赋值给其他类型的变量 --> 需要在tsconfig.json中关闭严格模式

联合类型(Union Types)表示取值可以为多种类型中的一种
```
  //  需求1：定义一个函数得到一个数字或字符串的字符串形式值
  function getString(str:number|string):string{
    return str.toString()
  }
  console.log(getString('jojo'))

  //  需求2：定义一个函数得到一个数字或字符串值的长度
  
  function getLength(str:number|string):number{
    // return str.toString().length
    // 如果str本身就是string类型，那么是没有必要调用toString()方法的
    // 判断处理类型
    if(str.length){
      // error ts不能判断str的类型，所以会报错，使用类型断言来解决
      // str是字符串类型直接返回
      return str.length
    }else{
      //  str是数值类型
      return str.toString().length
    }
  }
```

类型断言：告诉编译器，我知道我自己是什么类型，也知道自己在干什么
类型断言(Type Assertion):可以用来手动指定一个值的类型,目的是为了绕开编译器的语法检查
语法：
    方式一:(<类型>值)
    方式二:(值 as 类型)， tsx中只能用这种方式
```
    //  类型断言解决语法检查
    function getLength(str:number|string):number{
        if((<string>str).length){
        //  写法一
        // return (<string>str).length
        //  写法二
        return (str as string).length
        }else{
        //  str是数值类型
        return str.toString().length
        }
    }
    console.log(getLength('123'))
    console.log(getLength(111))
```

类型推断：TS 会在没有明确的指定类型的时候推测出一个类型
```
  //  情况1：定义变量时赋值了，推断为对应的类型
  let info = 100  //  推断为number
  info = '改成string' // number类型不能赋值string,报错
  console.log(info)

  //  情况2：定义变量时没有赋值，推断为any类型
  let info2;  // 没有赋值推断为any类型
  info2 = 1   //   any类型赋值number
  info2 = '我被重新赋值了'  //  any类型赋值为string
  console.log(info2)
```

# 接口

什么是接口interface？
TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述)
--> 就是接口定义了一个数据类型，里面的内容有限制。
--> 接口是一种类型，一种规范，是一种规则，是一种能力，是一种约束。

interface的基本使用
  interface定义一个数据类型，然后这个数据类型被其他对象使用实现(比如class)
```
  // 需求: 创建人的对象, 需要对人的属性进行一定的约束

  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // sex是string类型, 可以没有

  /*
    接口类型的对象可以添加可选属性和只读属性
      多了或者少了属性是不允许的
      可选属性:?  放到属性值之后
      只读属性：readonly 作为修饰词放到属性之前
  */
  // 定义一个接口，该接口作为person对象的类型使用，限定或约束该对象中的属性数据
  interface IPerson{
    //  readonly id 是只读的，是number类型，const修饰属性，想要设置该属性是只读的，是不能用的
    readonly id:number,
    name:string,
    age:number,
    //  用?来表示属性可有可无
    sex?:string,
    // xxx:12  // errror 接口中没有定义的属性不能写
  }
  // 定义一个对象，该对象的类型就是定义的接口IPerson
  const person:IPerson = {
    id:1,
    name:'乔瑟夫·乔斯坦',
    age:18,
    // sex:'男' // sex属性可有可没有
  }
  // person.id = 2  //  只读属性不能被被重新赋值
  person.name = 'jojo'  // 非只读属性可以正常赋值
  console.log(person)
```

函数类型接口，默认的接口是定义数据类型，函数类型接口就是定义函数的传入的参数和返回内容
```
  //  定义一个接口，用来作为某个函数的类型使用
  interface ISearchFunc{
    //  定义一个调用签名,传入两个string参数，返回一个boolean
    (source:string, subString:string):boolean
  }
  
  //  定义一个函数，该类型就是上面定义的接口
  //  也就是传入两个string参数，返回一个boolean值
  const searchString:ISearchFunc = function (source:string, subString:string):boolean{
    //  返回第二个参数是否在第一个参数中的结果
    //  在source字符串中查找subString这个字符串
    return source.search(subString) > -1
  }
  
  //  调用函数
  console.log(searchString('今天好热啊！','今天'))
```

类 类型：类的类型，类的类型可以通过接口来实现
-> 接口可以定义默认属性和方法，类可以通过implements来实现一个或多个接口约束的属性和方法
-> 接口之间也可以用extends来继承属性方法
-> 如果是做了代码分割，class可以直接implements多个接口来实现对应方法，也可以用一个接口extend需要的多个接口内容，再让class去实现
```
  //  定义一个接口
  interface IFly{
    //  该方法没有任何的实现(方法中什么都没有)
    fly()
  }

  //  定义一个类，这个类的类型就是上面定义的接口(实际上也可以理解为，IFly接口约束了当前的这个Person类)
  class Person implements IFly{
    //  实现接口IFly中的方法
    fly(){
      console.log(`提供一个fly的功能函数`)
    }
  }

  const person = new Person()
  person.fly()  //  调用对应的方法

  //  定义一个接口
  interface ISwim{
    swim()
  }

  //  定义一个类，这个额类的类型就是IFly和ISwim(当前这个类可以实现多个接口，一个类同时也可以被多个接口进行约束)
  class Person2 implements IFly, ISwim{
    fly(){
      console.log(`Person2 实现 fly`)
    }
    swim(){
      console.log(`Person2 实现 swim`)
    }
  }
  const person2 = new Person2()
  person2.fly()
  person2.swim()

  //  总结：类可以通过接口的方式，来定义当前这个类的类型
  //  类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现

  //  接口可以继承其他的多个接口
  //  定义一个接口，继承其他的多个接口
  interface Mixed extends IFly, ISwim{}

  //  定义一个类，直接实现Mixed这个接口
  class Person3 implements Mixed{
    fly(){
      console.log(`Person3 实现 fly`)
    }
    swim(){
      console.log(`Person3 实现 swim`)
    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swim()

  //  总结：接口和接口之间叫继承(使用的extends)，类和接口之间叫实现(使用的是implements)
```

# 类
类：可以理解为模板，通过模板可以实例化对象，面向对象的编程思想
```
  //  基本使用
  //  ts中类的定义及使用
  class Person{
    //  定义属性
    name:string
    age:number
    gender:string
    //  定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
    constructor(name:string ='麦基桑',age:number=22, gender:string='男'){
      //  更新对象中的属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    //  定义实例方法
    sayHi(str:string='默认内容'){
      console.log(`传入的str的内容为${str}`)
      console.log(`name:${this.name}`)
      console.log(`age:${this.age}`)
      console.log(`gender:${this.gender}`)
    }
  }
  //  对类进行实例化
  const person = new Person('jojo',18,'男')
  person.sayHi()
```

类的继承
继承:类与类之间的关系，需要使用extends关键字
子类中可以调用父类中的构造函数，使用的是super关键字(包括调用父类中的实例方法，也可以使用super)
子类当中可以重写父类中的方法

继承后类与类之间的叫法：
  A类继承了B这个类，那么此时A类叫子类，B类叫基类
  子类 ---> 派生类
  基类 ---> 超类(父类)
  一旦发生了继承的关系，就出现了父子类的关系(叫法)
```
  //  定义一个类,作为基类(超类/父类)
  class Person {
    //  定义属性
    name: string //  名字
    age: number  //  年龄
    gender: string //  性别
    //  定义构造函数
    constructor(name: string = 'dio', age: number = 200, gender: string = '男') {
      //  更新属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    //  定义方法
    sayHi(str: string = '默认内容') {
      console.log(`查看传入的内容${str}`)
      console.log(`name:${this.name}, age:${this.age}, gender:${this.gender}`)
    }
  }

  //  定义一个类，继承自Person
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      //  调用的是父类中的构造函数，使用的是super
      super(name, age, gender)
    }
    //  可以调用父类中的方法
    sayHi() {
      console.log('我是学生类中的sayHi方法')
      //  调用父类中的方法
      super.sayHi('哈哈哈')
    }
  }
  //  实例化Person
  const person = new Person('jojo', 18, '男')
  person.sayHi('呀咧呀咧')
  //  实例化Student
  const student = new Student('小明',7,'男')
  student.sayHi()
```

类的多态
父类型的引用指向子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为。
子类继承父类，在对象判断上可以被判断为父类的同类，但是内置方法属性上被改写，调用会有不同的结果。
--> 子类继承父类的属性方法后,修改了部分属性内容，在类型判断是被视为与父类同类。
--> 从指定传入参数是父类，但是你传入继承后的子类也能行的通这点看，子类被当成了父类，看起来是父类的不同形态，也就是多态。o(╯□╰)o
```
  //  定义一个父类
  class Animal{
    //  定义一个属性
    name:string
    //  定义一个构造函数
    constructor(name:string){
      //  更新属性值，初始化
      this.name = name
    }
    //  实例方法
    run(distance:number=1){
      console.log(`跑了${distance}米`, this.name)
    }
  }
  //  定义一个子类
  class Dog extends Animal{
    //  构造函数
    constructor(name:string){
      //  调用父类的构造函数实现子类属性中的初始化操作
      super(name)
    }
    //  实例方法，重写父类中的实例方法
    run(distance:number = 5){
      console.log(`跑了${distance}米`, this.name)
    }
  }

  //  定义一个子类
  class Pig extends Animal{
    //  构造函数
    constructor(name:string){
      //  调用父类的构造函数实现子类属性中的初始化操作
      super(name)
    }
    //  实例方法，重写父类中的实例方法
    run(distance:number = 10){
      console.log(`跑了${distance}米`, this.name)
    }
  }

  //  实例化父类对象
  const ani:Animal = new Animal('动物')
  ani.run()

  //  实例化子类对象
  const dog:Dog = new Dog('二哈')
  dog.run()

  //  实例化子类对象
  const pig:Pig = new Pig('佩奇')
  pig.run()

  console.log(`=====================================`)
  //  父类和子类的关系：父子关系，此时，父类类型创建子类的对象
  const dog1:Animal = new Dog('小柴')
  dog1.run()

  const pig1:Animal = new Pig('八戒')
  pig1.run()

  console.log(`=====================================`)
  //  该函数需要的参数是animal类型的 --> 子类继承父类后会被判断成父类
  function showRun(ani:Animal){
    ani.run()
  }

  showRun(dog1)
  showRun(pig1)
```

类的修饰符
修饰符(类中的成员的修饰符):主要是描述类中的成员(属性，构造函数，方法)的可访问性
类中的成员都有自己的默认的访问修饰符,public
    public修饰符，类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
    private修改符，只能类内部可以访问
    protected修饰符，类内部和子类可以访问
```
//  public修饰符可以在内部和外部访问到
  class Person{
    //  属性
    public name:string
    //  构造函数
    public constructor(name:string){
      //  更新属性
      this.name = name
    }
    public eat(){
      console.log('真好吃',this.name)
    }
  }

  //  实例化对象
  const per = new Person('狗哥')
  //  类的外部可以访问类中的属性成员
  console.log(per.name)
  per.eat()

  class Animal{
    //  定义属性
    private name:string = '狗子'
    protected gender:string = '未知'
    //  构造器
    constructor(name:string, gender:string){
      this.name = name
      this.gender = gender
    }
    //  定义内部方法展示属性
    showGender(){
      console.log(`${this.name}的性别是${this.gender}`)
    }
  }
  const animal = new Animal('二哈','公')
  //  可以公共调用方法
  animal.showGender()
  //  但是外部不能调用受保护的属性
  // console.log(animal.name)
  // console.log(animal.gender)

  //  protect中保护的方法可以在子类中读取
  //  创建继承子类
  class Dog extends Animal{
    bark(){
      console.log(`查看被protected的gender ${this.gender}`)
    }
  }
  const dog = new Dog('柴犬','母')
  dog.bark()
```

类中的 readonly 修饰符 --> 保证属性只读，根据参数自动添加属性
首先是一个关键字，对类中的属性成员进行修饰，修饰后该属性成员，就不能在外部被随意修改
构造函数中，可以对只读的属性成员的数据进行修改
如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly修饰了，那么外部也是不能对这个属性值进行更改的
构造函数中的参数可以使用readonly惊喜修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
构造函数的参数可以使用public,private和protected进行修饰，无论是哪个进行修饰，该类中都会自动添加这个一个属性成员
--> readonly可以修饰初始属性，被修饰的属性可以在构造器中被修改
--> 构造器传入的参数如果有用readonly修饰的变量a，那么这个类就自动添加了一个只能读取的a属性
```
    // readonly修饰类中的成员属性操作
  //  定义一个类
  class Person {
    //  属性
    readonly name: string = 'Genji'  //  初始值
    //  构造函数
    constructor(name: string) {
      this.name = name
    }
    sayHi() {
      console.log(`你好啊, ${this.name}`)
      //  类中的普通方法中，也是不能修改readonly成员属性值
      // this.name = 'dio'
    }
  }

  //  实例化对象
  const person: Person = new Person('二哈')
  console.log(person)
  console.log(person.name)
  //  添加了readonly 修饰符后，外部就不能修改了
  // person.name = 'jojo'
  // console.log(person.name)


  //  readonly修饰类中的构造函数中的参数(参数属性)
  //  定义一个类
  // class Person {
    //  构造函数
    //  构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫参数属性
    //  构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员
    //  构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改类中的name属性成员值的
    // constructor(readonly name: string) {
      // this.name = name
    // }
    // 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个公共的name属性成员了
    // constructor(public name: string) {
      // this.name = name
    // }
    // 构造函数中的name参数，一旦使用private进行修饰后，那么Person类中就有了一个私有的name属性成员了, 只能在本类中访问使用
    // constructor(private name: string) {
      // this.name = name
    // }
    // 构造函数中的name参数，一旦使用protected进行修饰后，那么Person类中就有了一个受保护的name属性成员了，只能在奔雷和派生类中访问及使用
    // constructor(protected name: string) {
      // this.name = name
    // }
  // }

  //  实例化对象
  // const person: Person = new Person('二哈')
  // console.log(person)
  // person.name = '大狗'
  // console.log(person.name)
```

类中的存取器
让我们可以有效的控制对 对象中的成员的访问，通过getters和setters来进行操作。
```
  class Person{
    //  外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
    firstName:string = 'A'
    lastName:string = 'B'
    //  姓名的成员属性(外部可以访问，也可以修改)
    //  读取器----负责读取数据的
    get fullName(){
      return this.firstName + '-' + this.lastName
    }
    // 设置器----负责设置数据的(修改)
    set fullName(value){
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }

  //  实例化d对象
  const p = new Person()
  console.log(p.fullName)

  //  直接修改属性来影响返回
  p.firstName = '乔瑟夫'
  p.lastName = '乔斯特'
  console.log(p.fullName)

  //  使用set方法来来修改firstName lastName
  p.fullName = 'Dio-Brando'
  console.log(p.firstName,p.lastName)
```

类中的静态属性(静态成员) --> 保证某些属性方法被非实例化调用
静态成员：在类中农通过static修饰的属性或方法，那么就是静态的属性及静态的方法，也称之为静态成员
静态成员在使用的时候是通过类名.XXX的这种语法来调用的
静态成员不能通过类的实例化然后调用对应的属性方法
static可以用来修饰类中的属性和方法中，但是不能用来修饰constructor
--> 类中的静态属性只能被添加在属性和方法上，但是不能用在构造器上，用来现在对应的属性方法只能通过类.xxx来获取调用，杜绝实例化后被调用
```
  () => {
    //  定义一个类
    class Person{
      //  静态属性
      //  类中默认有一个内置的name属性，所以呢，此时会出现错误的提示信息
      //  静态属性
      static name1:string = 'dio'
      //  构造函数是不能通过static来进行修饰的
      constructor(){
        //  此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
        // this.name1 = name
      }
      //  静态方法
      static sayHi(){
        console.log(`jojo,我不做人啦！`)
      }
    }
    //  实例化对象
    // const person:Person = new Person()
    //  通过实例对象调用的属性(实例属性)
    // console.log(person.name1)
    //  通过实例对象调用的方法(实例方法)
    // person.sayHi()
    //  通过类名.静态属性的方式来访问该成员数据
    console.log(Person.name1)
    //  通过类名.静态属性的方式来修改该成员数据
    Person.name1 = 'jojo'
    console.log(Person.name1)
    //  通过类名.静态方法的方式来调用内部的方法
    Person.sayHi()
  }
```

抽象类(abstract 类) --> 限定属性方法只有被继承后才能调用
包含抽象方法(抽象方法一般没有任何的具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化的，为了让子类进行实例化及实现内部的抽象方法。
--> 抽先类是用abstract修饰的类，不能被实例化，要调用内部的属性方法，可以用子类继承后再调用。
```
  //  定义一个抽象类
    abstract class Animal{
      //  抽象方法,不能有具体的实现，也就是没有{...}
      abstract eat()
      //  实例方法
      run(){
        console.log(`动物run`)
      }
    }
    //  抽象类是不能被实例化的
    // const ani:Animal = new Animal()

    //  定义一个子类
    class Dog extends Animal{
      //  子类实现父类的抽象方法
      eat(){
        console.log(`Dog 吃了`)
      }
      //  子类自带的方法
      bark(){
        console.log(`狗叫了`)
      }
    }
    const dog:Dog = new Dog()
    //  通过子类Dog来实现父类Animal中的抽象方法
    dog.eat()
    //  调用Dog子类本身的方法
    dog.bark()
```

# 函数
封装了一些重复重用的代码，在需要的时候直接调用即可。

函数类型
用来定义函数的参数类型和返回的值的类型
```
  //  js中函数的书写方法，在ts中可以直接使用
  //  函数声明，命名函数
  //  求和函数
  // function add(x,y){
  //   return x + y
  // }
  //  函数表达式，匿名函数
  // const add2 = function(x,y){
  //   return x + y
  // }

  //  ts中的函数的书写，可以给变量限制传入类型
  //  函数声明，命名函数
  //  求和函数
  //  x,y传入的都是number,函数返回的值为number
  function add(x:number,y:number):number{
    return x + y
  }
  console.log(add(10,20))
  //  函数表达式，匿名函数
  //  x,y传入的都是string,函数返回的值为string
  const add2 = function(x:string,y:string):string{
    return x + y
  }
  console.log(add2('jojo,','我不做人啦！'))

  //  函数的完整的写法
  // const add3:类型 = function(x:number,y:number):number{}
  // 将类型申明修改成箭头函数，返回函数的值
  // const add3:((x:number,y:number) => number) = function(x:number,y:number):number{}
  // 再去掉括号即可
  // const add3: (x:number,y:number) => number = function(x:number,y:number){}
  //  写入方法
  const add3: (x:number,y:number) => number = function(x:number,y:number):number{
    return x + y
  }
```

可选参数和默认参数
可选参数:函数在声明的时候，内部的参数后使用了？进行修饰，那么久表示参数可以传入也可以不用传入
默认参数:函数在声明的时候，内部的参数有自己的默认值a:string='默认值'，此时的这个参数就可以叫默认参数
```
  //  定义一个函数:传入姓氏和名字，可以得到姓名(姓氏+名字=姓名)
  //  需求:如果不软如任何内容，那么久返回默认的姓氏
  //  需求:如果值传入姓氏，那么久返回姓氏
  //  需求：如果传入姓氏和名字，那么返回来的就是姓名
  const getFullName = function(firstName:string="jojo",lastName?:string):string{
    //  判断名字是否传入了
    if(lastName){
      return firstName + '_' + lastName
    }else{
      return firstName
    }
  }
  
  //  函数调用
  //  什么也不传
  console.log(getFullName())
  //  只传入姓氏
  console.log(getFullName('诸葛'))
  //  传入姓氏和名字
  console.log(getFullName('诸葛','孔明'))
```  

剩余参数(rest参数)
剩余参数是放在函数声时所有参数的最后集合，打印出来为数组形式。
```
  //  ...args:string[] ---> 剩余的参数，放在了一个字符串的数组中，args里面
  function showMsg(str:string,str2:string,...args:string[]){
    console.log(str)  //  a
    console.log(str2) //  b
    console.log(args) //  c,d,e
  }
  showMsg('a','b','c','d','e')
```

函数重载 --> 函数根据不同参数，进行不同的逻辑处理
函数名字相同，函数的参数及个数不同。
注意在重载函数声明中不需要实现内容，只声明函数名，函数参数类型，函数返回值类型即可。
```
  //  定义一个函数
  //  需求：我们有一个add函数，它可以接受2个string类型的参数进行凭借，也可以接受2个number类型的参数进行相加

  //  函数重载声明
  function add(x:string,y:string):string
  function add(x:number,y:number):number
  
  //  函数声明
  function add(x:string|number, y:string|number):(string|number){
    if(typeof x === 'string' && typeof y === 'string'){
      //  字符串拼接
      return x + y
    }else if(typeof x === 'number' && typeof y === 'number'){
      //  字符串相加
      return x + y
    }
  }
  //  函数调用
  //  合规传入
  console.log(add(10,20))
  console.log(add('10','20'))
  //  传入非法的数据，ts应该给我提示出错误的信息内容，报红色错误的信息
  // console.log(add(10,'20')) // error
  // console.log(add('10',20)) // error
```

# 泛型
指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
--> 泛型的目的是为了使用时保持数据类型的统一，方便处理逻辑。

泛型函数 --> 使用了泛型的函数
使用泛型来充当传入值的类型，注意泛型的定义位置为： function 函数名 <泛型名1, 泛型名2...>(参数1:泛型名1,参数2:泛型名2...){..}
--> 其实也可以用联合类型+类型断言的方式来实现相关的功能，但是比较繁琐。
```
  //  需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
  // //  定义一个函数
  // function getArr(value:number, count:number): number[]{
  //   //  根据数据和数量产生一个数组
  //   const arr :number[] = []
  //   for(let i = 0; i < count; i++){
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr(1,2)
  // console.log(arr1)

  // // 定义一个函数,同上，只不过传入的是字符串类型
  // function getArr2(value:string, count:number): string[]{
  //   //  根据数据和数量产生一个数组
  //   const arr :string[] = []
  //   for(let i = 0; i < count; i++){
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr2 = getArr2('a',4)
  // console.log(arr2)

  // //  需求:可以传入任意类型的数据，返回来的是存储这个任意类型数据的数组
  // function getArr3(value:any, count:number): any[]{
  //   //  根据数据和数量产生一个数组
  //   const arr :any[] = []
  //   for(let i = 0; i < count; i++){
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr3(1,2)
  // const arr2 = getArr3('abc',2)
  // console.log(arr1)
  // console.log(arr2)
  // // arr1中存储的是数字类型的数据
  // // arr2中存储的是字符串类型的数据
  // console.log(arr1[0].toFixed(2)) //  没有任何的智能提示的信息(要么有方法名字的提示信息，要么有错误的提示信息)
  // console.log(arr2[0].split('')) //  没有任何的智能提示的信息(要么有方法名字的提示信息，要么有错误的提示信息)

  //  <字母即可>，表示泛型，T是Typer的缩写，方便理解
  function getArr4<T>(value:T, count:number):T[]{
    // const arr: T[] = []  //  方式一
    const arr:Array<T> = []     //  方式二
    for(let i = 0 ; i < count; i++){
      arr.push(value)
    }
    return arr
  }
  const get1 = getArr4<number>(100, 5)
  console.log(get1)
  const get2 = getArr4<string>('abc',3)
  console.log(get2)
```

多个泛型参数的函数
函数中有多个泛型的参数 --> 使用了多个泛型参数的函数
```
  function getMsg<K,V>(value:K, value2:V):[K,V]{
    return [value, value2]
  }

  const arr1 = getMsg<string, number>('jojo',18)
  console.log(arr1)
  console.log(arr1[0].split(''), arr1[1]+2)
```

泛型接口 --> 使用了泛型的接口
在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型。
--> 接口定义时使用了泛型，在实现使用该接口时需要把泛型的数据结构传入
```
  //  需求：定义一个类，用来存储用户的相关信息(id,名字,年龄)
  //  通过一个类的实例对象，调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

  //  定义一个泛型接口
  interface IBaseCRUD<T>{
    data:Array<T>
    add:(t:T) => T
    getUserId: (id:number) => T
  }

  //  定义一个用户信息的类
  class User{
    id?:number //  用户的id,可有可无
    name:string //  用户的姓名
    age:number  //  用户的年龄
    //  构造函数
    constructor(name:string,age:number){
      this.name = name
      this.age = age
    }
  }

  //  定义一个类，可以针对用户的信息对象进行增加及查询的操作
  //  CRUD ---> create, read, update, delete
  //  class UserCRUD 实现泛型接口 IBaseCRUD , 接口 IBaseCRUD 使用了泛型 T， 这里 T 的数据类型被指定为 User 
  class UserCRUD implements IBaseCRUD<User>{
    //  用来保存多个User类型的用户信息对象
    data:Array<User> = []
    //  用来存储用户信息对象
    add(user:User):User{
      //  自动生成不重复id
      user.id = Date.now() + Math.random()
      //  data中添加数据
      this.data.push(user)
      return user
    }
    //  根据id查询指定的用户信息对象
    getUserId(id:number):User{
      return this.data.find(user => user.id === id)
    }
  }

  //  实例化添加用户信息对象的类UserCRUD
  const userCRUD:UserCRUD = new UserCRUD()
  //  调用添加数据的方法
  userCRUD.add(new User('jojo', 18))
  userCRUD.add(new User('dio', 19))
  //  创建对象返回解构出id
  const {id} = userCRUD.add(new User('jack', 20))
  userCRUD.add(new User('tom', 18))
  console.log(userCRUD)
  //  通过id查案数据
  const user = userCRUD.getUserId(id)
  console.log(user)
```

泛型类 --> 使用了泛型的类
在定义类时，为类中的属性或方法定义泛型类型 在创建泛型类的实例时，再指定特定的泛型类型。
--> 定义类时使用了泛型，调用该类需要给泛型指定对应的数据类型
```
  //  定义一个类，类中的属性值的类型是不确定，方法中的参数及返回值的类型也是不确定的
  //  定义一个泛型类
  class GenericNumber<T>{
    //  默认的属性的值的类型是泛型类型
    defalutValue: T
    add: (x: T, Y: T) => T
  }

  //  在实例化对象的时候，再确定泛型的类型
  const g1: GenericNumber<number> = new GenericNumber<number>()
  //  设置属性值
  g1.defalutValue = 100
  //  相加的方法,具体实现
  g1.add = function (x, y) {
    return x + y
  }
  console.log(g1.add(10,20))

  //  在实例化对象的时候，再确定泛型的类型
  const g2: GenericNumber<string> = new GenericNumber<string>()
  //  设置属性值
  g2.defalutValue = '哈哈，你好啊'
  //  相加的方法,具体实现
  g2.add = function (x, y) {
    return x + y
  }
  console.log(g2.add('jojo',',我不做人啦！'))
```

泛型约束
由于泛型是灵活的，是在使用是才传入数据类型的，但是针对某些业务需求，可能需要泛型具备特定的属性，我们可以通过extends继承的方式给泛型添加必要的属性，这个行为就叫泛型约束。
--> 用泛型继承接口的方式来给泛型添加特定属性方法，约束泛型
```
  //  直接写
  // function getLength<T>(x:T):number{
  //   return x.length //  不能确定泛型T里面是否有length属性
  // }
  
  //  定义一个接口，用力约束将来的某个类型中必须要有length这个属性
  interface ILength{
    //  接口中有一个属性
    length:number
  }

  //  利用上述接口来指定泛型约束
  function fn<T extends ILength>(x:T):void{
    console.log(x.length)
  }

  //  传入合理的属性值调用即可
  fn<string>('abc')   //  可以给泛型指定类型
  fn('what are you 弄啥嘞')              //  也可以不指定来调用
  // fn(123) //  传入不合理的数据报错
```

# 其他相关
1.ts声明文件可配置成对应的 xxx.d.ts文件，会被自动扫描使用。
2.ts使用三方库可以安装对应的配置文件 npm install @types/三方库名，记得先从npm上查看相关包
3.内置对象
```
  // /* 1. ECMAScript 的内置对象, 注意开头字母大小写 */
  // let b: Boolean = new Boolean(1)
  // let n: Number = new Number(true)
  // let s: String = new String('abc')
  // let d: Date = new Date()
  // let r: RegExp = /^1/
  // let e: Error = new Error('error message')
  // // b = true
  // console.log(b)  //  对象身上才有原型 prototype

  // BOM 和 DOM 的内置对象
  // BOM:Window
  // DOM:Document HTMLElement DocumentFragment Event NodeList
  // TS中可以直接使用BOM和DOM

  const div: HTMLElement = document.getElementById('test')
  const divs: NodeList = document.querySelectorAll('div')
  document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
  })
  const fragment: DocumentFragment = document.createDocumentFragment()
```
