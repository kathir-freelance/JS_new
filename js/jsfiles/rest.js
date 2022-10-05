//rest syntax
//...


var arr=[2,3,4,7,5,66,44,43];

let [a,,b,c,...r]=arr;

console.log(r);

//foo(...wrong, arg2, arg3)=>rest can appear only at last arg position
//foo(...one, ...wrong, ...wrong)=>rest can appear only at last arg position
function func(t,u,...arg)//The rest parameter must be the last parameter in the function definition.
{
    console.log(t,u,arg);
}

func(1,2,3,55,6,4)
func("ss","dd","rrr");

var arr1=[22,33,44];
let [d,e,f,g=0,h1=0]=arr1;//default value in destructuring
console.log(d,e,f,g,h1);

var obj1={name1:'aaaa',age:23,city:"chennai"};
//var obj1={name1:'aaaa',age:23,city:null};
var {name1,age,city="my city",country="no value"}=obj1;
console.log(name1,age,country,city);

var {name1:username,city:usercity}=obj1;
console.log(username,usercity);

let options = {
    title: "Menu"
  };
  
  let {width: w = 100, height: h = 200, title} = options;
  
  console.log(title);  // Menu
  console.log(w);      // 100
  console.log(h);      // 200

  let options1 = {
    title1: "Menu",
    height: 200,
    width: 100
  };
  
  // title = property named title
  // rest = object with the rest of properties
  let {title1, ...rest} = options1;
  
  // now title="Menu", rest={height: 200, width: 100}
  console.log(rest)
  let {height:hh,width:ww}=rest;
  console.log(hh,ww);
  console.log(rest.height);  // 200
  console.log(rest.width);  

  //spread

//   function myfunc(t,u,v,...arg){
//     console.log(t,u,v,arg);
//   }

//   myfunc(1,2,3,4,5,67,65,45)

function myfunc(t,u,v,...arg){
    console.log(t,u,v,arg);
  }

  let myarr=[1,2,3,4,5,67,65,45]
  myfunc(...myarr);

  let arr2 = [3, 5, 1];
  console.log(Math.max(...arr2))

  let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];
console.log(merged);

let arr5={a:1,b:2,c:3};//js obj
/*
  {
    "a":1,
    "b":2,
    "c":3
  }

*/
let yr=JSON.stringify(arr5);//js obj ->json
console.log(yr);

console.log(JSON.parse(yr));//json ->jsobj

//task
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };