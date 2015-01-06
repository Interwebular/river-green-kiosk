(function( $ ){

    var clouds = $('.cloud');

    var max_width = 1600;
    var min_width = 500;

    var generateClouds = function() {

        clouds.each(function( index ){
            var $this = $(this);
            var start = index + 1;
            $.doTimeout(5000 * start, function(){
                var random_width = Math.floor( Math.random() * ( max_width - min_width +1) + min_width );
                var left_offset = random_width;
                $this.css({
                    'width' : random_width+'px',
                    'left' : -left_offset+'px'
                });
                $this.show();
                console.log(index);
                animateCloud( $this , random_width);
            });
        });
    }


    var animateCloud = function( selector , duration ) {

        var s = selector;
        var d = duration;
        var speed_multiplier;

        if( d <= 899 ) {
            speed_multiplier = 80;
            s.addClass('slowest_speed');
        }
        else if ( d >= 900 && d <= 1299 ) {
            speed_multiplier = 55;
            s.addClass('medium_speed');
        }
        else{
            speed_multiplier = 40;
            s.addClass('fastest_speed');
        }

        s.animate({
            left: 3840
        }, {
            duration: d * speed_multiplier,
            complete: function() {
                resetCloud( s , d );
                animateCloud( s , d );
            }
        });
    }

    var resetCloud = function( selector , left_offset ){
        var random_width = Math.floor( Math.random() * ( max_width - min_width +1) + min_width );
        var left_offset = random_width;
        selector.css({
            'width' : random_width+'px',
            'left' : -left_offset+'px'
        });
        selector.removeClass('slowest_speed');
        selector.removeClass('medium_speed');
        selector.removeClass('fastest_speed');
    }

    $(function(){
        generateClouds();
    });

    $('.clouds_in').click(function(){
        clouds.stop();
        clouds.fadeOut();

    });


    $('.clouds_out').click(function(){
        generateClouds();
    });


})( jQuery );

