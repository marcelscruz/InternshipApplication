$(document).ready(function () {

	// disables scrolling
	$('body').on('scroll touchmove mousewheel', function (e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	})
	
});


function scrollUp() {
	window.scrollBy(0, -1000);
};


function scrollDown() {
	window.scrollBy(0, 1000);
};


function addClassSection (idInput1, idInput2, classInput) {
	
	var idInput1 = "#" + idInput1;
	var idInput2 = "#" + idInput2;
	
	if (!$(idInput1).hasClass(classInput)) {
		$(idInput1).fadeOut().addClass(classInput);
	} else if (!$(idInput2).hasClass(classInput)) {
		$(idInput2).fadeOut().addClass(classInput);
	}
}


function rmvClassSection (idInput, classInput) {
	
	var idInput = "#" + idInput;
	
	if ($(idInput).hasClass(classInput)) {
		$(idInput).removeClass(classInput).fadeIn();
	}
}


function addClassBtn (idInput, classInput) {
	
	var idInput = "#" + idInput;
	
	if (!$(idInput).hasClass(classInput)) {
		$(idInput).addClass(classInput);
	} 	
}


function rmvClassBtn (idInput, classInput) {
	
	var idInput = "#" + idInput;
	
	if ($(idInput).hasClass(classInput)) {
		$(idInput).removeClass(classInput);
	}
}


$(window).scroll(function () {

	var scroll = $(window).scrollTop();
	
	if (scroll < 1000) {

		// SECTION 1
		
		addClassSection("section2", null, "hidden");
		rmvClassSection("section1", "hidden");
		
		addClassBtn("buttonUp", "buttonPressed");
		
	} else if (scroll >= 1000 && scroll < 2000) {

		// SECTION 2
		
		addClassSection("section1", "section3", "hidden");
		rmvClassSection("section2", "hidden");
		
		rmvClassBtn("buttonUp", "buttonPressed");
		
	} else if (scroll >= 2000 && scroll < 3000) {

		// SECTION 3
		
		addClassSection("section2", "section4", "hidden");
		rmvClassSection("section3", "hidden");

	} else if (scroll >= 3000 && scroll < 4000) {

		// SECTION 4
		
		addClassSection("section3", "section5", "hidden");
		rmvClassSection("section4", "hidden");
		
		rmvClassBtn("buttonDown", "buttonPressed");
	
		
	} else if (scroll >= 4000 && scroll < 5000) {

		// SECTION 5
		
		addClassSection("section4", null, "hidden");
		rmvClassSection("section5", "hidden");
		
		addClassBtn("buttonDown", "buttonPressed");

	} else {}

});