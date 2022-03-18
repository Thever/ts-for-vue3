//  多个泛型参数的函数:函数中有多个泛型的参数
(() => {
  function getMsg<K,V>(value:K, value2:V):[K,V]{
    return [value, value2]
  }

  const arr1 = getMsg<string, number>('jojo',18)
  console.log(arr1)
  console.log(arr1[0].split(''), arr1[1]+2)
})()