let user={ un:'abc'};
console.log("before ",user);
user.city='chennai';
getCity=()=>console.log(this.city);
user.getCityData=getCity;
user.getCityData();
console.log("after ",user);
let emp={empName:'jjj'}


let obj = {
    name: "",
    password: "",
    login: function () {
        if (this.name === "ajay" && this.password === "123456")
            console.log('logged in successfully');
        else
            console.log("credentials are wrong");
    },
    display:(initial)=> (initial+" "+obj.name+" "+this.password)
}
//let name="ajay";
obj.name="ajay";
obj.password="123456";
console.log(obj.display("Mr."));
obj.login();


// /display=function(){} // must be declasred by either let or var