

(function( $ ){
$('.load-page').click(function(e){
	var whatPage = $(this).data('page');
	var page = 'ajax/' + $(this).data('page') + '.html';
	var topMargin = $(this).data('height');


	$('#loaded-page-content').load(page + " #page-container");
	$('#loaded-page-content').parent().css({ top : topMargin + 'px' });
	

	if(! $('.page-wrap').hasClass('open')){
		$( ".page-wrap" ).addClass( 'open' );
	}
	
	if( whatPage == 'quick-facts'){
		$('.arrows').css({ 'margin-top' : '380px' });
	}

	else{
		$('.arrows').css({ 'margin-top' : '280px' });
	}

	e.preventDefault();
});


$( ".close-pages" ).on( "click", function() {
  $( ".page-wrap" ).removeClass( 'open' );
});



$( "#menu-toggle" ).on( "click", function() {
  $( "nav" ).toggleClass( 'open' );
});




})( jQuery );

