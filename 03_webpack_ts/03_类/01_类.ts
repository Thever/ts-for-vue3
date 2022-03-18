//  类：可以理解为模板，通过模板可以实例化对象
//  面向对象的编程思想
(() => {
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
})()