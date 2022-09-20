function myfunction(str){
    console.log(str)
}

//anonymous function
// function(str){
//     console.log(str)
// }


//anonymous function
//here f1 is a variable which is block scoped
let f1=function(str){
    console.log(str)
}
//let f1=function(){} - f1=> block scoped var
f1();
f1('welcome');
console.log(f1)

