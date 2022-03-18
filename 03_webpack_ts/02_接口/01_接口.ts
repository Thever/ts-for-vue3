//  接口是对象的状态(属性)和行为(方法)的抽象(概述)
//  接口：是一种类型，一种规范，是一种规则，是一种能力，是一种约束
(() => {
  // 需求: 创建人的对象, 需要对人的属性进行一定的约束

  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // sex是string类型, 可以没有

  /*
    接口类型的对象
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
})()