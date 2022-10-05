//datafns
let now = new Date();
console.log(now);

let now1=new Date(0);
console.log(now1);

let now2 = new Date(28,9,2022);
console.log(now2);

let now3 = new Date(90000);
console.log(now3);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = new Date("2017-01-26");//yyyy-mm-dd
console.log(date);
console.log(date.getDate());
console.log(date.getDay());//thu-4
console.log(date.getFullYear());
console.log(date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds());




let date1 = new Date(2011, 0, 1, 2, 3, 4, 567);//0-jan
console.log(date1);
console.log(date1.getHours(),date1.getMinutes(),date1.getSeconds(),date1.getMilliseconds());
let date2 = new Date(2012, 1, 1, 2, 3, 4, 567);
console.log(date2);

let start = Date.now(); 
console.log(start)//long o/p
console.log(new Date(start))