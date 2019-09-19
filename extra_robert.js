
var hey = "Hey there, i am a javascript developer, and i live in vienna";

console.log(hey.indexOf(","));
hey = hey.substring(11,38) + ".";
document.write(hey[0].toUpperCase() + hey.slice(1));



var start = ['apple', 'banana', 'kiwi']

var end = start.slice(0,2) + ',orange,strawberry,' + start.slice(2,3)

console.log(end.split(","))

//console.log(hey.substring(12,))