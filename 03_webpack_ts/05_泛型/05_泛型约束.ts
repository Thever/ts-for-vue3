//  如果我们对一个泛型参数length属性，会报错，因为这个泛型根本就不知道它有这个属性
(() => {
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
})()