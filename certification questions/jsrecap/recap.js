// //"use strict"//variable hoisting will not happen
// //var s=90;
// //console.log(s);
// //var s;

// //diff b/w var and let
// //let s=900;
// //var s=65353; cannot redeclare
// //console.log(s);
// //s=900;//Cannot access 's' before initialization
// //console.log(s);
// //let s;//var hoisting wont happen//Cannot access 's' before initialization
// var t = 90;
// //anonymous block
// {
//     let t = 89;
//     console.log("block scope- ", t);
// }
// console.log("outside ", t);

// console.log(typeof undefined)
// console.log(typeof null)
// console.log(undefined == null)//value
// console.log(undefined === null)//val + datatype
// console.log('1' + 2);//type conversion wont happen as + symbol used
// console.log(2 + 2 + '1');//41
// console.log(2 - 2 + '1');//01

// //var y=56
// y = null
// y ?? 45
// console.log(y);//null

// console.log(y ?? 45);//45 but y still is null, temp it hold 45
// //to make it permanent store again in y
// y = y ?? 45
// console.log(y);//45

// var arr = [1, 2, 3, 4, 5];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// //index ->0 to 4

// for (let i = 0; i < 5; i++)
//     console.log(arr[i]);


// var num = 968; //9+6+8=>23// 2+3=>5

// var r = Math.floor(num / 10)
// console.log(r)//96
// var t = Math.floor(r / 10);
// console.log(t)//9
// var r1 = r % 10;
// console.log(r1)//6
// var rem = num % 10;
// console.log(rem)//8
// var sum = t + r1 + rem;
// var final = sum % 10 + Math.floor(sum / 10);
// console.log(final)

// //functions

// // function funName(arg){
// //     //body
// // }


// function funName(arg) {
//     //body
//     console.log('hiiii ', arg)
// }
// funName();//hiiii undefined
// funName('Ajay');//hi Ajay

// function funName1(arg = 'Guest')//default value
// {
//     //body
//     console.log('hiiii ', arg)
// }
// funName1();//hiiii Guest
// funName1('Ajay');//hi Ajay
// console.log(funName1)
// let funName2 = function (arg = 'Guest')//default value
// {
//     //body
//     console.log('hiiii ', arg)
// }
// funName2();
// funName2('vinay');
// console.log(funName2)

// let inner = function () {
//     console.log('inner function called');
// }
// function outer(funArg) {
//     funArg();
// }

// outer(inner);

// let add = function (a, b) {
//     return a + b;
// }
// let sub = function (a, b) {
//     return a - b;
// }
// function calcArea(x, y, addFn) {

//     return addFn(x, y);
// }
// function userIn() {
//     //get input from user
//     //prompt
//     //prompt - choose operation
//     //1. add, 2.sub
//     //user - 1===chooses add()
//     console.log(calcArea(10, 34, add));
// }
// function algebra(addFn) {
//     console.log(add(11, 2));
// }
// userIn()
// algebra(add);

// //  let message = "Hello, I'm JavaScript!"; // local variable
// function localVar() {
//     let message = "Hello, I'm JavaScript!"; // local variable
//     console.log(message);
// }
// //console.log(message);//defined in function and it is let var which visible only inside function

// let userName = 'John';

// function showMessage() {
//     userName = "ultron";
//     let message = 'Hello, ' + userName;
//     console.log(message);
// }
// console.log('before fn call ', userName);
// showMessage();
// console.log('after fn call ', userName);

// for (let a = 1; a < 11; a++) {
//     if (a % 2 == 0)
//         console.log('hello ', a)
//     else
//         console.log('hi ', a)
// }

// function normalFun(event) {
//     console.log(this, event);//window
// }
// //normalFun();

// let normalFun1 = (e) => {
//     console.log(this, e);//window
// }
// //normalFun1();
// //event listener
// document.getElementById("btn").addEventListener('click', normalFun1);
// normalFun();

// let double = n => n * 2;
// console.log(double(2));

// let sum1 = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
// };

// console.log(sum1(1, 2)); // 3

// //var =a2 + b2 + c2 + 2ab + 2bc + 2ca
// //ans=a3 – 3a2b + 3ab2 – b3
// //ans=a3 – b3 – 3ab(a – b)

// //3a2b //60
// function eval1(u, v) {
//     return 3 * (Math.pow(u, 2) * v)
// }
// var a = 2; b = 5;
// Math.pow(a, 3) - eval1(a, b)
// function mult(x, y) {
//     return 2 * (x * y);
// }
// function power2(z) {
//     return Math.pow(z, 2)
// }
// function main(a, b, c) {
//     return power2(a) + power2(b) + power2(c) + mult(a, b) + mult(b, c) + mult(c, a);
// }
// var res = main(1, 1, 1)
// console.log(res)

// //   let - block scoped
// //block scope? 
// //block {}
// //scope= visibility
// {
//     let g = 90
//     console.log(g) //Uncaught ReferenceError: g is not defined
// }

// // console.log('am i visible???',g)
// var t = 90;
// //let t=80;//cannot redeclare
// console.log(t)

// // let no variable hoisting 
// //increase salary only for role as manager by 1000rs
// String.prototype.initCap = function () {
//     return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
//         return m.toUpperCase();
//     });
// };
// let empList = [
//     { name: 'aaa', role: 'Manager', sal: 20000 },
//     { name: 'bbb', role: 'Sr.Manager', sal: 30000 },
//     { name: 'ccc', role: 'Manager', sal: 20000 },
// ]

// // map or filter ???
// // var res=empList.map(
// //     (emp)=>{
// //         console.log(emp.name.initCap())
// //         Object.keys(emp).forEach(key => {
// //            // if(key=='name')
// //              emp['name']=emp.name.initCap()

// //         })
// //         return emp;
// //     }
// // )
// // console.log('result ',res)

// var res = empList.map(
//     (emp) => {
//         // console.log(emp.name.initCap())
//         Object.keys(emp).forEach(key => {
//             // if(key=='name')
//             emp['name'] = emp.name.initCap()
//         })

//         return emp;
//     }
// ).filter((x) => {
//     console.log(x)
//     if (x.role == 'Manager')
//         return x;
// })
// console.log('result ', res)

// // //callback
// // let hello=function(){
// //     console.log('hi')
// // }
// // // setTimeout(hello,5000)
// // // setInterval(hello,2000)

// // inner=()=>{
// //     let dummy=()=>console.log('long running process')
// //     console.log('inner function')
// //      setTimeout(dummy,20000)
// //     console.log('work done !!! inner function')
// // }
// // function outer(fn){
// //     console.log('before outer fn')
// //     fn();
// //     console.log('after outer fn')
// // }

// // outer(inner)
//js by default single threaded
// console.log('hi')
// setTimeout(()=>console.log('welcome'),3000)
// console.log('hello')

// async function f() {
//     return 1;
//     let prom=f().then(console.log);
//     res=await prom()
//     console.log('hi ',res)
// }

var obj={}//object class
console.log(typeof(obj))
console.log(typeof obj)
obj={name:'ajay',age:28}
console.log(obj.name,obj.age)
obj.name='vinay'
console.log("after changing name ",obj.name,obj.age)
obj['age']=34
console.log("after changing age ",obj.name,obj.age)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

for (let key of Object.keys(obj))
   {
     console.log(key)
    console.log(obj[key])
   }

   let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  console.log('name1' in user)
  console.log("name1" in ["name1","name2"])
 for(i in ["name1","name2"])//use of in array, and in in obj
 {
    console.log(i)//i is index
 }
  for (let key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }

let user1 = { name: "John" };
let admin = user1; // copy the reference(memory)
console.log(user1.name)//shares not values but memory
admin.name="alex"//changes made by admin is reflected in user1
console.log(user1.name)

let user2 = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user2) {
    clone[key] = user2[key];
  }  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  console.log( clone.name );
  console.log( user2.name );

function emp(){

}

class emp1{
    //default constructor function
    constructor(n='maybe'){
        console.log('am i called?? ',n)
    }
  //  Uncaught SyntaxError: A class may only have one constructor
    // constructor(t){
    //     console.log('am i called?? ',t)
    // }
}

var empObj=new emp1()//calls constr function in class emp1
console.log(empObj)
var empObj1=new emp1('yes')
console.log(empObj1)


class Taxi{
   //this.id ,this.brand and this.price creates 3 instance var
   //instance var belong to object
   //thy help creating objects 
    constructor(id,brand,price){
        this.id=id
        this.brand=brand
        this.price=price
    }
}

let t1=new Taxi()
let t2=new Taxi(101,'tata',78999)
console.log(t1);
console.log(t2);
t1.brand="toyoto"
console.log(t1);
console.log(t2);

function Vehicle(id,brand,price){
    this.id=id
    this.brand=brand
    this.price=price
}

let v=new Vehicle(111,'tata',78765)
console.log(v)