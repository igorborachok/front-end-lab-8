var a = Number (prompt ("number one",));
var b = Number (prompt ("number two",));
var c = Number (prompt ("tnumber three",));

var p = (a + b + c)/2;

var s= Math.sqrt (p*(p-a)*(p-b)*(p-c));

var type;

if (a==b && b==c && c==a){
	type = "equilateral";
} else {
	if (a==b || b==c || c==a){
		type = "isosceles";
	} else {
		if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
			type = "right triangle";
		} else {
			type = "scalene";
		}
	}
}

if (a <= 0 || b <= 0 || c <= 0 || s <= 0 || isNaN(s)) {
	console.log("Incorrect data");
} else {
	console.log("Type of triangle is",type,"and square is",s.toFixed(2));
}
		


