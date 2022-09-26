var varName=[];//declcration
varName=[1,2,43,56,6,7,88];//initialization
// console.log(varName[0]);//1
// console.log(varName[2]);//43
// console.log(varName[4]);//6
// console.log(varName[7]);//undefined
// console.log(varName[8]);//undefined

//for(var i=0;i<6;i++)
 //   console.log(varName[i])

//for(var i=0;i<8;i+=2)
  //  console.log(varName[i]);

//console.log(varName.length)

//for(var i=0;i<varName.length;i++)
    //console.log(varName[i]);


var arr=[3,4,45,5,6,6,7,3,8,81];
var d=90; var e=89; var f=34;
var arr2=Array.of(d,e,f);    
//console.log(arr2);

var str1="hi hello how";
var str2=Array.from(str1);
//console.log(str2)

var s1="hi";var s2="hello"; var s3="how";
var str3=Array.of(s1,s2,s3);
//console.log(str3)


console.log(str3.at(2));
var resultArray=arr2.concat(str3);
// console.log(resultArray)
// console.log(arr2);
// console.log(str3)

//array.fill()
var a1=[];
console.log(a1.length);

a1.fill(3);
console.log(a1);

var a2=[1,2,4];
console.log(a2.length);

a2.fill(3);
console.log(a2)

a2.fill(3,4);// old value will be printed
console.log(a2);

const array1 = [1, 2, 3, 4,5,6];

// fill with 0 from position 2 until position 4
console.log(array1.fill('*', 2, 5));
console.log(array1.fill('*', 2));

const arr3=[1,2,3,4,5,6];
console.log(arr3.join(""));
console.log(arr3.join("-"));
console.log(arr3.join("alpha"));

var r=array1.keys();

for(ix of r){
    console.log("index is ",ix);//index value is acting as key
   console.log("value is ",array1[ix])
}


var arr5=[];
arr5[0]=90;
arr5[2]=89;
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[2]);
arr5.push(567);
console.log(arr5);
arr5.push(57);
console.log(arr5);
arr5.push(97);//pushed to the last value of an existing array
console.log(arr5);

console.log(arr5.pop());
console.log(arr5.pop());
console.log(arr5.pop());
console.log(arr5);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant','mouse'];
console.log(animals.slice(2, -1));

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
