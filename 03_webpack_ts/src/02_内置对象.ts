(() => {
  // /* 1. ECMAScript 的内置对象, 注意开头字母大小写 */
  // let b: Boolean = new Boolean(1)
  // let n: Number = new Number(true)
  // let s: String = new String('abc')
  // let d: Date = new Date()
  // let r: RegExp = /^1/
  // let e: Error = new Error('error message')
  // // b = true
  // console.log(b)  //  对象身上才有原型 prototype

  // BOM 和 DOM 的内置对象
  // BOM:Window
  // DOM:Document HTMLElement DocumentFragment Event NodeList
  // TS中可以直接使用BOM和DOM

  const div: HTMLElement = document.getElementById('test')
  const divs: NodeList = document.querySelectorAll('div')
  document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
  })
  const fragment: DocumentFragment = document.createDocumentFragment()
})()