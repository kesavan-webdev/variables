//block scope 
const country="india";
//const country="usa"  //it will throw an error we cant redeclare
//country="uk"          //it will throw an error we cant reinitiallize
const continent="asia";    


let population=140.76;
// let population = 140; it will throw an error we cant redeclare
       population=140; //it will take because we reinitiallize

//global scope
var userName="kesav";  
var userName = "kumar";//it doesnt throw error
userName = "dinesh";   //it doesnt throw error

// output
console.log(country);
console.log(continent);
console.log(population);
console.log(userName)
