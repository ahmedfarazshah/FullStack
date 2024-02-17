var file = {
    name : "John",
    resident : "NY",
    age : 20,
    married : false
}

// making a constructor function

function Person(name, resident, age, married){
    this.name = name ;
    this.resident = resident;
    this.age = age;
    this.married = married;
}

var person1 = new Person("mena", "Gujrat", 22, false)

// thus a object is created using constructor function