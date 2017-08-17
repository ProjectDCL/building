// Yak settings. 

$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Man parallax. 

(function($){
	$.fn.plaxmove = function(options) {

		this.defaults = {
			ratioH: 0.2,
			ratioV: 0.2,
			invertH: false,
			invertV: false,
			reversed: false
		}
		
		var settings = $.extend({},this.defaults,options),
			layer = $(this),
			center = {
				x: $('.first__slide').width()/2-layer.width()/2,
				y: $('.first__slide').height()/2-layer.height()/2
			},
			y0 = layer.offset().top,
			x0 = layer.offset().left;
			
		if(settings.reversed) {

			if(settings.invertH)
				var eqH = function(e) {
					return x0-(e.pageY - center.y)*settings.ratioH
				}
			
			else 
				var eqH = function(e) {
					return x0+(e.pageY - center.y)*settings.ratioH
				}
			
			if(settings.invertV)
				var eqW = function(e) {
					return y0-(e.pageX - center.x)*settings.ratioV
				}
			else
				var eqW = function(e) {
					return y0+(e.pageX - center.x)*settings.ratioV
				}

		}
		
		else {

			if(settings.invertH)
				var eqH = function(e) {
					return x0-(e.pageX - center.x)*settings.ratioH
				}
			
			else 
				var eqH = function(e) {
					return x0+(e.pageX - center.x)*settings.ratioH
				}
			
			if(settings.invertV)
				var eqW = function(e) {
					return y0-(e.pageY - center.y)*settings.ratioV
				}
			else
				var eqW = function(e) {
					return y0+(e.pageY - center.y)*settings.ratioV
				}		

		}

		$('.first__slide').on('mousemove', function(e) {

				x = eqH(e)
				y = eqW(e)

				$(layer).css({top:y,left:x})

		})

	};
})(jQuery);

// Man settings. 

$(function(){
 $('.first__man').plaxmove({ratioH:0.01,ratioV:0})
});