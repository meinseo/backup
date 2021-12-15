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










  //--------------------------------------------------------------------------------
})


/* <iframe width="1280" height="721" src="https://www.youtube.com/embed/h-wh01NsRSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */