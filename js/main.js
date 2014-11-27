
(function( $ ){
	$('.load-page').click(function(e){
		var page = 'ajax/' + $(this).data('page') + '.html';
		$('#loaded-page-content').load(page + " #page-container");
		e.preventDefault();
	});
})( jQuery );
