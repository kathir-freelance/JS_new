function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  let p=new Person('ajay','kumar',34,'brown');
console.log(p.firstName)
console.log(p.lastName)
  class Person1{

    constructor(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
          }
        
  }
  let p1=new Person1('alex','d',34,'brown');
console.log(p1.firstName)
console.log(p1.lastName)
