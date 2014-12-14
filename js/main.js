
(function( $ ){

	$('#left-nav-wrap .load-page').click(function(e){
		var $this = $(this).data('page');
		var top_margin = $(this).data('height');
	
		$('.page-section').hide();
		$('#load-' + $this).show();
		
		$('#loaded-page-content-left').parent().css({ top : top_margin + 'px' });
		
		if(! $('.page-wrap-left').hasClass('open')){
			$( ".page-wrap-left" ).addClass( 'open' );
		}
		
		if( $this == 'quick-facts'){
			$('.arrows').css({ 'margin-top' : '380px' });
		}
	
		else{
			$('.arrows').css({ 'margin-top' : '280px' });
		}
		
		e.preventDefault();
		
	});






	
	$( ".close-pages.left" ).on( "click", function() {
		$( ".page-wrap-left" ).removeClass( 'open' );
	});



	$( ".close-pages.right" ).on( "click", function() {
	  $( ".page-wrap-right" ).removeClass( 'open' );
	});

	/*
	$( "#menu-toggle-left" ).on( "click", function() {
		$( ".nav-left" ).toggleClass( 'open' );
	}); */

	$( "#menu-toggle-right" ).on( "click", function() {
	  $( ".nav-right" ).toggleClass( 'open' );
	});

	$( ".hotspot-dot" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );	
	  $( ".hotspot-popup" ).toggleClass( 'on' );
	});

})( jQuery );

