//  函数重载：函数名字相同，函数的参数及个数不同
(() => {
  //  定义一个函数
  //  需求：我们有一个add函数，它可以接受2个string类型的参数进行凭借，也可以接受2个number类型的参数进行相加

  //  函数重载声明
  function add(x:string,y:string):string
  function add(x:number,y:number):number
  
  //  函数声明
  function add(x:string|number, y:string|number):(string|number){
    if(typeof x === 'string' && typeof y === 'string'){
      //  字符串拼接
      return x + y
    }else if(typeof x === 'number' && typeof y === 'number'){
      //  字符串相加
      return x + y
    }
  }
  //  函数调用
  //  合规传入
  console.log(add(10,20))
  console.log(add('10','20'))
  //  传入非法的数据，ts应该给我提示出错误的信息内容，报红色错误的信息
  // console.log(add(10,'20')) // error
  // console.log(add('10',20)) // error
})()