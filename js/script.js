

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll < 300) {
		$("#section2").fadeOut();
		$("#section1").fadeIn();			

		
    } else if (scroll >= 300 && scroll < 1000) {
		
		$("#section1").fadeOut();
		$("#section2").fadeIn();

	} else {

	}
    });