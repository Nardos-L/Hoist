//1.
console.log(hello);                                   
var hello = 'world';

// var hello;
// console.log(hello); //logs undefined
// var hello = 'world';

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// test(); // /logs magnet
// var needle = 'magnet';


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// brendan = 'only okay';
//  console.log(brendan);
// console.log(brendan); // logs brendan(super cool)

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// console.log(food); //logs chicken
// eat(); //logs half-chicken
// food = 'half-chicken';
// console.log(food);
// var food = 'gone';

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean(); // mean is not a function
// console.log(food); //food is not defined

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre); // undefined
// var genre = "disco";
// rewind(); // logs rock , r&b, 
// console.log(genre); // logs disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

///dojo = "san jose";
// console.log(dojo); // logs san jose
// learn(); // logs seattle, burbank
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo); // logs san jose

//8 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // TypeError: Assignment to constant variable.
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }