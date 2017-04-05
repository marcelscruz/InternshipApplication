$(document).ready(function () {

	// DISABLES SCROLLING
	$('body').on('scroll touchmove mousewheel', function (e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	})

	window.scrollBy(0, -1000);

});

// BUTTON UP
function scrollUp() {
	window.scrollBy(0, -1000);
};

// BUTTON DOWN
function scrollDown() {
	window.scrollBy(0, 1000);
};


// HIDES CURRENT SECTION
function hideSection(idInput1, idInput2, classInput) {

	var idInput1 = "#" + idInput1;
	var idInput2 = "#" + idInput2;

	if (!$(idInput1).hasClass(classInput)) {
		$(idInput1).fadeOut(function () {
			$(idInput1).addClass(classInput);
		});
	} else if (!$(idInput2).hasClass(classInput)) {
		$(idInput2).fadeOut(function () {
			$(idInput2).addClass(classInput);
		});
	}
}

// SHOWS CURRENT SECTION
function showSection(idInput, classInput) {

	var idInput = "#" + idInput;

	if ($(idInput).hasClass(classInput)) {
		$(idInput).removeClass(classInput).fadeIn();
	}
}

// DISABLES BUTTON
function disableButton(idInput, classInput) {

	var idInput = "#" + idInput;

	$(idInput).addClass(classInput);
}

// ENABLES BUTTON
function enableButton(idInput, classInput) {

	var idInput = "#" + idInput;

	$(idInput).removeClass(classInput);
}

// DISABLES CHART
function hideChart(idInput, classInput) {

	var idInput = "#" + idInput;

	if (!$(idInput).hasClass(classInput)) {
		$(idInput).addClass(classInput);
	}
}

// ENABLES CHART
function showChart(idInput, classInput) {

	var idInput = "#" + idInput;

	setTimeout(function () {
		$(idInput).removeClass(classInput);
	}, 1000);

}


$(window).scroll(function () {

	var scroll = $(window).scrollTop();

	if (scroll < 1000) {

		// SECTION 1

		hideSection("section2", null, "hidden");
		showSection("section1", "hidden");

		disableButton("buttonUp", "buttonPressed");

		hideChart("pieChart", "hidden");

	} else if (scroll >= 500 && scroll < 1500) {

		// SECTION 2

		hideSection("section1", "section3", "hidden");
		showSection("section2", "hidden");

		enableButton("buttonUp", "buttonPressed");

		showChart("pieChart", "hidden");

	} else if (scroll >= 1500 && scroll < 2500) {

		// SECTION 3

		hideSection("section2", "section4", "hidden");
		showSection("section3", "hidden");

		hideChart("pieChart", "hidden");

	} else if (scroll >= 2500 && scroll < 3500) {

		// SECTION 4

		hideSection("section3", "section5", "hidden");
		showSection("section4", "hidden");

		enableButton("buttonDown", "buttonPressed");


	} else if (scroll >= 3500 && scroll < 4500) {

		// SECTION 5

		hideSection("section4", null, "hidden");
		showSection("section5", "hidden");

		disableButton("buttonDown", "buttonPressed");

	} else {}

});
