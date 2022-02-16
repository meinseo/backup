$(function(){
    //-----------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    const sectionColor=['#e1e6ea','#e1e6ea','#e1e6ea']
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        css3:false,
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
            idx==0||idx==6 ? $('.cover_btn span').css({background:'#fff'}) :  $('.cover_btn span').css({background:'#f25329'}); 
            idx==0||idx==6 ? $('.number').hide() : $('.number').show();
            $('.number').text("0"+destination.index).css({color:sectionColor[destination.index]});
            if($(window).width()<768) {
                if(idx==0||idx==6) {
                    $('#header h1').css({color:'#fff'})
                    $('#footer').show();
                } else  {
                    $('#header h1').css({color:'#f25329',fontWeight:'400'})
                    $('#footer').hide();
                } 
            }
        },
    
    });

    $(window).on('resize', function(){
        $('#header , #footer').removeAttr('style');
    })
    
    


    $(window).on('load resize', function() {
           if($(window).width() > 768) {
              Rsd.slick('unslick');
           }else{
              Rsd.not('.slick-initialized').slick(slickOptions);
           }
    });
    
    //WEB is My MONEY
    new Typed('.slogan_txt',{
        strings: ['생각하는 디자이너,', '2022 meinseo PORTFOLIO ! '],
        typeSpeed:150, 
    });
    
    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on');
        $("#cover").slideToggle(); //fadeToggle
    });
    
    
    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    
    $('#cover a').on('click', function(){
        $('#cover').slideUp(); 
        $('.cover_btn').toggleClass('on');
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });
    
    
    //-----------------------------------------------------
    })