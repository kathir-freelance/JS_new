function added(){
    console.log('added');
}

inp1.addEventListener("dblclick",added);

var count=0;
function removeListnr1(event){       
    console.log('removing ',event);
    
    if(count===0){
        console.log(count)
        inp1.removeEventListener("dblclick", added);
        count=count+1;
    }    
    else
    {
        console.log('in else ',count)
        inp1.addEventListener("dblclick", added);
        count=0;
    }
    
}
btn2.addEventListener('click',removeListnr1)