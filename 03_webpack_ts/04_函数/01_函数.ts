//  函数：封装了一些重复重用的代码，在需要的时候直接调用即可
(() => {
  //  js中函数的书写方法，在ts中可以直接使用
  //  函数声明，命名函数
  //  求和函数
  // function add(x,y){
  //   return x + y
  // }
  //  函数表达式，匿名函数
  // const add2 = function(x,y){
  //   return x + y
  // }

  //  ts中的函数的书写，可以给变量限制传入类型
  //  函数声明，命名函数
  //  求和函数
  //  x,y传入的都是number,函数返回的值为number
  function add(x:number,y:number):number{
    return x + y
  }
  console.log(add(10,20))
  //  函数表达式，匿名函数
  //  x,y传入的都是string,函数返回的值为string
  const add2 = function(x:string,y:string):string{
    return x + y
  }
  console.log(add2('jojo,','我不做人啦！'))

  //  函数的完整的写法
  // const add3:类型 = function(x:number,y:number):number{}
  // 将类型申明修改成箭头函数，返回函数的值
  // const add3:((x:number,y:number) => number) = function(x:number,y:number):number{}
  // 再去掉括号即可
  // const add3: (x:number,y:number) => number = function(x:number,y:number){}
  //  写入方法
  const add3: (x:number,y:number) => number = function(x:number,y:number):number{
    return x + y
  }
})()