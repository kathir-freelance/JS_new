//in es6
class Admin{
    empName="";
    constructor(empName){
        this.empName=empName;
    }
    display(){
        // console.log(empName);
        
        console.log(this.getData()+" "+this.empName);
    }
    getData(){
        return "Mr.";
    }
 }

 //in es5
// function Admin1(){
//     var name="ajay";
//    function displayData(){
//         console.log(name);
//     }
// }

let o1={};//Object class
console.log(o1);
let o2=new Admin();//Admin obj- inherit 
console.log(o2);
o2.display();
let o9=new Admin("alex");//Admin obj- inherit 
console.log(o9);
o9.display();
// let o3=new Admin1();
// console.log(o3);
// console.log(o3.name);

class Tv{
    //name='onida';
    //only one constructior can be there
    // constructor(){
    //     console.log('tv obj created');
    // }
     constructor(name='onida'){
        this.name=name;//variable hoisting happens ie. var name is created after class by compiler
        console.log('tv obj is '+this.name);
    }
}

let o4=new Tv();
console.log(o4);
let o5=new Tv();
console.log(o5);
let o6=new Tv("samsung");
console.log(o6);
let o7=new Tv();
console.log(o7);
let o8=new Tv("onePlus");
console.log(o8);