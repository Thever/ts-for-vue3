//  修饰符(类中的成员的修饰符):主要是描述类中的成员(属性，构造函数，方法)的可访问性
//  类中的成员都有自己的默认的访问修饰符,public
//  public修饰符，类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
//  private修改符，只能类内部可以访问
//  protected修饰符，类内部和子类可以访问
(() => {
  //  定义一个类
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
})()