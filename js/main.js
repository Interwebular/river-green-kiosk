(function( $ ){

	$('.load-page').click(function(e){
		var page = 'ajax/' + $(this).data('page') + '.html';
		$('#loaded-page-content').load(page + " #page-container");
		e.preventDefault();
	});
	
	
	
	var current_frame;
	var animation;
	
	function zoom_in() {
	
		var zoom_parent = $('#zoom-parent'),
			images = zoom_parent.children('img'),
			frame_rate = 1000; //milliseconds - 24 frame / sec = 41 | 30 frame / sec = 33
		
		
		if( ! zoom_parent.hasClass('zoomed_in') ) {
			
			images.each(function(i) {
			
				var current = $(this);
				
				animation = setTimeout(function() {
				
					$('.animation-image').not(current).hide();
					current.show();
					console.log(i);
					current_frame = i;
					
				}, i * frame_rate); 
				
			});
			
			zoom_parent.addClass('zoomed_in');
		}
	}
	
	
	
	
	
	function zoom_out() {
		var zoom_parent = $('#zoom-parent'),
			total_images = zoom_parent.children('img').length,
			images = zoom_parent.children('img'),
			current_image,
			current_frame,
			direction,
			frame_rate = 1000; //milliseconds - 24 frame / sec = 41 | 30 frame / sec = 33
			
			
			
		if( zoom_parent.hasClass ) {
		
			clearTimeout(animation);
			
		}
	
	}
	
	
	
	$('#zoom_in').click(function(e){
		zoom_in();
		e.preventDefault();
	});
	
	
	$('#zoom_out').click(function(e){
		zoom_out();
		e.preventDefault();
	});	
	
	
})( jQuery );