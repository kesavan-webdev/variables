//JavaScript (JS) is a lightweight, interpreted, or just-in-time dynamic compiled programming language
//Ecmascript is official Name

//VARIABLES

//block scope
const country = "india";
//const country="usa"  //it will throw an error we cant redeclare
//country="uk"  //it will throw an error we cant reinitiallize
//const country;        //it will throw an error we cant reinitiallize
const continent = "asia";

let population = 140.76;
// let population = 140; it will throw an error we cant redeclare
population = 140; //it will take because we reinitiallize

let connected; //it will work

//global scope
var userName = "kesav";
var userName = "kumar"; //it doesnt throw error
userName = "dinesh"; //it doesnt throw error

//  =  assignment operator

// output
console.log(country);
console.log(continent);
console.log(population);
console.log(userName);

//DATA-TYPES

//Primitive data types--int string boolean 
//Non-primitive data types--array object
//we dont need to specify int,string,boolean,float etc..

//typeof operator used check what type the variable.

console.log(typeof (country));//string
console.log(typeof continent);//string
console.log(typeof population);//number
console.log(typeof userName);//string

const isIsland = false;
let language;

console.log(typeof isIsland);//boolean
console.log(typeof language);//undefined