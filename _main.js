if (typeof $ === "function") {
	$(document).ready(function() {
		console.log("Jquery is enabled");
	});
} else {
	document.addEventListener("DOMContentLoaded", function() {
		var a = document.querySelectorAll("input[allowedChars]")
		for(var i = 0; i < a.length; i++) {
			if (a[i].getAttribute("allowedChars")) {
				a[i].onkeypress = function(e) {
					isControlChar(e);
					var r = new RegExp(this.getAttribute("allowedChars"), "g");
					if (!e.key.match(r)) return false;
				};
				a[i].onkeyup = function(e) {
					isControlChar(e);
					var r = new RegExp(this.getAttribute("allowedChars"), "g");
					if (!e.key.match(r)) return false;
				};
				a[i].onkeydown = function(e) {
					isControlChar(e);
					var r = new RegExp(this.getAttribute("allowedChars"), "g");
					if (!e.key.match(r)) return false;
				};
				a[i].onchange = function(e) {
					isControlChar(e);
					var r = new RegExp(this.getAttribute("allowedChars"), "g");
					if (!e.key.match(r)) return false;
				};
			}
		}
	});
}

function isControlChar (e) {
	var c = {
		"arrow_left"	: 37,
		"arrow_up"		: 38,
		"arrow_down"	: 40,
		"arrow_right"	: 39,
		"f5"			: 116,
		"shift"			: 16,
		"ctrl"			: 17,
		"alt"			: 18
	};
	console.log(e.which);
}
