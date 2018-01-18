//global scope - accessible from everywhere from all functions
///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

function calculateAge(year){
    console.log(2016 - year);
}

//function expression
var retirement = function(year) {
    console.log(65 - (2016 - year));    
}

retirement(1990);


//variables

console.log(age); // console var undefined
var age = 23; // global scope

function foo(){
    var age = 65; //local scope
    console.log(age); //print 65   
}

foo();
console.log(age); // next print 23 - global execution context object

///////////////////////////////////////
// Lecture: Scoping

// First scoping example
var e = 'Hello!';
firstHi();

function firstHi() {
    var f = ' Hi!';
    secondHey();

    function secondHey() {
        var i = ' Hey!';
        console.log(e + f + i);
    }
}

// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = ' Hi!';
    second();

    function second() {
        var c = ' Hey!';
        third()
    }
}

function third() {
    var d = ' John';
    console.log(a + d);
}



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
    }
}

john.calculateAge();
