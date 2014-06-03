/*! The Good Man */
$(document).ready(function() {
	var audio = $('audio')[0],
		animation = $('article'),
		body = $('body'),
		footer = $('footer'),
		fs = $('.fs');

	/* toggle fullscreen */
	fs.toggle($(document).fullScreen() != null).click(function() {$(document).toggleFullScreen()});

	/* play */
	$('.play').find('p').click(function() {
		$('h1').addClass('tchau');
		$('.play, nav, .share').fadeOut(900);
		$('aside').fadeIn().addClass('sup').css('display','table');
	});
	$('.go').click(function() {
		audio.play();
		animation.css('display','block');
		$('aside, .warn').removeClass('sup').addClass('tchau').fadeOut(900);
		body.addClass('bg').addClass('cursor');
		footer.fadeIn('fast');

		/* remove cursor in fullscreen */
		if (body.is('.full')){$(this).addClass('cursor');};

		/* vanish animation */
		setTimeout(function(){$('header, h2, h3, .enemys, .warn').remove();},9500);
		setTimeout(function(){$('.good').remove();},13200);
		setTimeout(function(){$('.plus').find('q').remove();},19000);
		setTimeout(function(){$('.plus').remove();},23500);
		setTimeout(function(){$('.fire').remove();},27000);
		setTimeout(function(){$('.flames').remove();},36000);
		setTimeout(function(){$('.fight').remove();},39000);
		setTimeout(function(){$('.smash').remove();},38000);
		setTimeout(function(){$('.claw, .proud, .citizen, .virus').remove();},60000);
		setTimeout(function(){$('.transition').remove();},60200);
		setTimeout(function(){$('.bars, .shoot').remove();},76000);
		setTimeout(function(){$('.officer').remove();},76400);
		setTimeout(function(){$('.greatman').remove();},77850);
		setTimeout(function(){$('.heart').remove();},88000);
		setTimeout(function(){$('.coming, .read').remove();},92600);
		setTimeout(function(){$('.build').remove();},95000);
		setTimeout(function(){$('.fish').remove();},98500);
		setTimeout(function(){$('.all').remove();},112000);
		setTimeout(function(){$('.am, .fly').remove();},126500);
		setTimeout(function(){$('.box').remove();},127000);
		setTimeout(function(){$('.explode').remove();},132000);

		/* vanish animation */
		if (body.is('.nosub')){footer.remove();};
		setTimeout(function(){$('footer, .progress').remove();},127500);
		setTimeout(function(){body.removeClass('cursor').removeClass('bg');},126000);
		setTimeout(function(){$('nav, .share').fadeIn(900);},130000);

		/* particles */
		var toappend = '', i = j = 0;
		for(; i < 8; i++) {
			toappend += '<div>';
			for(; j < 30; j++) {toappend += '<p><b></b></p>';}
			j = 0;
			toappend += '</div>';
		}
		setTimeout(function(){$('.wave').hide().append(toappend).fadeIn(2400);},131000);
	});

	/* toggle fullscreen class */
	fs.click(function(){body.toggleClass('full');});

	/* toggle sub */
	$('.st em, .fs em').click(function() {$(this).toggleClass('on');});
	$('.st').find('em').click(function() {body.toggleClass('sub').toggleClass('nosub');});

	/* random enemys */
	$('.enemys').find('p').each(function() {
		var that = $(this);
		that.css('top', Math.floor((Math.random())*100) + '%');
		that.css('left', Math.floor((Math.random())*100) + '%');
	});

	/* fight the fire */
	$('.fight').find('p').each(function() {
		var that = $(this);
		that.css('top', Math.floor((Math.random())*100) + '%');
		that.css('left', Math.floor((Math.random())*100) + '%');
	});

	/* virus */
	$('.virus').find('p').each(function() {
		var that = $(this);
		that.css('top', Math.floor((Math.random())*100) + '%');
		that.css('left', Math.floor((Math.random())*100) + '%');
	});
});

$(window).load(function() {
	var play = $('.play');
	play.find('p').fadeIn(1200);
	play.find('span').fadeOut(700);
});;/*
rotator.js
http://www.josephfinsterwald.com
*/

(function($) {
    $.rotate = function(s) {
        return $.rotate13($.rotate5(s));
    }

    $.rotate5 = function(s) {
        var b = [],c,i = s.length,a = '0'.charCodeAt(),z = a + 10;
        while (i--) { 
            c = s.charCodeAt(i);
            if (c >= a && c < z) { b[i] = String.fromCharCode(((c - a + 5) % (10)) + a); }
            else { b[i] = s.charAt(i); }
        }
        return b.join('');
    };

    $.rotate13 = function(s) {
        var b = [],c,i = s.length,a = 'a'.charCodeAt(),z = a + 26,A = 'A'.charCodeAt(),Z = A + 26;
        while (i--) {
            c = s.charCodeAt(i);
            if (c >= a && c < z) { b[i] = String.fromCharCode(((c - a + 13) % (26)) + a); }
            else if (c >= A && c < Z) { b[i] = String.fromCharCode(((c - A + 13) % (26)) + A); }
            else { b[i] = s.charAt(i); }
        }
        return b.join('');
    };
})(jQuery)

$(function() {$('.contact').attr('href', $.rotate('znvygb:uryyb@cbqevib.pbz?fhowrpg=Ibgr sbe Crqeb')).attr('title', $.rotate('uryyb@cbqevib.pbz'));});