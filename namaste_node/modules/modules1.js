
// let {hi,travel1 }= require("./module2.js");  // l1
// let {hi,travel }= require("./module2.js");  //l2

let obj = require("./module2.js");
console.log('im module1');
let a=10;
let b=10;
// let add = 12;
console.log('sum:'+ "  " + obj.add(a,b) + "  " +  obj.travel );
// console.log('sum:'+ add +  travel1 );  //l1
// console.log('sum:'+ add + " " +  hi ); // l2
// console.log('sum:'+ add +  " " + travel ); //l2 


