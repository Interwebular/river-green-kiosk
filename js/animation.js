(function( $ ){

   jQuery.fn.reverse = [].reverse;

   var frame_rate = 40; //milliseconds - 24 frame / sec = 41 | 30 frame / sec = 33
	
   var zoom_parent = $('#zoom-parent');
   var total_images = zoom_parent.children('img').length;
   var images_in = zoom_parent.children('img');
   var images_out = zoom_parent.children('img').reverse();
   var animation_in;
   var animation_out;
   var current_frame = 0;
	
   function zoom_in( callback ) {

	  if( ! zoom_parent.hasClass('zoomed_in') ) {
		 images_in.each(function(i) {
			var current = $(this);
			animation_in = setTimeout(function() {
			   $('.animation-image').hide();
			   current.show();
			   current_frame = i;
			   console.log( current_frame );
			   
			   if (i == total_images - 1 ) {
				 if( callback ) { callback(); } 
			   }
			}, i * frame_rate); 
		 });
		 zoom_parent.addClass('zoomed_in');
	  }
   }
	

	function zoom_out( callback ) {
	
		if( zoom_parent.hasClass('zoomed_in') ) {
			images_out.each(function(i) {
				var current = $(this);
				animation_out = setTimeout(function() {
					$('.animation-image').hide();
					current.show();
					current_frame = i;
					console.log( current_frame );
					
					 if (i == total_images - 1 ) {
					   if( callback ) { callback(); } 
					 }
				}, i * frame_rate); 
			});
			zoom_parent.removeClass('zoomed_in');
		}
		
	}
	

	
   $('#zoom_in').click(function(e){
	  
	  $("#hotspots-out").hide();
	  
	  zoom_in(function(){
		 $("#hotspots-in").show();
	  });
	  e.preventDefault();
   });
	
	
   $('#zoom_out').click(function(e){
	  
	  $("#hotspots-in").hide();
	  
	  zoom_out(function(){
		 $("#hotspots-out").show();	 
	  });
	  e.preventDefault();
   });	

})( jQuery );