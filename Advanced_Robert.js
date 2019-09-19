//Advanced Exercise 1//

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

c = parseInt(c);
d = parseInt(d);

var sum = a + b + c + d + e;

console.log(sum);

var f = '1';
var g = 15;
var h = 8;
var i = "1";


f = Number(f)
console.log(f)
i = parseInt(i);

var product = f * g * h * i;

console.log(product);

document.write(sum/product);

//Advanced Exercise 2//

var multi = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,25,7],[21,4,6,17],[3,5,26,3]];

//select 11, 25, 17, 27 and 0//

var a = multi[1][1];
var b = multi[4][2];
var c = multi[5][3];
var d = multi[2][3];
var e = multi[2][1];

console.log(a,b,c,d,e);
