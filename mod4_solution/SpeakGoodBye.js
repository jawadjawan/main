(function () {
	var Byegreeter = {};
	Byegreeter.speakWord = "Good Bye";
	Byegreeter.speak = function (names) {
	  console.log(Byegreeter.speakWord + " " + names);
	}

	window.Byegreeter = Byegreeter;

})(window);

