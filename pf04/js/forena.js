$  (function(){
    //----------------------------------------


    // 메인비주얼 동영상
    $("#bgndVideo").YTPlayer({
        videoURL:'https://www.youtube.com/embed/24uyflZbChc',
        containment:'self',       
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        optimizeDisplay:false,
        ratio: '16/9'
    });


    // section01 돌아가는 슬릭
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 3,
        dots:false,
    });
    

    $('.pr_slider figure').eq(4).addClass('on');
    $('.pr_slider').on('afterChange', function(e,s,c){
        $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
    });



    // section01 화살표
    $('#section01 .btn i.xi-angle-left-thin').on ('click',function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('#section01 .btn i.xi-angle-right-thin').on ('click',function(){
        $('.pr_slider').slick('slickNext');
    });


    // section02 탭
    $('#section02 .title li').on('click', function(){
        
        var idx=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('#section02 .tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    })



    // section05 탭
    $('#section05 .title li').on('click', function(){
        
        var idx=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('#section05 .tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    })

    
    //----------------------------------------
    });
    
    
