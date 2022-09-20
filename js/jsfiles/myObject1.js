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