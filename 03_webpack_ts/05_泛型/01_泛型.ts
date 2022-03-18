//  泛型：在定义函数、接口或类的时候，不预先指定具体的类型，而是在使用的时候再指定具体类型的一种特征
(() => {
  //  需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
  // //  定义一个函数
  // function getArr(value:number, count:number): number[]{
  //   //  根据数据和数量产生一个数组
  //   const arr :number[] = []
  //   for(let i = 0; i < count; i++){
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr(1,2)
  // console.log(arr1)

  // // 定义一个函数,同上，只不过传入的是字符串类型
  // function getArr2(value:string, count:number): string[]{
  //   //  根据数据和数量产生一个数组
  //   const arr :string[] = []
  //   for(let i = 0; i < count; i++){
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr2 = getArr2('a',4)
  // console.log(arr2)

  // //  需求:可以传入任意类型的数据，返回来的是存储这个任意类型数据的数组
  // function getArr3(value:any, count:number): any[]{
  //   //  根据数据和数量产生一个数组
  //   const arr :any[] = []
  //   for(let i = 0; i < count; i++){
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr3(1,2)
  // const arr2 = getArr3('abc',2)
  // console.log(arr1)
  // console.log(arr2)
  // // arr1中存储的是数字类型的数据
  // // arr2中存储的是字符串类型的数据
  // console.log(arr1[0].toFixed(2)) //  没有任何的智能提示的信息(要么有方法名字的提示信息，要么有错误的提示信息)
  // console.log(arr2[0].split('')) //  没有任何的智能提示的信息(要么有方法名字的提示信息，要么有错误的提示信息)

  //  <字母即可>，表示泛型，T是Typer的缩写，方便理解
  function getArr4<T>(value:T, count:number):T[]{
    // const arr: T[] = []  //  方式一
    const arr:Array<T> = []     //  方式二
    for(let i = 0 ; i < count; i++){
      arr.push(value)
    }
    return arr
  }
  const get1 = getArr4<number>(100, 5)
  console.log(get1)
  const get2 = getArr4<string>('abc',3)
  console.log(get2)
})()