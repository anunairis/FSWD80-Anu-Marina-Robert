var fruits = ['apple', 'banana', 'kiwi'];

//push function
fruits.push('orange');
console.log (fruits);

//slice funstion
console.log (fruits.slice(0,3));

//sort function
var animals = ['monkey', 'horse', 'dog'];
console.log(animals.sort());

//unshift function
animals.unshift('cat');
console.log(animals);


// intermediate exerc 3: split variable + output in a separate line
var food = 'mango cherries kiwi grapes pear peach orange lemon';
var food1 = new Array();
food1 = food.split(' ');
document.write(food1.join("<br>"));