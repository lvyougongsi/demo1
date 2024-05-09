$(function() {
    $(window).scroll(function() {
        var len = $(window).scrollTop();
        if (len > 100) {
            $(".header").addClass("on");
        } else {
            $(".header").removeClass("on");
        }
    });
});
$(function() {
    $('.banner ul').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        lazyLoad: 'ondemand',
    });
    $('.newspic ul').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        lazyLoad: 'ondemand',
        customPaging: function(slider, i) {
            return '<button>' + "</button>";
        },
    });
    $('.link_t i').click(function() {
        $(this).next(".second").toggle();
        $(this).parent().siblings().children('ul.second').slideUp();
    })
    $(".nd ul").eq(0).show();
    var wweya_li = $(".edution .list_e li");
    wweya_li.hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(this).parents(".list_e").siblings(".nd").children("ul").eq(index).show().siblings().hide();
    })
});
