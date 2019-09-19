var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];

console.log(cars.sort());

var fruits = ['apple', 'banana', 'kiwi']; 

console.log(fruits);

fruits.push( "orange" );
console.log(fruits);

fruits.pop();
console.log(fruits);

var animals = ['monkey', 'horse', 'dog'];
console.log(animals);

console.log(animals.sort());
animals.unshift("cat");
console.log(animals);

var fruits2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var fruitSplit = fruits2.split("/");
document.write(fruitSplit)
document.write(fruitSplit.join("<br>"))
/*document.write(fruitSplit.join(" "));
console.log(fruitSplit);*/