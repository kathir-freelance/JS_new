//Please note that even though <textarea>...</textarea> holds its value as nested HTML, we should never use textarea.innerHTML to access it.

console.log(myForm.inp.value);
console.log(myForm.tarea.value);
console.log(myForm.gender.checked);//get selected chk box value using current form obj
console.log(myForm.select.options[2].selected = true);
console.log(myForm.select.selectedIndex);
if(select.selectedIndex===2)
    alert('u selected option 3');

    // on selecting drop down value dynamically it has display the option which i am choosing //use switch case

console.log(myForm.select.value);
//let option = new Option("Text", "value", true, true); - try