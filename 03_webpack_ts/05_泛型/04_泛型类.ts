//  泛型类：在定义类时，为类中的属性或方法定义泛型类型 在创建泛型类的实例时，再指定特定的泛型类型
(() => {
  //  定义一个类，类中的属性值的类型是不确定，方法中的参数及返回值的类型也是不确定的
  //  定义一个泛型类
  class GenericNumber<T>{
    //  默认的属性的值的类型是泛型类型
    defalutValue: T
    add: (x: T, Y: T) => T
  }

  //  在实例化对象的时候，再确定泛型的类型
  const g1: GenericNumber<number> = new GenericNumber<number>()
  //  设置属性值
  g1.defalutValue = 100
  //  相加的方法,具体实现
  g1.add = function (x, y) {
    return x + y
  }
  console.log(g1.add(10,20))

  //  在实例化对象的时候，再确定泛型的类型
  const g2: GenericNumber<string> = new GenericNumber<string>()
  //  设置属性值
  g2.defalutValue = '哈哈，你好啊'
  //  相加的方法,具体实现
  g2.add = function (x, y) {
    return x + y
  }
  console.log(g2.add('jojo',',我不做人啦！'))
})()