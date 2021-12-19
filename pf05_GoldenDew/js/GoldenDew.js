$(function(){
    //--------------------------------------------------------------------------------
    $(".bgndVideo").YTPlayer({
        videoURL:'https://www.youtube.com/embed/h-wh01NsRSo',
        containment:'self',       
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        optimizeDisplay:false,
    
    });

    $(".bgndVideo").YTPlayer({
        videoURL:'https://www.youtube.com/embed/UV4hyqN88nA',
        containment:'self',       
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        optimizeDisplay:false,
        ratio: '16/9'
    });


    // xi-search 탭
    $('.header .first_nav>ul.right .xi-search').on('click', function () {
        $('.top_banner').slideDown();
    });

    $('.top_banner .xi-close').on('click', function () {
        $('.top_banner').slideUp();
    });

    // 팝업창 닫기
    $('.popup_close').on('click',function(){
        $(this).parent().hide();
    });


    // 오른쪽 움직이는 배너
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        // if (sct>400)  {
        //   $('#toTop').fadeIn()
        // }else{
        //   $('#toTop').fadeOut()
    
        // }
        sct>700 ? $('.scroll_banner').fadeIn() : $('.scroll_banner').fadeOut();
        $('.scroll_banner').css({top:350+sct})
    });

    // Totop 
    $('.scroll_banner>ul>.totop').on('click',function(){
        $('html, body').animate({scrollTop:0},2000)
    });
    $('.scroll_banner>ul>.todown').on('click',function(){
        let dh = $(document).outerHeight(true);
        $('html, body').animate({scrollTop:dh},2000)
    });


    // sec01 슬라이드
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,
        dots:false,
    });

    // section01 슬라이드 버튼
    $('.section01 .btn i.xi-angle-left-thin').on ('click',function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('.section01 .btn i.xi-angle-right-thin').on ('click',function(){
        $('.pr_slider').slick('slickNext');
    });


    // 늘어나는 페이지
    $('.section02 ul li').on('mouseenter', function(){
        $(this).addClass('on').siblings().removeClass('on');
    })


    // sec03 슬라이드
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,
        dots:false,
    });

    // section03 슬라이드 버튼
    $('.section03 .btn i.xi-angle-left-thin').on ('click',function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('.section03 .btn i.xi-angle-right-thin').on ('click',function(){
        $('.pr_slider').slick('slickNext');
    });

    

  //--------------------------------------------------------------------------------
})


/* <iframe width="1280" height="721" src="https://www.youtube.com/embed/h-wh01NsRSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */