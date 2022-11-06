/*
elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute.
 */
var elem=document.body.id;
console.log(elem)
var elem1=document.body.display;//undefined
console.log(elem1)
var elem2=document.body.getAttribute('display');//undefined
document.body.setAttribute('display','dply');
var elem3=document.body.getAttribute('display');
console.log(elem3)
document.body.removeAttribute('display');
console.log(document.body.hasAttribute('display'))


function addStyle()//eventHandler-listens for click event
{
  //  var elem=document.body;
   // console.log(elem.firstChild);
   var elem=document.getElementById("input");
   elem.setAttribute("style","color:green;font-size:40px");
   var elem1=document.getElementsByTagName("button");
   console.log(elem1)
   if(elem1[0].hasAttribute('style'))
    elem1[0].setAttribute("style","background-color:aqua");
    else
    console.log('not there')
    //=======================================================
   if(elem1[0].hasAttribute('test'))
    elem1[0].setAttribute("style","background-color:aqua");
    else
    console.log('not there')
}

//dynamic creation of elements
var div=document.createElement('div');
div.className='alert';
div.innerHTML='hi welcome to create  element';
document.body.append(div);

var inp=document.getElementById('input');
inp.before(div);

var ol=document.createElement('ol');
ol.append('li');
ol.after('li');
ol.after('li');
document.body.append(ol)

var count=0;
  function countRabbits() {
    
      alert("Rabbit number " + (++count));
    
  }

  
function callDivFunc(event)//function hoisting
{
    console.log(this)
    console.log(this.innerHTML);
    console.log(event)
}
//divfunc.addEventListener( "click" , () => alert('Thanks!'));
divfunc.addEventListener( "click" , callDivFunc);
