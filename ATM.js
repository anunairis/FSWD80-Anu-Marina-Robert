
var initialX = prompt("Type a number");

var A = 1;
var B = 20;
var C = 20;
var D = 30;
var sum = A*100 + B*50 + C*20 + D*10;

console.log(sum)

if (sum < initialX) {
	document.write("Sorry, the amount you inquired is not available right now.")
}

if (A > 0) {
	var a = Math.floor(initialX/100);
		if (A-a < 0) {
				a = A;
			} 			
}

X = initialX - a*100

if (B > 0) {
	var b = Math.floor(X/50);
		if (B-b < 0) {
				b = B;
			} 			
}

X = X - b*50

if (C > 0) {
	var c = Math.floor(X/20);
		if (C-c < 0) {
				c = C;
			} 			
}

X = X - c*20

if (D > 0) {
	var d = Math.floor(X/10);
		if (D-d < 0) {
				d = D;
			} 			
}

finalX = X - d*10

if (finalX == 0) {
	document.write(initialX + "€ as: " + a + "x100€| " + b +" x50€| " + c +" x20€| " + d +" x10€" )
} 
else 
{
	document.write("We're sorry, the amount you inquired is not available right now.")
}



