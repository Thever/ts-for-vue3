//  多态：父类型的引用指向子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
//  子类继承父类，在对象判断上可以被判断为父类的同类，但是内置方法属性上被改写，调用会有不同的结果
(() => {
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
})()