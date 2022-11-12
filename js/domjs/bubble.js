function handler(event){
    event.stopPropagation();
    console.log(event)  
    alert('ct ',event.currentTarget.id)
    alert('target ',event.target)
    console.log('clicked')
}
function login(event){
 //   alert(event.currentTarget)
   // alert(event.target)
    console.log('checking in db')
}
p.addEventListener("click",handler);
//div.addEventListener("click",handler);
//form.addEventListener("click",handler);