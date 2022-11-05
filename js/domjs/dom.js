//var element=document.getElementById("content");
//console.log(element.innerHTML);
// console.log(element);
// console.log(element.childNodes);
// console.log((element.childNodes[1]).innerHTML);
// for(var i=0;i<element.childNodes.length;i++){
//     console.log((element.childNodes[i]).innerHTML);
// }

// var element1=document.getElementById("data");
// console.log(element1.innerHTML);
// console.log(element1.childNodes);
// var element2=document.getElementById("check");
// console.log(element2.childNodes);
// var element3=document.getElementById("check1");
// console.log(element3.childNodes);
// var element4=document.getElementById("check2");
// console.log(element4.childNodes);
var element=document.getElementById("content");
//console.log("before ",element.innerHTML);
element.innerHTML="<h1>i replace existing content or tags</h1>"
//console.log("after ",element.innerHTML);

// var element5=document.getElementById("form");//single elemnt(HTMLELEMENT)
// console.log(element5.innerHTML);
// element5.innerHTML="replaced";
// console.log(element5.innerHTML);
// element5.style.border='1px solid aqua'
// element5.style.fontSize='32px';

var elemCollection=document.getElementsByTagName("p");//may be single or multiple element//HTMLCOLLECTION
//console.log(elemCollection);

var singleElem=document.getElementsByTagName("span");
//console.log(singleElem);

var ele=document.querySelector("#check2");
//console.log(ele);
var ele1=document.querySelector("#check2>p:last-child");
//console.log(ele1);
var ele3=document.querySelector("#check2>p:nth-child(2)");
//console.log(ele3);

var e=document.getElementById("username");
//console.log(e);

var e1=document.getElementById("username1");
//console.log(e1);
//console.log(e1.value);

function onButtonClickHandler(event){
    //console.log(event);
    var e1=document.getElementById("username1");
    var p=document.getElementById("pass1");
   // var elem=document.getElementsByClassName('ans');
//    var elem=document.querySelectorAll('.ans')
//     console.log(elem);//array 
//     for(i=0;i<elem.length;i++){
//        // elem[i].checked?console.log("yes"):console.log("no");
//        if(elem[i].checked){
//         console.log(elem[i].value)
//        }
//     }
    //console.log(e1.value,p.value,checked1,'button clicked');
   // var elem1=document.querySelectorAll("input[type='radio']");
   // console.log(elem1);
  var right= document.querySelector('input[name="answer"]:checked').value;
  console.log(right)
}