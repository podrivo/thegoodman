/*! the good man */

window.jQuery || document.write('<script src="files/jquery.1.8.2.min.js"><\/script>')

$(document).ready(function() {
	$('.enemys').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});
});