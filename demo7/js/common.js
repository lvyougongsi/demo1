$(function() {
    $(".s_btn").click(function() {
        $(".searhbox").slideToggle();
    })
})
$(function() {
    $(".menu").click(function() {
        $("#navbg").fadeIn(300);
        $('.mob_nav').animate({
            right: '0px'
        }, "fast");
    })
    $(".mob_list li i").click(function() {
        $(this).next('.ul_ejnav').slideToggle();
        $(this).parent().siblings().children('ul_ejnav').slideUp();
        if ($(this).next('.ul_ejnav').length > 0) {
            $(this).toggleClass("icon");
        }
        $(this).parent().siblings().children('i').removeClass("icon");
    })
    $(".colsebtn").click(function() {
        $("#navbg").hide();
        $('.mob_nav').animate({
            right: '-85%'
        }, "fast");
    })
});
$(function() {
    var windowWidth = $(window).width();
    $(".meun dd i").click(function() {
        $(this).parent(".meun dd").find('ul').slideToggle();
        $(this).parent(".meun dd").siblings().children('ul').slideUp();
        if ($(this).next('ul').length > 0) {
            $(this).toggleClass("icon");
        }
        $(this).parent().siblings().children('i').removeClass("icon");
    })
    $(".meun02 dd").click(function() {
        $(this).toggleClass("on")
        $(this).siblings().removeClass("on");
    })
});
