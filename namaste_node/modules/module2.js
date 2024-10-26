
console.log('hi im module2');
// console.log(globalThis);
var travel = "travelled from module1";
function add(a,b)
{
    console.log(a+b);
}

// module.exports = {add1:add,travel1:travel};  // l1
module.exports = {add,travel};  //l2
// module.exports = add;    // l3
// module.exports = travel; // l3
