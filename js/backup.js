(function( $ ){
<<<<<<< HEAD
$('#left-nav-wrap .load-page').click(function(e){
	var whatPage = $(this).data('page');
	var page = 'ajax/' + $(this).data('page') + '.html';
	var topMargin = $(this).data('height');


	$('#loaded-page-content-left').load(page + " #page-container");
	$('#loaded-page-content-left').parent().css({ top : topMargin + 'px' });
	

	if(! $('.page-wrap-left').hasClass('open')){
		$( ".page-wrap-left" ).addClass( 'open' );
	}
	
	if( whatPage == 'quick-facts'){
		$('.arrows').css({ 'margin-top' : '380px' });
	}
=======
>>>>>>> 7080131e47b102a0d215f013216817826bcd78da

	$('.load-page').click(function(e){
		var whatPage = $(this).data('page');
		var page = 'ajax/' + $(this).data('page') + '.html';
		var topMargin = $(this).data('height');


		$('#loaded-page-content').load(page + " #page-container");
		$('#loaded-page-content').parent().css({ top : topMargin + 'px' });
		

<<<<<<< HEAD
$('#right-nav-wrap .load-page').click(function(e){
	var whatPage = $(this).data('page');
	var page = 'ajax/' + $(this).data('page') + '.html';
	var topMargin = $(this).data('height');


	$('#loaded-page-content-right').load(page + " #page-container");
	$('#loaded-page-content-right').parent().css({ top : topMargin + 'px' });
	

	if(! $('.page-wrap-right').hasClass('open')){
		$( ".page-wrap-right" ).addClass( 'open' );
	}
	
	if( whatPage == 'quick-facts'){
		$('.page-wrap-right .arrows').css({ 'margin-top' : '380px' });
	}

	else{
		$('.page-wrap-right .arrows').css({ 'margin-top' : '280px' });
	}

	e.preventDefault();
});
=======
		if(! $('.page-wrap').hasClass('open')){
			$( ".page-wrap" ).addClass( 'open' );
		}
		
		if( whatPage == 'quick-facts'){
			$('.arrows').css({ 'margin-top' : '380px' });
		}
>>>>>>> 7080131e47b102a0d215f013216817826bcd78da

		else{
			$('.arrows').css({ 'margin-top' : '280px' });
		}

		e.preventDefault();
	});

<<<<<<< HEAD



$( ".close-pages.left" ).on( "click", function() {
  $( ".page-wrap-left" ).removeClass( 'open' );
});

$( ".close-pages.right" ).on( "click", function() {
  $( ".page-wrap-right" ).removeClass( 'open' );
});
=======
>>>>>>> 7080131e47b102a0d215f013216817826bcd78da

	$( ".close-pages" ).on( "click", function() {
		$( ".page-wrap" ).removeClass( 'open' );
	});

$( "#menu-toggle-left" ).on( "click", function() {
  $( ".nav-left" ).toggleClass( 'open' );
});

$( "#menu-toggle-right" ).on( "click", function() {
  $( ".nav-right" ).toggleClass( 'open' );
});

$( ".hotspot-dot" ).on( "click", function() {
  $( this ).toggleClass( 'on' );	
  $( ".hotspot-popup" ).toggleClass( 'on' );
});



	$( "#menu-toggle" ).on( "click", function() {
		$( "nav" ).toggleClass( 'open' );
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
