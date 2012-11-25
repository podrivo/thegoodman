/*
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