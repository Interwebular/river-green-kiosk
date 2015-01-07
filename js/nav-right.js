
(function( $ ){

	var container_right = $('#page-content-container-right');
	var container_animation_right = $('#page-content-right-animation');

	$( '.load-page-right' ).click(function( event ){
	
		var $this = $(this);
		var page = $this.data('page');
		var height = $this.data('height');
		var arrow_height = $this.data('arrow');
		var margin = $this.data('margin');
		var container_open = $('.is_open');
		
		if( container_right.hasClass('is_open') ) {
		
			container_open.css( 'top' , height );
			$('#right-arrow img').css( 'top' , arrow_height );
			
			
			/**** ANIMATE views menu */

			if ( page === 'the-views' ) {
				$('.panorama_menu_bg').fadeIn(100);
				$('.panorama_menu_items').fadeIn(100);
			}
			else {
				$('.panorama_menu_bg').fadeOut(100);
				$('.panorama_menu_items').fadeOut(100);
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
					container_left.addClass('is_open');
					$('.page-content').fadeIn();
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
						$('.panorama_menu_bg').fadeIn(100);
						$('.panorama_menu_items').fadeIn(100);
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
		
		
		if( container_left.hasClass('is_open') ) {
			$('.page-content').fadeOut();
			$('.panorama_menu_bg').fadeOut();
			$('.panorama_menu_items').fadeOut();
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
							container_left.removeClass('is_open');
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
	

	$('.switch-floor').click(function(e){
		
		var $this = $(this);
		var floor_number = $this.data('floor');
		var new_floor = 'img/Floor_'+floor_number+'_web.jpg';
		var current_floor = $('.advancedpanorama').attr('src');
		
		if (new_floor != current_floor) {
			
			$('.switch-floor').removeClass('switch-floor-active');
			$this.addClass('switch-floor-active');
			
			$('.advancedpanorama').fadeOut(200 , function(){
				$('.advancedpanorama').attr('src' , new_floor).fadeIn(200);
			});
			
		}
		e.preventDefault();
	});

	

	
	
    $(function(){
        $("img.advancedpanorama").panorama({
			auto_start: 0,
            start_position: 0
        });		
		
		$('.amenities-carousel-images').slick({
			asNavFor: '.amenities-carousel-content'
		});	
				
		$('.amenities-carousel-content').slick({		
			arrows: false,
			asNavFor: '.amenities-carousel-images',
			variableWidth: true
		});

		
		$('.suites-carousel-images').slick({
			asNavFor: '.suites-carousel-content'
		});	
				
		$('.suites-carousel-content').slick({		
			arrows: false,
			asNavFor: '.suites-carousel-images',
			variableWidth: true			
		});

		$('.community-carousel-images').slick({
			asNavFor: '.community-carousel-content'
		});	
				
		$('.community-carousel-content').slick({		
			arrows: false,
			asNavFor: '.community-carousel-images',
			variableWidth: true			
		});
		$('.facts-carousel-images').slick({
			asNavFor: '.facts-carousel-content'
		});		
				
		$('.facts-carousel-content').slick({		
			arrows: false,
			asNavFor: '.facts-carousel-images',
			variableWidth: true
		});			

    });
	


	$('.close-left-menu-button').click( function(e ){
		$('.page-content').fadeOut();
		$('.panorama_menu_bg').fadeOut();
		$('.panorama_menu_items').fadeOut();
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
						container_left.removeClass('is_open');
					}
				});
			}
		});
	});


})( jQuery );