function makeFocus(){
    username.focus();
    
}

function looseFocus(){
    username.blur();
}

username.onfocus=function(){
    console.log(this.classList.add("error"))
}

username.onblur=function(){
    console.log(this.classList.remove("error"))
}