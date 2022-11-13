//1st way - using doc.formsand name  of form
var f1=document.forms.form1;
console.log(f1);
var f2=document.forms.form2;
console.log(f2);

//2nd way - using array
var allForms=document.forms;
console.log(allForms);//array of HTMLCOLLECTION
var ff1=document.forms[0];
console.log(ff1);
console.log(allForms[0])
//get value from either  form 1 or 2 
console.log(allForms[0].one.value)

//3rd way to access form and its child
console.log(form1.one.value);
console.log(form2.one.value);//one is value of name attribute of text box in form 2 and we get its value using value attribute of text box
console.log(form2.btn1.innerHTML)//doesn't removes the extra spaces start and end of text 
console.log(form2.btn1.innerText)//removes the extra spaces start and end of text 

//form.elements
console.log(form1.elements);
console.log(form2.elements);
//to get value from form 2 1st text box value
console.log(form2.elements[0].value);
console.log(form2.elements[1].value);
console.log(form2.elements[2].innerText);