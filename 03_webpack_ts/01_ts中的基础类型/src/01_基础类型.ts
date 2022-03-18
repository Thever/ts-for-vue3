//  基础类型
(() => {
  //  布尔类型 --> boolean
  //  let 变量名：数据类型 = 值
  let flag: boolean = true
  flag = false
  // flag = 10  // 传入类型不符报错
  console.log(flag)

  //  数字类型，都是浮点数 --> number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  // a1 = '哈哈哈'  //  输入的类型不符报错
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)

  //  字符串类型 --> string
  let str:string = '床前明月光'
  let str2:string = '疑是地上霜'
  let str3:string = '举头望明月'
  let str4:string = '低头思故乡'
  // str4 = 11  //  传入类型不符报错
  console.log(`${str},${str2},${str3},${str4}`)

  //  字符串和数字拼接
  let str5:string = '我有这么多的书'
  let num:number = 10
  console.log(str5 + ':' + num)

  //  总结：ts中变量赋值一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量中
  //  如：let str:string = '真香' str= 666，不允许

  console.log(`================================================`)
  let und: undefined = undefined
  let nll: null = null
  console.log(und)
  console.log(nll)
  //  undefined 和 null 默认情况下可以作为所有类型的子类型，也就是说可以把 undefined 和 null 赋值给其他类型的变量 --> 需要在tsconfig.json中关闭严格模式
  // let num2:number = undefined
  let num2:number = null
  console.log(num2)
  console.log(`================================================`)

  //  数组类型
  //  数组定义方式1
  //  语法:let 变量名：数据类型[] = [值1,值2,值3....]
  let arr1:number[] = [10,20,30,40,50]
  console.log(arr1)
  //  数组定义方式2:泛型的写法
  //  语法：let 变量名:Array<数据类型> = [值1,值2,值3]
  let arr2:Array<number> = [100,200,300]
  console.log(arr2)
  //  注意问题:数组定义后，里面的数据的类型必须和定义数组的类型是一致的，否则有错误提示信息，也不会编译通过的

  //  元组类型:在定义数组的时候，类型和数据的个数，一开始级已经限定了
  let arr3:[string, number, boolean] = ['jojo',666.12345, true]
  console.log(arr3)
  //  注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数，应该和在定义元组的时候的数据类型及位置一致
  console.log(arr3[0].split(''))
  console.log(arr3[1].toFixed(2))

  //  尝试数组定义多类型,string和number
  let arr4:(number|string)[] = [0,'1',2,'3','4']
  console.log(arr4)

  console.log(`================================================`)
  //  枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始，依次的递增加一
  enum Color{
    red,
    green,
    blue
  }
  //  定义一个Color的枚举类型的变量来接受枚举的值
  let color:Color = Color.red
  console.log(color)
  //  通过元素获取编号
  console.log(Color.red, Color.green, Color.blue)
  console.log(Color)
  //  通过编号来获取元素
  console.log(Color['0'],Color['1'],Color['2'])
  //  小例子，枚举中的元素可以是中文的数据值，但是不推荐
  enum Gender{
    女,
    男
  }
  console.log(Gender.女)
  console.log(Gender.男)
  console.log(Gender[0])
  console.log(Gender[1])
  console.log(`================================================`)

  // any类型
  let m:any = 100
  console.log(m)
  m = '今天已经是夏天的感觉了'
  console.log(m)

  //  当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以用any类型来定义数组
  let anyArr:any[] = [100, 'jojo,我不做人啦！', true]
  console.log(anyArr)
  //  这种情况下也没有错误的提示信息，any类型有优点也有缺点
  // console.log(anyArr[0].split(''))

  //  void 类型，表示没有返回值
  function showMsg():void{
    console.log(`没有返回值的函数可以用void, 在函数命名的小括号后面添加`)
    // return
    // return undefined
    // return null
  }
  console.log(showMsg())
  //  定义void类型的变量，可以接受一个undefined的值，但是意义不是很大
  let vd:void = undefined
  console.log(vd)
  console.log(`================================================`)

  //  object类型，表示非原始类型，也就是除 number, string, boolean之外的类型
  //  定义一个函数，参数是object类型，返回值也是object类型
  function getObj(obj:object):object{
    console.log(obj)
    return {
      name:'jojo',
      age:18
    }
  }
  console.log(getObj({msg:'yooo'}))
  console.log(getObj([1,2,3]))
  console.log(getObj(String))
  
  console.log(`================================================`)
  //  联合类型(Union Types)表示取值可以为多种类型中的一种
  //  需求1：定义一个函数得到一个数字或字符串的字符串形式值
  function getString(str:number|string):string{
    return str.toString()
  }
  console.log(getString('jojo'))

  //  需求2：定义一个函数得到一个数字或字符串值的长度
  //  
  // function getLength(str:number|string):number{
  //   // return str.toString().length
  //   // 如果str本身就是string类型，那么是没有必要调用toString()方法的
  //   // 判断处理类型
  //   if(str.length){
  //     // error ts不能判断str的类型，所以会报错，使用类型断言来解决
  //     // str是字符串类型直接返回
  //     return str.length
  //   }else{
  //     //  str是数值类型
  //     return str.toString().length
  //   }
  // }

  //  类型断言：告诉编译器，我知道我自己是什么类型，也知道自己在干什么
  //  类型断言是为了绕开编译器的语法检查
  /*
    类型断言(Type Assertion):可以用来手动指定一个值的类型
    语法：
      方式一:(<类型>值)
      方式二:(值 as 类型)， tsx中只能用这种方式
  */
  //  类型断言解决语法检查
  function getLength(str:number|string):number{
    if((<string>str).length){
      //  写法一
      // return (<string>str).length
      //  写法二
      return (str as string).length
    }else{
      //  str是数值类型
      return str.toString().length
    }
  }
  console.log(getLength('123'))
  console.log(getLength(111))

  console.log(`================================================`)
  //  类型推断,t会在没有明确的制定类型的时候推测出一个类型
  //  情况1：定义变量时赋值了，推断为对应的类型
  // let info = 100  //  推断为number
  // info = '改成string' // number类型不能赋值string,报错
  // console.log(info)

  //  情况2：定义变量时没有赋值，推断为any类型
  let info2;  // 没有赋值推断为any类型
  info2 = 1   //   any类型赋值number
  info2 = '我被重新赋值了'  //  any类型赋值为string
  console.log(info2)

  console.log(`================================================`)
  
})()