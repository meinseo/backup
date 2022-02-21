$(function () {

    $('#top_banner i').on('click', function () {
        $('#top_banner').slideUp();
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on')
    });

    $('.gnb .depth01>li>a').on('click', function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
    });

    $('#main_visual figure').eq(1).addClass('on');
    $('#main_visual').on('afterChange', function (e, s, c) {
        $('#main_visual  figure').eq(c + 1).addClass('on').siblings().removeClass('on');
    });


    $('#main_visual .icon .xi-angle-left-thin').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('#main_visual .icon .xi-angle-right-thin').on('click', function () {
        $('.main_slider').slick('slickNext')
    });


    $('#section01 .menu>ul>li>a').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('on')
    });



    $("#video01").YTPlayer({
        videoURL: 'r0MGwCOFaOI',
        containment: 'self',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        //playOnlyIfVisible: true,
        optimizeDisplay: false,
    });

    $('#section04 i.xi-pause').on('click', function () {
        $('#video01').YTPPause();
    });
    $('#section04 i.xi-play').on('click', function () {
        $('#video01').YTPPlay();
    });
    $('#section04 i.xi-tv').on('click', function () {
        $('#video01').YTPFullscreen();
    });


    $('.tab_menu li').on('click', function () {
        var idx = $(this).index();
        // $('.tab_con>div').eq(idx).show().siblings().hide();
        $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
    });


    $('.tab_slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        centerMode: true,

    });

    $('.toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 2000)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 800 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();

    });

});

