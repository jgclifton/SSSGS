function stickyHeader() {
	var headerheight = $('.sticky-header').height();
	$('.grad-panel').css("padding-top", headerheight);
}

$(document).ready(function () {
	stickyHeader();

});

$(window).resize(function () {
	stickyHeader();
});