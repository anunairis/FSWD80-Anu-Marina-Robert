var fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
//["mango\ncherries\nkiwi\ngrapes\npear\npeach\norange\nlemon"];
console.log(fruits);
var fruits1 = new Array();
fruits1 = fruits.split("/");
document.write(fruits1.join("<br>"));



//document.write(fruits.split("\n").join("<br />"));