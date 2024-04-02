// 引入jQuery  const $ = require('jquery');    // 问题function printProblemMessage() {  	var q = '为什么阿姨从不流汗？' 
  console.log(q)}  

// 答案
function printAnswerMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  var a = '因为阿姨怕留下姨汗' 
  console.log(a)
}   // 暴露函数作为模块的公开API  module.exports = {
	printProblemMessage,
	printAnswerMessage
}; 