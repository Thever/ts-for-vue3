//  接口:是一种能力，一种约束而已
(() => {
    //  输出姓名
    function showFullName(person) {
        return 'Hello,' + person.firstName + ' ' + person.lastName + '!';
    }
    //  定义一个对象
    let user = {
        firstName: 'Dio',
        lastName: 'Brando'
    };
    console.log(showFullName(user));
})();
