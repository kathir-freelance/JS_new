function handler(event){
    console.log(event);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.currentTarget);
    console.log(event.target.outerText);
    console.log(event.target.value);
}
btn.addEventListener("click",handler);
inp.addEventListener("click",handler);