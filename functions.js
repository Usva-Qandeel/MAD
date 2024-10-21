//functions
function first_func()
{
    console.log("hello this is my first function");
}
first_func();
//function stored in a variable
var  my_name= function hello()
{
    console.log("aatiqa")
}
my_name();
//anonymous function
const my_any=function ()
{
    console.log("i AM AN ANONYMOUS FUNCTION")
}
my_any()

//arrow function
hello=()=>{
    console.log("hi i am an arrow function")
}
hello();
//shorter arrow
let hi="";
hi = () => "i am arrow function even more shorter";
console.log(hi());