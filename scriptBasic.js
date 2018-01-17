////////////////////////////////
//Lecture variables
console.log('Hello World!');
console.log(age);


var name = 'John';
var lastName = 'Smith';
var age = 26
var fullAge = true;
console.log(name+lastName);
console.log(age);
console.log(fullAge);
console.log(age + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

//alert(name + ' is a ' + age + ' years old ' + job + '. Is he married ' + isMarried + '.');

//Lecture: Operators

var now = 2016
var birthYear = now - 26

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMarck = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageMark);
console.log(ageJohn);

////////////////////////////////
//Lecture: if/else statements

var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    //if(false)
    console.log(name + ' is married!');
} else{
    console.log(name + 'will hopefully marry soon :)');
}

isMarried = false;

if(isMarried){
    console.log('YES!');
} else {
    console.log('NO!');
}

if(23 == 23){
    console.log('Something to print...')
}



/////////////////////////////
////////Lecture: boolean logic and switch

var age = 20;

if (age < 20){
    console.log('John is a teenager.');
} else if(age >= 20 && age < 30){
    console.log('John is a young man.');
} else{
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does John do?')

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}


////////////////////////////////////////////////
///// Lecture: Functions

function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1969);
var ageMike = calculateAge(1948);

console.log(ageJohn);

function yearsUntilRetirement (name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    
    if(retirement >= 0){
       console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
    
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);


////////////////////////////////////////////////
/////////Lecture : Statements and expressions

function someFun(par){
    //code
}

var someFun = function(par){
    //code
}

//Expresions
3 + 4;
var x = 3;


//Statements
if(x === 5) {
    //do something
}


/////////////////////////////////
///// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[2]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
console.log(john);

john.unshift('Mr.');
console.log(john);

john.pop(); //delete last element
console.log(john);

john.shift();//delete first element
console.log(john);

//alert(john.indexOf('Smith'));
if (john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher');
}


/////////////////////////////////////////
//////Lecture: Objects

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

// Object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);


////////////////////////////////////
////Lecture: Objects and methods
//v1.0
/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth){
        return 2016 - this.yearOfBirth;
    }
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john); */


//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth){
        this.age = 2018 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    yearOfBirth: 1950,
    calculateAge: function(yearOfBirth){
        this.age = 2018 - this.yearOfBirth;
    }
}

mike.calculateAge();
console.log(mike);

/////////////////////////////////////////////
/////Lecture: Loops

//for loops
for(var i = 0; i < 10; i++){
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i=0; i < names.length; i++){
    console.log(names[i]);
}

for(var i = names.length - 1; i >= 0; i --){
    console.log(names[i]);
}

//while loops

var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}


for(var i = 1; i <= 5; i++){
    console.log(i);
    
    if(i === 3){
        break;
    }
}

for(var i = 1; i <= 5; i++){    
    if(i === 3){
        continue;
    }
    
    console.log(i);
}
























