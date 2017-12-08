/**
 * Created by sa on 09/29/2017.
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

        return false;



    });

    $('#media').carousel({
        pause: true,
        interval: false,
    });




});

