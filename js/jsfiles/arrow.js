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


function getArray(myarr){

    for(var i=0;i<=myarr.length-1;i++){
        console.log(myarr[i])
    }
}
getArray([1,2,3,4,5]);

let getArr=(myarr)=>{
    for(var i=0;i<=myarr.length-1;i++){
        console.log(myarr[i])
    }
}
getArr([5,627,83,94,5]);