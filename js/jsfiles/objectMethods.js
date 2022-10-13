const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

console.log(person);//obj of class Object
console.log(typeof(person));

class Employee{}
let emp=new Employee();//obj of class Employee
console.log(typeof(emp));

class Car{
    carName="Toyato";
    regNo=1234;
constructor(carName,regNo){
    this.carName=carName;
    this.regNo=regNo;
}
    print(){
        console.log(this.carName,this.regNo);
    }

}
let carObj=new Car();
carObj.print();

let carObj1=new Car("Ford",3456);
carObj1.print();



// class Tower{
//     constructor(){
//         console.log("i help you assign value to class level variables");
//     }
// }

// var obj1=new Tower();//when obj is created constructor function will be called
// var obj2=new Tower();
class Tower{
    a=90;
    constructor(ab){
        this.a=ab;
        console.log("i help you assign value to class level variables");
    }
}

var obj1=new Tower();//when obj is created constructor function will be called
obj1.a=9000;
console.log(obj1);

var obj2=new Tower();
obj2.a=4000;
console.log(obj2);


var obj3=new Tower(567);
console.log(obj3);
var obj4=new Tower(345678);
console.log("before ",obj4);
obj4.a=10;
console.log("after ",obj4);
console.log(obj4.a);
console.log(obj4["a"]);



// class Tyre{
//     material="";
//     constructor(material){
//         this.material=material;
//     }
// }
// let tyre1=new Tyre("nylon");
// console.log("before ",tyre1);
// tyre1.type="tubeless";
// console.log("after ",tyre1);
// let tyre2=new Tyre("mud");
// console.log(tyre2);
// let tyre3=new Tyre("teflon");
// console.log(tyre3);

class Tyre{
    material="";
    constructor(material){
        this.material=material;
    }
}
console.log(new Tyre());
let tyre1=new Tyre("nylon");
console.log("before ",tyre1);
Tyre.prototype.type="tubeless";//Object has prototype
console.log("after ",tyre1);
console.log(tyre1.type);
let tyre2=new Tyre("mud");
console.log(tyre2);
console.log(tyre2.type);
let tyre3=new Tyre("teflon");
console.log(tyre3);
console.log(tyre3.type);

var j={};//Object class obj
console.log(j);