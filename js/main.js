
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

		if( $( "#hotspot-popup-1").hasClass('toggled_open') ) {
			$( "#hotspot-popup-1").removeClass('toggled_open')
			$( "#hotspot-popup-1" ).hide();
		}
		else {
			$( "#hotspot-popup-1").addClass('toggled_open')
			$( "#hotspot-popup-1" ).show();
		}

	});

	$( "#zi-hotspot-2" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-2").hasClass('toggled_open') ) {
			$( "#hotspot-popup-2").removeClass('toggled_open')
			$( "#hotspot-popup-2" ).hide();
		}
		else {
			$( "#hotspot-popup-2").addClass('toggled_open')
			$( "#hotspot-popup-2" ).show();
		}
	});

	$( "#zi-hotspot-3" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-3").hasClass('toggled_open') ) {
			$( "#hotspot-popup-3").removeClass('toggled_open')
			$( "#hotspot-popup-3" ).hide();
		}
		else {
			$( "#hotspot-popup-3").addClass('toggled_open')
			$( "#hotspot-popup-3" ).show();
		}
	});

	$( "#zi-hotspot-4" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-4").hasClass('toggled_open') ) {
			$( "#hotspot-popup-4").removeClass('toggled_open')
			$( "#hotspot-popup-4" ).hide();
		}
		else {
			$( "#hotspot-popup-4").addClass('toggled_open')
			$( "#hotspot-popup-4" ).show();
		}
	});

	$( "#zi-hotspot-5" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-5").hasClass('toggled_open') ) {
			$( "#hotspot-popup-5").removeClass('toggled_open')
			$( "#hotspot-popup-5" ).hide();
		}
		else {
			$( "#hotspot-popup-5").addClass('toggled_open')
			$( "#hotspot-popup-5" ).show();
		}
	});

	$( "#zi-hotspot-6" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-6").hasClass('toggled_open') ) {
			$( "#hotspot-popup-6").removeClass('toggled_open')
			$( "#hotspot-popup-6" ).hide();
		}
		else {
			$( "#hotspot-popup-6").addClass('toggled_open')
			$( "#hotspot-popup-6" ).show();
		}
	});

	$( "#zi-hotspot-7" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-7").hasClass('toggled_open') ) {
			$( "#hotspot-popup-7").removeClass('toggled_open')
			$( "#hotspot-popup-7" ).hide();
		}
		else {
			$( "#hotspot-popup-7").addClass('toggled_open')
			$( "#hotspot-popup-7" ).show();
		}
	});

	$( "#zi-hotspot-8" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-8").hasClass('toggled_open') ) {
			$( "#hotspot-popup-8").removeClass('toggled_open')
			$( "#hotspot-popup-8" ).hide();
		}
		else {
			$( "#hotspot-popup-8").addClass('toggled_open')
			$( "#hotspot-popup-8" ).show();
		}
	});

	$( "#zi-hotspot-9" ).on( "click", function() {
		$( this ).toggleClass( 'on' );

		if( $( "#hotspot-popup-9").hasClass('toggled_open') ) {
			$( "#hotspot-popup-9").removeClass('toggled_open')
			$( "#hotspot-popup-9" ).hide();
		}
		else {
			$( "#hotspot-popup-9").addClass('toggled_open')
			$( "#hotspot-popup-9" ).show();
		}
	});

	$( ".close" ).on( "click", function() {
	  	var p = $(this).closest('.hotspot-popup');
		p.hide();
		p.removeClass('toggled_open');
		var a = p.attr('id').split('-');
		var n = a[2];
		$( "#zi-hotspot-" + n).removeClass('on');
	});





	$( "#zoom_out" ).on( "click", function() {
	  	$( this ).addClass( 'on' );
	  	$( "#zoom_in" ).removeClass( 'on' );
	  	$( "#zoom_in" ).attr( 'disabled' , 'disabled' );
	});


	$( "#zoom_in" ).on( "click", function() {
	  	$( this ).addClass( 'on' );
	 	$( "#zoom_out" ).removeClass( 'on' );
		$( "#zoom_out" ).attr( 'disabled' , 'disabled' );
	});



})( jQuery );


/*

$(document).ready(function(){



	$('.right-col').resize();

	

	
}); */
