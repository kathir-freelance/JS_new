//class classname{
class Employee{  
    city=''; 
    constructor(city,pin,country){
        this.city=city;//variable hoisting
        this.pin=pin;
        this.country=country;
        console.log(city,pin,country)
    }
    toString(){
        console.log(this);
        return "name is "+this.city+" pin "+this.pin+" country "+this.country;
    }
}


let emp=new Employee("Tn","600044","India");
console.log(emp);
console.log(emp.toString());


class Car{
    seats=4;
    constructor(seats=4,engineSpeed=70){
        this.engineSpeed=engineSpeed;
        this.seats=seats;
    }
    // constructor(seats,engineSpeed){
    //     this.engineSpeed=engineSpeed;
    //     this.seats=seats;
    // }
}
function createCar(seats,engineSpeed){
   return  new Car(seats,engineSpeed);
}
console.log(new Car());
console.log(new Car(7,180));
console.log(createCar(5,200));
console.log(createCar(8,200));