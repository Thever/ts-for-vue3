//  类 类型：类的类型，类的类型可以通过接口来实现
(() => {
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
})()