console.log('hello')
//expressions
var name1 = "aatiqa"
var name2 = "aatiqa";
//varibales
var _name = "aatiqa";
let age=27;
const gender = "female";
//how variables differ
//#1. global vs local scope before es6
function my_name()
{
    //local
    var another_name="aatiqa ghazali";
//using global variable
    console.log(_name);
    console.log("name inside function",another_name);
}
my_name();
console.log("name outside function");
//console.log( another_name);

//block scope
function hello_world(){
    let my_name2="aatiqa bint e ghazali";
    if (2<3){
        const my_name3="aatiqa bint e ghazaliiiii";
 console.log("i can access my_name3 here");
        console.log( my_name3)

    }
    console.log("i can't access my_name3 here");
    console.log( my_name3)
}
hello_world();
console.log("i can't access my_name3 here" , my_name3);


