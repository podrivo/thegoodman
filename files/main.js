/*! The Good Man */
$(document).ready(function() {

	/* toggle fullscreen */
	$('.fs').toggle($(document).fullScreen() != null).click(function() {$(document).toggleFullScreen()});

	/* play */
	var audio = $('audio')[0];
	var animation = $('article');
	$('.play p').click(function() {
		$('h1').addClass('hide');
		$('.play, nav').fadeOut(900);
		$('aside').fadeIn().addClass('sup').css('display','table');
	});
	$('.go').click(function() {
		audio.play();
		animation.css('display','block');
		$('aside').removeClass('sup').addClass('hide').fadeOut(900);
		$('body').addClass('bg').addClass('cursor');;
		$('footer').fadeIn('fast');
		
		/* remove cursor in fullscreen */
		if ($('body').is('.full')){$(this).addClass('cursor');};

		/* vanish */
		if ($('body').is('.nosub')){$('footer').remove();};
		setTimeout(function(){$('header, nav, h2, h3, .enemys').remove();},9500);
		setTimeout(function(){$('.good').remove();},13200);
		setTimeout(function(){$('.plus em, .plus b').remove();},20000);
		setTimeout(function(){$('.plus').remove();},22500);
		setTimeout(function(){$('.fire').remove();},27000);
		setTimeout(function(){$('.flames').remove();},30000);
		setTimeout(function(){$('.smash').remove();},37800);
		setTimeout(function(){$('.claw').remove();},47000);
		
		setTimeout(function(){$('footer').remove();},126000);
		setTimeout(function(){$('body').removeClass('cursor');},126000);
	});

	
	/* toggle fullscreen class */
	$('.fs').click(function(){$('body').toggleClass('full');});

	/* toggle sub */
	$('.st em, .fs em').click(function() {$(this).toggleClass('on');});
	$('.st em').click(function() {$('body').toggleClass('sub').toggleClass('nosub');});

	/* random enemys */
	$('.enemys').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});

	/* fight the fire */
	$('.fight').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});
});

$(window).load(function() {
	$('.play p').fadeIn(1200);
	$('.play span').fadeOut(700);
});
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);