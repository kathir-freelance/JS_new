function ask(question, yes, no) {
//     if (confirm(question))
//      yes()
//     else 
//     no();
    let y=10>3? 'yes i am great':'no i am not';//? : -> ternary operator
    console.log(y)
    // /confirm(question)?yes():no();
}
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );