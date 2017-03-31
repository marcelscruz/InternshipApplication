$(document).ready(function () {

	window.scrollBy(1000, 1000);

	$('body').on('scroll touchmove mousewheel', function (e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	})
	
	var scroll = 0;
});

//$(document).keydown(function(e){
//    switch (e.which){
//
//    case 38:    //up arrow key
//        window.scrollBy(0, -1000);
//        });
//        break;
// 
//    case 40:    //down arrow key
//        window.scrollBy(0, 1000);
//        });
//        break;
//    }
//});

function scrollUp() {
	window.scrollBy(0, -1000);
};

function scrollDown() {
	window.scrollBy(0, 1000);
};

$(window).scroll(function () {

	var scroll = $(window).scrollTop();

	if (scroll < 1000) {

		$("#section2").fadeOut();
		$("#section3").fadeOut();
		$("#section4").fadeOut();
		$("#section5").fadeOut();
		$("#buttonUp").addClass("buttonPressed");
		$("#section1").fadeIn(function () {

		});

	} else if (scroll >= 1000 && scroll < 2000) {

		$("#section2").removeClass("hidden");
		$("#section3").removeClass("hidden");
		$("#section4").removeClass("hidden");
		$("#section5").removeClass("hidden");
		$("#buttonUp").removeClass("buttonPressed");
		$("#section1").fadeOut();
		$("#section3").fadeOut();
		$("#section4").fadeOut();
		$("#section5").fadeOut();
		$("#section2").fadeIn();

	} else if (scroll >= 2000 && scroll < 3000) {

		$("#section1").fadeOut();
		$("#section2").fadeOut();
		$("#section4").fadeOut();
		$("#section5").fadeOut();
		$("#section3").fadeIn();

	} else if (scroll >= 3000 && scroll < 4000) {

		$("#buttonDown").removeClass("buttonPressed");
		$("#section1").fadeOut();
		$("#section2").fadeOut();
		$("#section3").fadeOut();
		$("#section5").fadeOut();
		$("#section4").fadeIn();

	} else if (scroll >= 4000 && scroll < 5000) {

		$("#buttonDown").addClass("buttonPressed");
		$("#section1").fadeOut();
		$("#section2").fadeOut();
		$("#section3").fadeOut();
		$("#section4").fadeOut();
		$("#section5").fadeIn();

	} else {}

});
