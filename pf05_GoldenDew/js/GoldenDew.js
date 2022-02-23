$(function(){
    //--------------------------------------------------------------------------------
    //첫번째 동영상
    //기본일때
    if($(window).width() > 768) {
        var vset = {
            videoURL:'UV4hyqN88nA',
            containment:'.main_visual',       
            autoPlay:true, 
            mute:true, 
            startAt:0, 
            opacity:1,
            showControls:false,
            optimizeDisplay:false,
            ratio: '16/9'
        }
    } else {
        //반응형일때
        var vset = {
            videoURL:'UV4hyqN88nA',
            containment:'.main_visual',       
            autoPlay:true, 
            mute:true, 
            startAt:0, 
            opacity:1,
            showControls:false,
            //optimizeDisplay:false,
            //ratio: '16/9'
        }
    }

    $(".bgndVideo").YTPlayer(vset);

    //두번째 동영상
    $(".bgndVideo_second").YTPlayer({
        videoURL:'h-wh01NsRSo',
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
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
        ]
    });


    $('.f_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 1,
        dots:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
        ]
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


    // section03 슬라이드 버튼
    $('.section03 .btn i.xi-angle-left-thin').on ('click',function(){
        $('.f_slider').slick('slickPrev');
    });
    $('.section03 .btn i.xi-angle-right-thin').on ('click',function(){
        $('.f_slider').slick('slickNext');
    });

    
    // section03 동영상




  //--------------------------------------------------------------------------------
})


/* <iframe width="1280" height="721" src="https://www.youtube.com/embed/h-wh01NsRSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */