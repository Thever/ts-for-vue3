//  引入三方的库jquery
// import JQuery from 'jquery'
import jquery from 'jquery';
// //  定义操作,目前放到来外部 .d.ts文件中
// declare var JQuery:(selector:string) => any

//  使用JQuery
// JQuery('选择器')

/*
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码
  declare var jQuery: (selector: string) => any;
声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件
下载声明文件: npm install @types/jquery --save-dev
*/

// import jquery from 'jquery'
// jquery('#选择器')