/**
 * Created by sa on 09/24/2017.
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



    /* vertical menu click*/
    $('.menu-icon').on("click",function () {
        $(this).find('.v-menu').slideToggle();
    });



    //header section

    //header search icon


    $('.search').hover(function () {
        $(this).find('span').css("background-color","#FD6363")


    },function () {
        $(this).find('span').css("background-color","#537f30")

    });


    //header search icon

    $('.menu-right').hover(function () {
        $(this).find('.change-color').css("color","#FD6363")


    },function () {
        $(this).find('.change-color').css("color","#fff");

    });
    //cart-wishlist

    //special deal hover

    $('.mleft').hover(function () {
        $(this).find('.quik-view').show();
    },function () {
        $(this).find('.quik-view').hide();

    });

    $('.mright').hover(function () {
        $(this).find('.quik-view').show();

    },function () {
        $(this).find('.quik-view').hide();

    });
    //special deal hover

    //special deal hover


    // main tab slider


    var owl3 = $("#owl-demo3");

    owl3.owlCarousel({
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,4], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".tab-content3 .next2").click(function(){
        owl3.trigger('owl.next');

    });
    $(".tab-content3 .prev2").click(function(){
        owl3.trigger('owl.prev');

    });
    $(".tab-content3 .play2").click(function(){
        owl3.trigger('owl.play',3000); //owl.play event accept autoPlay speed as second parameter

    });
    $(".tab-content3 .stop2").click(function(){
        owl3.trigger('owl.stop');

    });

    // end main tab slider

    //main tabs hover

    $('.main-tabs .item-cont').hover(function () {
        $(this).find('.quik-view').show();


    },function () {
        $(this).find('.quik-view').hide();

    });


    //tab content

    $('.tab_content').hide();//hide all tab content
    $('ul.tabs li:first').addClass("active").show();//activate first tab
    $('.tab_content:first').show();//show first tab content


    //on click event

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");//remove any active class
        $(this).addClass("active");// add active class to selected tab
        $(".tab_content").hide();//hide all tab content

        var activeTab=$(this).find("a").attr("href");//find the href attribute value to identify the active tab &content
        $(activeTab).fadeIn();//fade in the active ID content




    });

    //end tab content

    //logo brands slider

    var owl2 = $("#owl-demo2");

    owl2.owlCarousel({
        items : 5, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events

    $(".logo-brand .next1").click(function(){
        owl2.trigger('owl.next');
    });
    $(".logo-brand .prev1").click(function(){
        owl2.trigger('owl.prev');
    });
    $(".logo-brand .play1").click(function(){
        owl2.trigger('owl.play',3000); //owl.play event accept autoPlay speed as second parameter
    });
    $(".logo-brand .stop1").click(function(){
        owl2.trigger('owl.stop');
    });

    //end logo slider

    //overlay

    $('.insta').hover(function () {
        $(this).find('.overlay').show("fast");


    },function () {
        $(this).find('.overlay').hide("slow");

    });

    //end overlay



    // bottom part hover effect

    $('.b-icon').hover(function () {
        $(this).css("background-color","#fff")
    },function () {
        $(this).css("background-color","#171717")
    });




    //forget password page danger alert

    $('.continue').on("click",function () {
        $('.dispaly-no').show();

    });



});
