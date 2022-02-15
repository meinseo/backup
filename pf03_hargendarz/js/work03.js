$(function () {
    //---------------------------------------------------------
    $('.top_banner a').on('click', function () {
        $('.top_banner').slideUp();
    });


    var mSl = $('.mian_slider').slick({
        autoplay: true,
        fade: true,
        speed: 2000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
    });

    //---메인슬라이드 애니메이션
    $('.sitem').eq(0).addClass('on');
    mSl.on('afterChange', function (e, s, c) {
        $('.sitem').eq(c).addClass('on').siblings().removeClass('on');
    });


    var sec02 = $('#section02').offset().top;
    console.log(sec02);
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > sec02 - 200) { $('#section02').addClass('on') }
        else { $('#section02').removeClass('on') }
    })




    $("#video01").YTPlayer({
        videoURL: 'https://www.youtube.com/embed/vbhwL9W67zU',
        containment: 'self',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
        optimizeDisplay: false,         //(원래 사이즈/비율로 보여줘라~~는 명령어)
    });

    $('#section05 i.xi-pause').on('click', function () {
        $('#video01').YTPPause();
    });
    $('#section05 i.xi-play').on('click', function () {
        $('#video01').YTPPlay();
    });
    $('#section05 i.xi-tv').on('click', function () {
        $('#video01').YTPFullscreen();
    });



    $('.toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 2000)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 800 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();

    });





    //---------------------------------------------------------
});






























