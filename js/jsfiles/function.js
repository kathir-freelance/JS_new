function f1(a,b){
    console.log(a+b);
}

let f3=(a,b)=>console.log(a+b);

function f2(anyFunction){
    var x=90,y=100;
    anyFunction(x,y);
}

let f4=(someFunction)=>{
    var x=90,y=100;
    someFunction(x,y);
}
f2(f1);
f4(f3);

function diffSubtract(date1, date2) {
    console.log("diff of date is ",date2-date1)
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    console.log("diff of time is ",date2.getTime()-date1.getTime())
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
   // console.log(date1,date2)
    let start = Date.now();
    console.log(start)
    for (let i = 0; i < 1000; i++) f(date1, date2);
    console.log(Date.now());
    return Date.now() - start;
  }
  
  //console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  //console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );



  function testPerformance(){
    let start=Date.now();
        console.log(Date.now());
        for(i=1;i<1000000;i+=2);
        console.log(Date.now());
        let end=Date.now();
        console.log("difference",(end-start),"ms");
  }
  testPerformance();