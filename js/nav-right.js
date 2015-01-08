(function( $ ){

	var container_right = $('#page-content-container-right');
	var container_animation_right = $('#page-content-right-animation');

	$( '.load-page-right' ).click(function( event ){

		var $this = $(this);
		var page = $this.data('page');
		var height = $this.data('height');
		var arrow_height = $this.data('arrow');
		var margin = $this.data('margin');
		var container_open = $('.is_open_right');

		if( container_right.hasClass('is_open_right') ) {

			container_open.css( 'top' , height );
			$('#right-arrow img').css( 'top' , arrow_height );


			/**** ANIMATE views menu */

			if ( page === 'the-views' ) {
				$('.panorama_menu_bg_right').fadeIn(100);
				$('.panorama_menu_items_right').fadeIn(100);
			}
			else {
				$('.panorama_menu_bg_right').fadeOut(100);
				$('.panorama_menu_items_right').fadeOut(100);
			}


			/***/


			container_animation_right.animate({
				marginTop:  -margin
			}, {
				duration: 200,
				specialEasing: {
					width: "swing"
				},
				complete: function() {

				}
			});

		}
		else {

			container_right.css( 'top' , height );
			$('#right-arrow img').css( 'top' , arrow_height );
			container_right.animate({
				width: 1140
			}, {
				duration: 500,
				specialEasing: {
					width: "swing"
				},
				complete: function() {
					container_right.addClass('is_open_right');
					$('.page-content-right').fadeIn();
					$('#right-arrow img').show();
					$('#right-arrow img').animate({
						left: 0
					}, {
						duration: 500,
						specialEasing: {
							width: "swing"
						},
						complete: function() {}
					});


					/**** ANIMATE views menu */

					if ( page === 'the-views' ) {
						$('.panorama_menu_bg_right').fadeIn(100);
						$('.panorama_menu_items_right').fadeIn(100);
					}


					/***/

				}
			});


			container_animation_right.css('margin-top' , -margin);
		}

		event.preventDefault();
	});




	$( "#menu-toggle-right" ).click(function( event ){

		var $this = $(this);


		if( container_right.hasClass('is_open_right') ) {
			$('.page-content-right').fadeOut();
			$('.panorama_menu_bg_right').fadeOut();
			$('.panorama_menu_items_right').fadeOut();
			$('#right-arrow img').animate({
				left: -30
			}, {
				duration: 500,
				specialEasing: {
					width: "swing"
				},
				complete: function() {
					$('#right-arrow img').hide();
					container_right.animate({
						width: 0
					}, {
						duration: 500,
						specialEasing: {
							width: "swing"
						},
						complete: function() {
							$( ".nav-right" ).removeClass( 'open' );
							container_right.removeClass('is_open_right');
							$this.removeClass( 'opened' );
						}
					});
				}
			});
		} else {

			if( $( ".nav-right" ).hasClass( 'open' ) ) {
				$( ".nav-right" ).removeClass( 'open' );
			}
			else {
				$( ".nav-right" ).addClass( 'open' );
			}


			if( $this.hasClass( 'opened' ) ) {
				$this.removeClass( 'opened' );
			}
			else {
				$this.addClass( 'opened' );
			}


		}

	});


	$('.switch-floor-right').click(function(e){

		var $this = $(this);
		var floor_number = $this.data('floor');
		var new_floor = 'img/Floor_'+floor_number+'_web.jpg';
		var current_floor = $('.advancedpanorama_right').attr('src');

		if (new_floor != current_floor) {

			$('.switch-floor-right').removeClass('switch-floor-right-active');
			$this.addClass('switch-floor-right-active');

			$('.advancedpanorama_right').fadeOut(200 , function(){
				$('.advancedpanorama_right').attr('src' , new_floor).fadeIn(200);
			});

		}
		e.preventDefault();
	});

	$(function(){
		$("img.advancedpanorama_right").panorama({
			auto_start: 0,
			start_position: 0
		});


		$('.amenities-carousel-images-right').slick({
			asNavFor: '.amenities-carousel-content-right'
		});

		$('.amenities-carousel-content-right').slick({
			arrows: false,
			asNavFor: '.amenities-carousel-images-right',
			variableWidth: true
		});


		$('.suites-carousel-images-right').slick({
			asNavFor: '.suites-carousel-content-right'
		});

		$('.suites-carousel-content-right').slick({
			arrows: false,
			asNavFor: '.suites-carousel-images-right',
			variableWidth: true
		});

		$('.community-carousel-images-right').slick({
			asNavFor: '.community-carousel-content-right'
		});

		$('.community-carousel-content-right').slick({
			arrows: false,
			asNavFor: '.community-carousel-images-right',
			variableWidth: true
		});
		$('.facts-carousel-images-right').slick({
			asNavFor: '.facts-carousel-content-right'
		});

		$('.facts-carousel-content-right').slick({
			arrows: false,
			asNavFor: '.facts-carousel-images-right',
			variableWidth: true
		});

	});

	$('.close-right-menu-button').click( function(e ){
		$('.page-content-right').fadeOut();
		$('.panorama_menu_bg_right').fadeOut();
		$('.panorama_menu_items_right').fadeOut();
		$('#right-arrow img').animate({
			left: -30
		}, {
			duration: 500,
			specialEasing: {
				width: "swing"
			},
			complete: function() {
				$('#right-arrow img').hide();
				container_right.animate({
					width: 0
				}, {
					duration: 500,
					specialEasing: {
						width: "swing"
					},
					complete: function() {
						container_right.removeClass('is_open_right');
					}
				});
			}
		});
	});

})( jQuery );