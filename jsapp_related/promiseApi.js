// function myfunc(){
// 	console.log('hi hello');
// }

//async
// function myfunc(){
// 	setTimeout(()=>console.log('hi hello'),2000);
// }
// myfunc();
let p=new Promise(function(resolve, reject) {

    setTimeout(() => resolve(2), 4000); // (*)
  
  });
  
  p2=p.then(function(result){
      return result*4;
  });
  
  p2.then(function(result){
  console.log(result*2);
  });