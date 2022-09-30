let f1=function(){
    console.log('hi');
}

f1();
let f2=()=> console.log('hiiii helllo');

f2();
let f3=function(a,b){
    console.log('hi',(a+b));
}

let f4=(a,b=90)=>  console.log('hi',(a+b));
f4(192);
f4(192,22);


function give(){
    return "jungle";
}

var val=give();
console.log(val);

let get=()=> 'jungle';
console.log(get());

function add(a,b,c){
    var res=a+b;
    res=res-c;
    return res;
}

console.log(add(1,2,1));

let my=(a,b,c)=>{
    var res=a+b;
    res=res-c;
    return res;
}

console.log(my(2,3,1));
let my1=(a,b,c)=>a+b+c;
console.log(my1(2,3,1));