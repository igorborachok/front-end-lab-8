	function reverseNumber (n) {
  	var x = n.toString().split("").reverse().join("");
        x = parseInt(x)*Math.sign(n);
        return x;
	}