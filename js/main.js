<<<<<<< HEAD
$( "#menu-toggle" ).on( "click", function() {
  $( "nav" ).toggleClass( 'open' );
  appendClass();
});
=======

(function( $ ){
	$('.load-page').click(function(e){
		var page = 'ajax/' + $(this).data('page') + '.html';
		$('#loaded-page-content').load(page + " #page-container");
		e.preventDefault();
	});
})( jQuery );
>>>>>>> 92650a319917107d83b54f408a5569a950e24352
