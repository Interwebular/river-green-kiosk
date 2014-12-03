(function( $ ){
/*
	jQuery.fn.reverse = [].reverse;
	
	
	
	var frame_rate = 40; //milliseconds - 24 frame / sec = 41 | 30 frame / sec = 33
	
	var zoom_parent = $('#zoom-parent');
	var total_images = zoom_parent.children('img').length;
	var images_in = zoom_parent.children('img');
	var images_out = zoom_parent.children('img').reverse();
	var animation_in;
	var animation_out;
	var current_frame = 0;
	
	
	
	
	
	
	function zoom_in() {

		if( ! zoom_parent.hasClass('zoomed_in') ) {
			clearTimeout(animation_out);
			images_in.each(function(i) {
				
				var current = $(this);
				animation_in = setTimeout(function() {
					$('.animation-image').hide();
					current.show();
					current_frame = i;
				}, i * frame_rate); 
			});
			zoom_parent.addClass('zoomed_in');
		}
	}
	

	function zoom_out() {
	
		if( zoom_parent.hasClass('zoomed_in') ) {
			clearTimeout(animation_in);
			images_out.each(function(i) {
				var current = $(this);
				animation_out = setTimeout(function() {
					$('.animation-image').hide();
					current.show();
					current_frame = i;
				}, i * frame_rate); 
			});
			zoom_parent.removeClass('zoomed_in');
		}
		
	}
	
	
	
	$('#zoom_in').click(function(e){
		//zoom_in();
		$(".map").jsMovie("play");
		e.preventDefault();
	});
	
	
	$('#zoom_out').click(function(e){
		zoom_out();
		e.preventDefault();
	});	
	
	*/
	
	 $('#map').jsMovie({
        sequence : "multi_touch_zoom_#####.jpg",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/zoom_animation/",       //this is the path where the script can find the image sequence
        from     : 0,               //the #### will start to replace with 0001
        to       : 40,              //the #### will start to replace with 0040
        width    : 3800,             //the advertisement container will be resized to a width of 320px
        height   : 1080,             //the advertisement container will be resized to a height of 150px
        showPreLoader : false,       //we do want to see a preloader animation
        playOnLoad : false,         //we don't want to have the movie play after the images have been loaded automatically
    });

	$('#zoom_in').click(function(e){
		//zoom_in();
		$(".map").jsMovie("play");
		e.preventDefault();
	});
	
})( jQuery );