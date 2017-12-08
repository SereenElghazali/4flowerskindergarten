/**
 * Created by sa on 10/12/2017.
 */
$(document).ready(function() {

    $("html").niceScroll(
        {
            // cursor color
            cursorcolor: "#92278f",

            // z-index
            zindex: "30",

}
    );


    $('.menu-icon').on("click",function () {
        $(this).find('.v-menu').slideToggle();
    });


    $('.header li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Smooth Scroll To Div

    $('.header li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);



    });

    $('.ser-title').on("click",function () {
        $(this).find('.v-menu').slideToggle();
    });



    $('i.glyphicon-thumbs-up, i.glyphicon-thumbs-down').click(function(){
        var $this = $(this),
            c = $this.data('count');
        if (!c) c = 0;
        c++;
        $this.data('count',c);
        $('#'+this.id+'-bs3').html(c);
    });
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $('#itemslider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<3;i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-"+(i))
                .appendTo($(this));
        }

    });




});

