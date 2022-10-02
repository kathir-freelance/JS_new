const string1 = "A STRING PRIMITIVE";
const string2 = 'also a string primitive';
const string3 = `Yet another string primitive`;
//const string4 = new String("A String object");
console.log(string2.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.concat(string2));
console.log(string1.charAt(2));
console.log(string1.endsWith("tive"));//false
console.log(string1.endsWith("TIVE"));//true
document.write(string1.blink());
const myString = "Table of Contents";
console.log(string1.includes('i'));
console.log(string1.includes('TV'));
console.log(string1.includes('IV'));
console.log(string1.indexOf('V'));
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
var n = 1.23456;
console.log( n.toFixed(2)); 
n=1.567789
console.log( n.toFixed(2)); 
var t=Number("90a");
console.log(t);
t=Number("90");
console.log(t);

var str="hi hello";
for(let y of str)
    console.log(y);

var strArr=["hi","hello","welcome"];
//var iter=strArr.iterator();    
var iter=strArr[Symbol.iterator]();
console.log(iter);

