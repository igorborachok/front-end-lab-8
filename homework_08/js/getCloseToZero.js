function getCloseToZero () {
	var min = arguments[0];
	for (var i = 0; i < arguments.length; i++){
		if (Math.abs(arguments[i]) < Math.abs(min))
			min= arguments[i];
	}
	return min;

}