function getmin () {
	var min = arguments[0];
	for (var i = 0; i < arguments.length; i++){
		if (arguments[i] < min)
			min= arguments[i];
	}
	return min;

}