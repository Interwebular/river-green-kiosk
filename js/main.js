
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




	$( "#hotspots-out .hotspot-dot" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );	
	});

	$( "#zi-hotspot-1" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-1" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-2" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-2" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-3" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-3" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-4" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-4" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-5" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-5" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-6" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-6" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-7" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-7" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-8" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-8" ).toggleClass( 'on' );
	});

	$( "#zi-hotspot-9" ).on( "click", function() {
	  $( this ).toggleClass( 'on' );
	  $( "#hotspot-popup-9" ).toggleClass( 'on' );
	});

	$( ".close" ).on( "click", function() {
	  alert("just close me and turn off my hotspot");
	});


	$( "#zoom_out" ).on( "click", function() {
	  $( this ).addClass( 'on' );
	  $( "#zoom_in" ).removeClass( 'on' );
	});

	$( "#zoom_in" ).on( "click", function() {
	  $( "#zoom_in" ).addClass( 'on' );
	  $( "#zoom_out" ).removeClass( 'on' );
	});



})( jQuery );

