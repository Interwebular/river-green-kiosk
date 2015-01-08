(function( $ ){

	var container_left = $('#page-content-container-left');
	var container_animation_left = $('#page-content-left-animation');

	$( '.load-page-left' ).click(function( event ){
	
		var $this = $(this);
		var page = $this.data('page');
		var height = $this.data('height');
		var arrow_height = $this.data('arrow');
		var margin = $this.data('margin');
		var container_open = $('.is_open_left');
		
		if( container_left.hasClass('is_open_left') ) {
		
			container_open.css( 'top' , height );
			$('#left-arrow img').css( 'top' , arrow_height );
			
			
			/**** ANIMATE views menu */

			if ( page === 'the-views' ) {
				$('.panorama_menu_bg_left').fadeIn(100);
				$('.panorama_menu_items_left').fadeIn(100);
			}
			else {
				$('.panorama_menu_bg_left').fadeOut(100);
				$('.panorama_menu_items_left').fadeOut(100);
			}
				
				
			/***/
			
			
			container_animation_left.animate({
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
			
			container_left.css( 'top' , height );
			$('#left-arrow img').css( 'top' , arrow_height );
			container_left.animate({
				width: 1140
			}, {
				duration: 500,
				specialEasing: {
					width: "swing"
			},
				complete: function() {
					container_left.addClass('is_open_left');
					$('.page-content-left').fadeIn();
					$('#left-arrow img').show();
					$('#left-arrow img').animate({
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
						$('.panorama_menu_bg_left').fadeIn(100);
						$('.panorama_menu_items_left').fadeIn(100);
					}
						
						
					/***/
				
				}
			});
			

			container_animation_left.css('margin-top' , -margin);
		}
		
		event.preventDefault();
	});



	$( "#menu-toggle-left" ).click(function( event ){
		
		var $this = $(this);
		
		
		if( container_left.hasClass('is_open_left') ) {
			$('.page-content-left').fadeOut();
			$('.panorama_menu_bg_left').fadeOut();
			$('.panorama_menu_items_left').fadeOut();
			$('#left-arrow img').animate({
				left: 30
			}, {
				duration: 500,
				specialEasing: {
					width: "swing"
			},
				complete: function() {
					$('#left-arrow img').hide();
					container_left.animate({
						width: 0
					}, {
						duration: 500,
						specialEasing: {
							width: "swing"
					},
						complete: function() {
							$( ".nav-left" ).removeClass( 'open' );
							container_left.removeClass('is_open_left');
							$this.removeClass( 'opened' );
						}
					});
				}
			});					
		} else {
		
			if( $( ".nav-left" ).hasClass( 'open' ) ) {
				 $( ".nav-left" ).removeClass( 'open' );
			}
			else {
				$( ".nav-left" ).addClass( 'open' );
			}
			
			
			if( $this.hasClass( 'opened' ) ) {
				 $this.removeClass( 'opened' );
			}
			else {
				$this.addClass( 'opened' );
			}	

			
		}
		
	});
	

	$('.switch-floor-left').click(function(e){
		
		var $this = $(this);
		var floor_number = $this.data('floor');
		var new_floor = 'img/Floor_'+floor_number+'_web.jpg';
		var current_floor = $('.advancedpanorama_left').attr('src');
		
		if (new_floor != current_floor) {
			
			$('.switch-floor-left').removeClass('switch-floor-left-active');
			$this.addClass('switch-floor-left-active');
			
			$('.advancedpanorama_left').fadeOut(200 , function(){
				$('.advancedpanorama_left').attr('src' , new_floor).fadeIn(200);
			});
			
		}
		e.preventDefault();
	});

	

	
	
    $(function(){
        $("img.advancedpanorama_left").panorama({
			auto_start: 0,
            start_position: 0
        });		


		$('.amenities-carousel-images-left').slick({
			asNavFor: '.amenities-carousel-content-left'
		});	
				
		$('.amenities-carousel-content-left').slick({
			arrows: false,
			asNavFor: '.amenities-carousel-images-left',
			variableWidth: true
		});

		
		$('.suites-carousel-images-left').slick({
			asNavFor: '.suites-carousel-content-left'
		});	
				
		$('.suites-carousel-content-left').slick({
			arrows: false,
			asNavFor: '.suites-carousel-images-left',
			variableWidth: true			
		});

		$('.community-carousel-images-left').slick({
			asNavFor: '.community-carousel-content-left'
		});	
				
		$('.community-carousel-content-left').slick({
			arrows: false,
			asNavFor: '.community-carousel-images-left',
			variableWidth: true			
		});
		$('.facts-carousel-images-left').slick({
			asNavFor: '.facts-carousel-content-left'
		});		
				
		$('.facts-carousel-content-left').slick({
			arrows: false,
			asNavFor: '.facts-carousel-images-left',
			variableWidth: true
		});			

    });
	


	$('.close-left-menu-button').click( function(e ){
		$('.page-content-left').fadeOut();
		$('.panorama_menu_bg_left').fadeOut();
		$('.panorama_menu_items_left').fadeOut();
		$('#left-arrow img').animate({
			left: 30
		}, {
			duration: 500,
			specialEasing: {
				width: "swing"
			},
			complete: function() {
				$('#left-arrow img').hide();
				container_left.animate({
					width: 0
				}, {
					duration: 500,
					specialEasing: {
						width: "swing"
					},
					complete: function() {
						container_left.removeClass('is_open_left');
					}
				});
			}
		});
	});


})( jQuery );