//Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
    
}

Person.prototype.calculateAge = function(){
        console.log(2018 - this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
//console.log(john);

var jane = new Person('Jane', 1969, 'designer');
//console.log(jane);

var mark = new Person('Mark', 1948, 'retired');
//console.log(mark);

jane.lastName = 'Jhonson';

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);


//Object.create

var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
};

var lewis = Object.create(personProto);
lewis.name = 'Lewis';
lewis.yearOfBirth = 1990;
lewis.job = 'teacher';

var giselle = Object.create(personProto, {
    name: {value: 'Giselle' },
    yearOfBirth: {value: 1969 },
    job: {value: 'designer' }
});

/////////////////////////////////////////////////
///Primitives vs objects


//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'Pedro',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change (a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);










































