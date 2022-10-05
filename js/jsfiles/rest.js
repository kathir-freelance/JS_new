//rest syntax
//...


var arr=[2,3,4,7,5,66,44,43];

let [a,,b,c,...r]=arr;

console.log(r);


function func(t,u,...arg){
    console.log(t,u,arg);
}

func(1,2,3,55,6,4)