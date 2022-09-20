function f2(arg){
    console.log(arg)
}
function f3(func){
    console.log(func)
}
let myfunction=function(){
    console.log('my function called')
}
//myfunction();
f2();
f2('wrong data')
f3(myfunction);

function f4(func){
    func();
}
f4(myfunction)