//"use strict"//variable hoisting will not happen
//var s=90;
//console.log(s);
//var s;

//diff b/w var and let
//let s=900;
//var s=65353; cannot redeclare
//console.log(s);
//s=900;//Cannot access 's' before initialization
//console.log(s);
//let s;//var hoisting wont happen//Cannot access 's' before initialization
var t=90;
//anonymous block
{
    let t=89;
    console.log("block scope- ",t);
}
console.log("outside ",t);

console.log(typeof undefined)
console.log(typeof null)
console.log(undefined == null)//value
console.log(undefined === null)//val + datatype
console.log( '1' + 2 );//type conversion wont happen as + symbol used
console.log(2 + 2 + '1' );//41
console.log(2 - 2 + '1' );//01

//var y=56
y=null
y??45
console.log(y);//null

console.log(y??45);//45 but y still is null, temp it hold 45
//to make it permanent store again in y
y=y??45
console.log(y);//45
