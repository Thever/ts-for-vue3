//  抽象类：包含抽象方法(抽象方法一般没有任何的具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化的，为了让子类进行实例化及实现内部的抽象方法
(
  () => {
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
  }
)()