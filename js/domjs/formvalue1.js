//oText = oForm.elements["text_element_name"]; OR
//oText = oForm.elements[index];




function getData() {
    console.log('hiii')
    var name = document.myForm.name.value;

    console.log(name);
    const regex = new RegExp(/^a...s$/);
    console.log(regex.test(name)); // false
    console.log(regex.test('alias')); // true

    const regex1 = new RegExp(/^A..n$/);
    if (regex1.test(name)) {
        //      alert('its matching')
    }
    else {
        //     alert('its not matching')
    }
    //const regExpStr = 'Hello world! hello there hello';
    const regExpStr = `welcome world!  its my
    =----
    Hello
    hello
    `;
    //const regExpLiteral = /Hello/gi;
    //const regExpLiteral = /hello/m;
    const regExpLiteral = /hel[lo]o/;
    console.log(regExpStr.match(regExpLiteral));

    const regExpConstructor = new RegExp('xyz', 'gi'); // With flag -g
    const str = 'xyz xyz XYZ';
    console.log(str.match(regExpConstructor));

    var data='welcome';
    const regExpConstructor1 = new RegExp(data, 'gi'); // With flag -g
    const str1 = 'xyz xyz XYZ welcome';
    console.log(str1.match(regExpConstructor1));

    const regexPattern1 = /^cat/;

console.log(regexPattern1.test('cat and mouse')); // Output: true
console.log(regexPattern1.test('cATerpiller and mouse'));//false starts with c but AT are in caps
console.log(regexPattern1.test('The cat and mouse'));//false - starts with The

const regexPattern2 = /use$/;
console.log(regexPattern2.test('cat and mouse')); //true it checks for ending string with use
console.log(regexPattern2.test('cat and dsjbfsdfouse')); //true it checks for ending string with use
console.log(regexPattern2.test('cat mouse and mouse')); //true it checks for ending string with use

const regexPattern3 = /cat\b/gi;
console.log(regexPattern3.test('concat,catenation and mouse'));
const regexPattern4 = /\bcat/gi;
console.log(regexPattern4.test('concat,catenation and mouse'));
const regexPattern5 = /\bcat\b/gi;
console.log(regexPattern5.test('concat,cat,catenation and mous catcat'));
const regexPattern6 = /\s/;
console.log(regexPattern6.test('concat,catenation,mouse'));
const regexPattern7 = /\s/;
console.log(regexPattern7.test('concat, catenation,mouse'));
const regexPattern8 = /\d\d/;
console.log(regexPattern8.test('no.88, 2nd cross street'));
const regexPattern9 = /\D\d/;
console.log(regexPattern9.test('no.8, 2nd cross street'));
const regexPattern10 = /^[a-h]/;
console.log(regexPattern10.test('no.8, 2nd cross street'));//false
const regexPattern11 = /^[a-h]/;
console.log(regexPattern11.test('d1, 2nd cross street'));//start with any char b/w a-h
const regexPattern12 = /^(hello)/;
console.log(regexPattern12.test('hello d1, 2nd cross street'));//start with any char b/w a-h

const regexPattern = /hel+o/;

console.log(regexPattern.test('helo'));    // Output: true

console.log(regexPattern.test('hellllo')); // Output: true
console.log(regexPattern.test('heloooooo')); // Output: true

console.log(regexPattern.test('heo'));     // Output: false

const regexPattern13 = /hel*o/;

console.log(regexPattern13.test('helo'));    // Output: true

console.log(regexPattern13.test('hellllo')); // Output: true

console.log(regexPattern13.test('heo'));     // Output: true

const regexPattern14 = /\d{3}/;
console.log('hi ',regexPattern14.test('no.889, 2nd cross street'));

const regexPattern15 = /\d{4,4}/;
console.log('hi ',regexPattern15.test('no.9899, 2nd cross street'));

const regexPattern16 = /a.*n/;
console.log('hi ',regexPattern16.test('alexander is a great king and  is also good'));//alexander is a great king an
const regexPattern17 = /a.*?n/;
var str3='alexander is a great king and  is also good';
console.log('hi ',str3.match(regexPattern17));//alexan
}