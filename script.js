var name = "Laura";
var welcome = "CIT 12000";

var greeting = "Hello there! My name is "+name;
var welcome = "Welcome to "+welcome;

document.querySelector(".words").innerHTML =greeting;
document.querySelector(".words2").innerHTML =welcome;

var num = 12;
var stringNum = 34;

num = num+Number(stringNum);

document.querySelector(".num").innerHTML = num;