//button
    //onclick=> inline js code --this =>will print current element
//button 
    //onclick => call a function
        //=> arg of the function is event=> when we print event it prints undefined 
        //this will print window object   

//button without any function in tag
    //using id or any attrbute attach a eventListerner(connects to a handler function)
        //can access event object inside the handler
        //this - will print window object

//inline functio ie in button tag is belongs to button element itself
//belongs to window class
function clickMe(){
    var a=89;
    console.log(a,this);
}


  function handler1() {
   console.log('Thanks!');
  };
 
   var optionalAttr={once:true};
  elem.addEventListener("click", handler1,optionalAttr); // Thanks!

  elem.addEventListener("click", handler1,{once:true}); 
  //dynamically change the value of once attr from above 
  
  function handler2(event) {
   console.log('Welcome Thanks! ' ,event);
};

inp1.addEventListener("dblclick",handler2);

function removeListnr(event){   
    console.log('remove handler 2 dbl click ',event);
    inp1.removeEventListener("dblclick", handler2);
    console.log(event)
}
