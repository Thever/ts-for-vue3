//  ts中书写js中的类,演示效果
(() => {
  //  定义一个接口
  interface IPerson{
    firstName: string //姓氏
    lastName: string  //名字
  }
  //  定义一个类型
  class Person{
    //  定义公告的字段(属性)
    firstName: string //姓氏
    lastName: string  //名字
    fullName: string  //姓名
    //  定义一个构造器函数
    constructor(firstName:string, lastName:string){
      //  更新属性数据
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + ' ' + this.lastName
    }
  }
  //  定义函数返回内容
  function showFullName(person:IPerson){
    return person.firstName + '_' + person.lastName
  }
  //  实例化对象
  const person = new Person('诸葛','孔明')
  console.log(showFullName(person))
})()