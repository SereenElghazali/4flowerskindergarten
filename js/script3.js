/**
 * Created by sa on 09/26/2017.
 */
$(document).ready(function () {



// main tab slider

    var owl3 = $("#owl-demo3");

    owl3.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

// Custom Navigation Events

    $(".tab-content3 .next2").click(function () {
        owl3.trigger('owl.next');
    });
    $(".tab-content3 .prev2").click(function () {
        owl3.trigger('owl.prev');
    });
    $(".tab-content3 .play2").click(function () {
        owl3.trigger('owl.play', 3000); //owl.play event accept autoPlay speed as second parameter
    });
    $(".tab-content3 .stop2").click(function () {
        owl3.trigger('owl.stop');
    });


//singl page

    var owl5 = $("#owl-demo5");

    owl5.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

// Custom Navigation Events

    $(".slider-img .next5").click(function () {
        owl5.trigger('owl.next');
    });
    $(".slider-img .prev5").click(function () {
        owl5.trigger('owl.prev');
    });
    $(".slider-img .play5").click(function () {
        owl5.trigger('owl.play', 3000); //owl.play event accept autoPlay speed as second parameter
    });
    $(".slider-img .stop5").click(function () {
        owl5.trigger('owl.stop');
    });


//tab content

    $('.tab_content').hide();//hide all tab content
    $('ul.tabs li:first').addClass("active").show();//activate first tab
    $('.tab_content:first').show();//show first tab content


//on click event

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");//remove any active class
        $(this).addClass("active");// add active class to selected tab
        $(".tab_content").hide()//hide all tab content

        var activeTab = $(this).find("a").attr("href");//find the href attribute value to identify the active tab &content
        $(activeTab).fadeIn();//fade in the active ID content

        return false;


    });

//zoom

    $('.imgBox').imgZoom();

//zoom


});