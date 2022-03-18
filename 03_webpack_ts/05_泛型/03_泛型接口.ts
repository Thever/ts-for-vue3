//  泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
(() => {
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
})()