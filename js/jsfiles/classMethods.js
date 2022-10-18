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

class Truck{
    regYear='';
    focDate="";
}

let o10=new Truck();
console.log(o10)
let o11=new Truck();
console.log(o11)

//classname.prototype.varname
//classname.prototype.funcName
//runtime adding variable
Truck.prototype.name="ford";//adds this variable in Object class and it modifies prev and future obj
let o12=new Truck();
console.log(o12)
console.log(o12.name)
// adding function at runtime 
Truck.prototype.sayHi=function(){ console.log('prototype hi func')}
Truck.prototype.sayHello=()=>{ console.log('prototype hello func')}
o12.sayHello();
o12.sayHi();

//getter and setter

class Student{

    constructor(name,age) {
        // invokes the setter
        this.name = name;
        this.age=age;
      }
    
      get name() {
        return this._name;
      }
    
      set name(value) {        
        this._name = value;
      }

      get age() {
        return this._age;
      }
    
      set age(age) {      
        if(age>14)  
            this._age = age;
            else
            this._age=10;
      }
}   

let obj=new Student("Arun",12);
console.log(obj);
let obj1=new Student("Arun",19);
console.log(obj1);

let obj2={"city":"chennai",'location':'Chromepet'}
let obj3={};
console.log('before ',obj3);
Object.assign(obj3, obj2);
console.log('after ',obj3);

let obj4={ width:34,height:89};
console.log(obj4.height,obj4.width);
Object.freeze(obj4);
console.log("is obj 4 frozen yes:: ",Object.isFrozen(obj4));
obj4.height=67;//this is ignored, due to obj is freezed
obj4.width=45;
console.log(obj4.height,obj4.width);
obj4={};//wrong
console.log(obj4.height,obj4.width);
obj4={a:23};//wrong
console.log(obj4.height,obj4.width);

let obj5={};
console.log(Object.isFrozen(obj4));//not frozen because it unfreezed, since we assign new value
console.log(Object.isFrozen(obj5));//not frozen

console.log(obj4.hasOwnProperty('a'));
console.log(obj5.hasOwnProperty('a'));
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));

const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj));//2,7,100 will be in ascending order
const object2 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object2));

let object3 = {};
console.log(object3);
console.log(Object.keys(object3));
console.log(Object.values(object3));
object3={a:1,b:2}//default writable val is true
console.log(object3);
object3.a=12;
console.log(object3);
console.log(Object.keys(object3));
console.log(Object.values(object3));
object3.c=90;//default writable val is true
console.log(object3);
Object.defineProperty(object3,"d",{value:3456,writable:true,enumerable:false});//default writable prop is false
console.log(object3);
object3.d=90;//cannot change
console.log(object3.d);
let k=Object.keys(object3);
for(let f of k){//for in- will print index
  console.log(f)
}
Object.defineProperty(object3,"c",{writable:false});
object3.c=88;
console.log(object3.c)


let f={w:34,l:45};
f.l=8989;
console.log(f)
Object.defineProperties(f,{
  l:{writable:false},
  b:{value:4,writable:true}//by default writable will be false
})
f.l=1;
f.b=7654;
console.log(f)
