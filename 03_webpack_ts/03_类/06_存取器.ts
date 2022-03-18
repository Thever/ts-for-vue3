//  存取器：让我们可以有效的控制对 对象中的成员的访问，通过getters和setters来进行操作
(() => {
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
})()