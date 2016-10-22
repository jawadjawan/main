(function(window) {
	var Hellogreeter = {};
	Hellogreeter.speakWord = "Hello";
	Hellogreeter.speak = function (names) {
	  console.log(Hellogreeter.speakWord + " " + names);
	}

	window.Hellogreeter = Hellogreeter;

})(window);