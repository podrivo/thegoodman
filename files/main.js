/*! The Good Man */

/*! jquery.fullscreen 1.1.0 / https://github.com/kayahr/jquery-fullscreen-plugin */
function d(b){var c,a;if(!this.length)return this;c=this[0];c instanceof Document?(a=c,c=a.documentElement):a=c.ownerDocument;if(null==b){if(!a.cancelFullScreen&&!a.webkitCancelFullScreen&&!a.mozCancelFullScreen)return null;b=!!a.fullScreen||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!b?b:a.fullScreenElement||a.webkitCurrentFullScreenElement||a.mozFullScreenElement||b}b?(b=c.requestFullScreen||c.webkitRequestFullScreen||c.mozRequestFullScreen)&&b.call(c):(b=a.cancelFullScreen||a.webkitCancelFullScreen||
a.mozCancelFullScreen)&&b.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");document.addEventListener(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))},!0);
document.addEventListener(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))},!0);

/*! jQuery Reveal Plugin 1.0 / https://github.com/zurb/reveal/ */
(function(a){a("a[data-reveal-id]").live("click",function(c){c.preventDefault();var b=a(this).attr("data-reveal-id");a("#"+b).reveal(a(this).data())});a.fn.reveal=function(b){var c={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal"};var b=a.extend({},c,b);return this.each(function(){var l=a(this),g=parseInt(l.css("top")),i=l.height()+g,h=false,e=a(".reveal-modal-bg");if(e.length==0){e=a('<div class="reveal-modal-bg" />').insertAfter(l);e.fadeTo("fast",0.8)}function k(){e.unbind("click.modalEvent");a("."+b.dismissModalClass).unbind("click.modalEvent");if(!h){m();if(b.animation=="fadeAndPop"){l.css({top:a(document).scrollTop()-i,opacity:0,visibility:"visible"});e.fadeIn(b.animationSpeed/2);l.delay(b.animationSpeed/2).animate({top:a(document).scrollTop()+g+"px",opacity:1},b.animationSpeed,j)}if(b.animation=="fade"){l.css({opacity:0,visibility:"visible",top:a(document).scrollTop()+g});e.fadeIn(b.animationSpeed/2);l.delay(b.animationSpeed/2).animate({opacity:1},b.animationSpeed,j)}if(b.animation=="none"){l.css({visibility:"visible",top:a(document).scrollTop()+g});e.css({display:"block"});j()}}l.unbind("reveal:open",k)}l.bind("reveal:open",k);function f(){if(!h){m();if(b.animation=="fadeAndPop"){e.delay(b.animationSpeed).fadeOut(b.animationSpeed);l.animate({top:a(document).scrollTop()-i+"px",opacity:0},b.animationSpeed/2,function(){l.css({top:g,opacity:1,visibility:"hidden"});j()})}if(b.animation=="fade"){e.delay(b.animationSpeed).fadeOut(b.animationSpeed);l.animate({opacity:0},b.animationSpeed,function(){l.css({opacity:1,visibility:"hidden",top:g});j()})}if(b.animation=="none"){l.css({visibility:"hidden",top:g});e.css({display:"none"})}}l.unbind("reveal:close",f)}l.bind("reveal:close",f);l.trigger("reveal:open");var d=a("."+b.dismissModalClass).bind("click.modalEvent",function(){l.trigger("reveal:close")});if(b.closeOnBackgroundClick){e.css({cursor:"pointer"});e.bind("click.modalEvent",function(){l.trigger("reveal:close")})}a("body").keyup(function(n){if(n.which===27){l.trigger("reveal:close")}});function j(){h=false}function m(){h=true}})}})(jQuery);

/*! hash/modal */
var hash = window.location.hash;
if (hash.substring(1) == 'about') {
	openDialog();
}

$(document).ready(function() {

	/*! toggle fullscreen */
	$('.fs').toggle($(document).fullScreen() != null).click(function() {
		$(document).toggleFullScreen()
	});

	/*! play */
	var audio = $('audio')[0];
	var animation = $('article');
	$('.play p').click(function() {
		$('h1,footer').addClass('hide');
		$('.play').fadeOut(900);
		$('.alert').fadeIn().addClass('sup');
	});
	$('.go').click(function() {
		audio.play();
		animation.css('display','block');
		$('.alert').removeClass('sup').addClass('hide');
	});

	/*! random enemys */
	$('.enemys').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});
});

$(window).load(function() {
	$('.play p').fadeIn(1200);
	$('.play span').fadeOut(700);
});