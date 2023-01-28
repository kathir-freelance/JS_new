// function iamcallback(){
//     console.log('am working now')
// }

// function caller(mycallbackfn){
//     console.log('i should complete first')
//     console.log("only then call back shud be called")
//     mycallbackfn();//callback
// }

// caller(iamcallback)

// setTimeout(iamcallback,2000)

// let promise = new Promise(function(resolve,reject){
// 10>3?resolve("10 is great"):reject("3 is small");
// });
// console.log(promise)
// // promise.then(
// //     result => alert(result), // shows "done!" after 1 second
// //     error => alert(error) // doesn't run
// //   );
// promise.then(console.log)

// try {

//     console.log('Start of try runs');  // (1) <--
//     var res=a/0;
//    // hi
//     console.log('End of try runs');   // (2) <--

//   } catch (err) {
//     console.log(err)
//     console.log(err.message)
//     console.log('Catch is not ignored, because there are some errors'); // (3)
  
//   }

// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 1000);
//   } catch (err) {
//     alert( "won't work" );
//   } 


  var a=90;
  var b=100;

 var promise=new Promise(function(resolve,reject){
       a<b?
       resolve(g `${a} is great`)
       :reject(c `${b} is not great`)
    }).then(console.log).catch(err=>console.log(err.message));