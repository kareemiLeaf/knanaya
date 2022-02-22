//Fixed Header
window.onscroll = function () {
	stickHeader();
};

var header = document.getElementById("kananaya-header");
var sticky = header.offsetTop;


$(document).ready(function () {

	$('#mobNav').on('click', function () {
		$(this).next(".hdr-main-nav").toggleClass('open');
		$(this).toggleClass('active');
	});

	stickHeader();
});

function stickHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}


function myFunction(x) {
	x.classList.toggle("change");
}


