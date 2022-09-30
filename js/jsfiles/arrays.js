let arr = ["I", "study", "JavaScript","hi","welcome"];

arr.splice(1, 2); // from index 1 remove 1 element

console.log( arr );

let arr1 = ["I","now", "study", "now","JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr1.splice(0, 3, "Let's", "dance");
console.log( arr1 ) // now ["Let's", "dance", "right", "now"]
let arr2 = ["I", "study", "now","JavaScript", "right", "now"];
console.log(arr2.indexOf('now'))
console.log(arr2.lastIndexOf('now'));

let arr3= ["Ironman", "ps1","naane varuven"];
console.log(arr2.lastIndexOf('ps1'))

let arr4= ["Ironman", "ps1","naane varuven","ps1"];
console.log(arr4.lastIndexOf('ps1'));


let arr5=[2,4,6,8,10];

let multiplier=function(a){
    return a*2;
}

let arr6=arr5.map(multiplier);
console.log(arr6);

let arr7=arr5.map(x=>x*2);
console.log(arr7);

let arr8=arr5.filter(y=>y>5);
console.log(arr8);


let names = 'Bilbo, Gandalf, Nazgul';

let arr9 = names.split(', ');
console.log(arr9);

let names1 = 'Bilbo-Gandalf-Nazgul';
let arr10 = names1.split('-');
console.log(arr10);

let names2= 'billohwillohchilloh';
let arr11 = names2.split('oh');
console.log(arr11);

const array1 = ['a', 'b', 'c'];
for(let k in array1)
{
console.log(k);
console.log(array1[k])
}

const arr12 = [0, 1, 2, [3, 4]];

console.log(arr12.flat());
// expected output: [0, 1, 2, 3, 4]

const arr13 = [0, 1, 2, [[[3, 4]]]];

console.log(arr13.flat(3));
// expected output: [0, 1, 2, [3, 4]]
const arr14 = [0, 1, 2, [11,33,[2,3,[3, 4]]]];
console.log(arr14.flat(1));
console.log(arr14.flat());
