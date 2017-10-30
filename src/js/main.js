// console.log("gulp bootstrap starter");
$('.page-scroll').on('click', function(e) {
	var target = $(this).attr('href');

	// $('body').scrollTop(target.offset().top);
	$('html, body').animate({
		scrollTop: $(target).offset().top - 65
	}, 800);

	e.preventDefault();

});


function openNav() {
	$("#menu-resv").animate({height: "100%"});
}

function closeNav() {
	$("#menu-resv").animate({height: "0"});
}


$(document).on("scroll", function() {

	if($(document).scrollTop()>50) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}

});
