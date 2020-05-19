var name = "Laura";
var welcome = "CIT 12000";

var greeting = "Hello there! My name is "+name;
var welcome = "Welcome to "+welcome;
var greeting2 = "The answer is: "+answer;

var number1 ="number1";
var number2 ="number2";

var answer ="prompted,prompty";
answer = number1+Number(number2);

var prompted = prompt("Choose first number:");
var prompty = prompt("Choose a second number:");

document.querySelector(".words").innerHTML =greeting;
document.querySelector(".words2").innerHTML =welcome;
document.querySelector(".number1").innerHTML =prompted;
document.querySelector(".number2").innerHTML=prompty;
document.querySelector(".answer").innerHTML=greeting2