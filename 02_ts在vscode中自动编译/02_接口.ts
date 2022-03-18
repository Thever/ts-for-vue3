//  接口:是一种能力，一种约束而已
(() => {
  //  定义一个接口
  interface IPerson{
    firstName: string //  姓氏
    lastName: string  //  名字
  }
  //  输出姓名
  function showFullName(person:IPerson){
    return 'Hello,' + person.firstName + ' ' + person.lastName + '!'
  }
  //  定义一个对象
  let user = {
    firstName: 'Dio',
    lastName: 'Brando'
  }

  console.log(showFullName(user))
})()