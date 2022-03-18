(() => {
  //  str这个参数是string类型的
  function sayHi(str:string){
    return '你好啊' + str
  }
  let txt = 'jojo'
  console.log(sayHi(txt))
})()

//  总结：ts的文件中如果直接书写js语法的代码，那么在html文件中中直接引入ts文件，在谷歌浏览器中式可以直接使用的

//  如果ts文件中有了ts的语法代码，那么久需要把这个ts文件编译成js文件，在htmk文件中引入js的文件来使用

//  ts文件中的参数中的形参，如果使用了某个类型进行修饰，那么最终在比那一的js文件中式没有这个类型的

//  ts文件中的变量使用的是let进行修饰，编译的js文件中的修饰符就变成了var了