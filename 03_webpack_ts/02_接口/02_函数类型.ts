//  为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
(() => {
  //  函数类型：通过接口的方式作为函数的类型来使用

  //  定义一个接口，用来作为某个函数的类型使用
  interface ISearchFunc{
    //  定义一个调用签名,传入两个string参数，返回一个boolean
    (source:string, subString:string):boolean
  }
  
  //  定义一个函数，该类型就是上面定义的接口
  //  也就是传入两个string参数，返回一个boolean值
  const searchString:ISearchFunc = function (source:string, subString:string):boolean{
    //  返回第二个参数是否在第一个参数中的结果
    //  在source字符串中查找subString这个字符串
    return source.search(subString) > -1
  }
  
  //  调用函数
  console.log(searchString('今天好热啊！','今天'))
})()