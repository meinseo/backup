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
        sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
        $('.scroll_banner').css({top:300+sct})
    });

    // Totop / Todown 안먹힘 물어보기
    $('scroll_banner>ul>.totop').on('click',function(){
        $('html, body').animate({scrollTop:0},2000)
    });
    $('scroll_banner>ul>.todown').on('click',function(){
        $('html, body').animate({scrollTop:0},2000)
    });









    

  //--------------------------------------------------------------------------------
})


/* <iframe width="1280" height="721" src="https://www.youtube.com/embed/h-wh01NsRSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */