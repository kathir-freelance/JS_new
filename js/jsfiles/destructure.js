//ES6 NEW

var arr=[2,3,4,5,6,7];

// let [t,u,v]=arr;
// console.log(t,u,v);

// let [t,,u,,v]=arr;
// console.log(t,u,v);

let [t,,,u,,v]=arr;
console.log(t,u,v);

let obj={};
obj={name1:"ajay",age:34,city:'chennai'};

let {name1,age}=obj;
console.log(n,age)