$(function(){
    $('.main_slider').slick({
        arrows:false,
        
    });

    $('.gnb>ul>li>a').on('click',function(e){
        if($('.gnb').hasClass('on')) {
            e.preventDefault();
            // $('.submenu').hide();       //이거하면 1번 누르고 2번 누르면 1번 닫힘
            $(this).next().stop().slideToggle();   //이거 하면 눌렀을때 누른 한 섹션만 나온다 
            $(this).parent().siblings().find('.submenu').slideUp();     //이거하면 1번 누르고 2번 누르면 1번 닫힘 

        }
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $('.sns').fadeToggle();
    })

    $(window).on('resize',function(){
        $('.submenu').removeAttr('style')
    });


});