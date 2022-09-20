var name = "Ajay";
var age = 34;
var city = "Chennai";
var salary = 23434;

function display(n, a, c, s = 90) {
    console.log(n);
    console.log(a);
    console.log(c);
    console.log(s);
}
display(name, age, city, salary);

//Object - OOPS, functional programming

var obj = {};//Object class
console.log(obj)
console.log(typeof obj)


var employee = {
    name: "Ajay",
    age: 34,
    city: "Chennai",
    salary: 23434,
};
console.log(employee)//by default all obj are of type Object class-->so it is Object class
console.log(typeof employee)//object

function empDisplay(obj){
    console.log("data is ",obj);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.city);
    console.log(obj.salary);
}

empDisplay(employee);

delete employee.salary;
empDisplay(employee);

var tv={
    name:"Sony",
    price:30000,
    //tv size:14//no
   // "tv size":14//ok
   tv_size:14,//recommended way to use a variable
   "tv color":'red'
}
console.log(tv)
console.log(tv.name)
console.log(tv.tv_size)
//console.log(tv."tv color"); here tv color cannot be accessed as a key
console.log(tv["tv color"]);
console.log(tv["name"]);
console.log(tv["price"]);

let user = {
    name: "John",
    age: 30
  };
  //"keyname" in objectname
  console.log("age" in user);
  console.log("name" in user);
  console.log("city" in user);

  for(key in user){
    console.log(typeof key)
    console.log(key," : ",user[key]);//same order as in obj
  }
//   let codes = {
//     "5": "Germany",
//     "49": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
//   };

//   for(xyz in codes)//asc order of key
//   {
//     console.log(xyz);
//     console.log(codes[xyz]);
//   }
let codes = {
    "49": "Switzerland",
    "5": "Germany",    
    "44": "Great Britain",
   name: "USA",
   alphacity: "UK"
  };

  for(xyz in codes)//only for number as keys ->asc order of key
  {
    console.log(xyz);
    console.log(codes[xyz]);
  }

  //object copying

  let a=90;
  let b=a;
  console.log(a,b)

  let car={
    brandName:"Kia",
    cap:48,
    price:800000
  }

  let smartCar=car;//copy the reference
  console.log(smartCar);
  car.brandName="Kia Inc."
  console.log(smartCar);
  smartCar.brandName="Mg hector"
  console.log("smart car obj ",smartCar);
  console.log("car obj ",car);

  const car1={
    name:"Hyundai",
    price:345678,
  }

  car1.price=900000;
  console.log(car1)
  //car1={};
  //car1={name:"kia"};
  console.log(car1)

//   function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       city:'chennai',
//       sal:90000
//     };
//   }
function makeUser(myage,name) {
    console.log(myage);
    return {
      name,
      myage,
      city:'chennai',
      sal:90000
    };
  }
// function makeUser(name, age) {
//     return {
//       name,
//       age,
//       city:'chennai',
//       sal:90000
//     };
//   }
  let y=makeUser('ajay',"34");
  //let y="";
    console.log(y);
  console.log(y.name);
  console.log(y.myage);