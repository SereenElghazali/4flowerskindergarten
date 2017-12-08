/**
 * Created by sa on 09/26/2017.
 */
$(document).ready(function () {


//caching the main element

    var scrollButton=$("#scroll-top");

    //on window scrolling

    $(window).scroll(function () {
        if($(this).scrollTop()>=500) {
            scrollButton.show();
        }
        else {
            scrollButton.hide();
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({scrollTop:0},600)
    });


//cart-wishlist

    $('.mleft1').hover(function () {
        $(this).find('.quik-view').show();


    }, function () {
        $(this).find('.quik-view').hide();

    });

//cart-wishlist


//shop page toogle

    $('.panel-sidebar-toggle').on('click', function () {
        var $this = $(this),
            $parents = $this.parents('.panel-sidebar'),
            $target = $parents.find('.panle-sidebar-inner');
        $parents.toggleClass('is-toggle');

        if ($target.is(':visible')) {
            $target.slideUp(400);
        } else {
            $target.slideDown(400);
        }
    });


//shop page toogle


//counter

    $('.counter').counterUp({

        delay: 10, // the delay time in ms

        time: 1000 // the speed time in ms

    });




});
//counter
