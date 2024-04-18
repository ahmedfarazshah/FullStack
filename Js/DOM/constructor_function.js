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


function Housekeeper(name, age , yearsOfExperience , cleaningRepertoire){
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.suitcaseShift = function(){
        alert("Hi I'm " + this.name + " Can I help you with your suitcase")
        // pickupSuitcase();
        // move();
    }
    this.clean = function(){
        alert("Okay it will be cleaned with in couples of minutes")
    }
    
}
