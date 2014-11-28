

(function( $ ){
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

	else{
		$('.arrows').css({ 'margin-top' : '280px' });
	}

	e.preventDefault();
});


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






$( ".close-pages.left" ).on( "click", function() {
  $( ".page-wrap-left" ).removeClass( 'open' );
});

$( ".close-pages.right" ).on( "click", function() {
  $( ".page-wrap-right" ).removeClass( 'open' );
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



})( jQuery );

