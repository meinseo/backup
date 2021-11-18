$(function(){
//------------------------------

$('.main_slider').on('init renit afterChange', function(e,s,c){
    console.log(c,s.slideCount);
    var i = (c?1:0)
    $('.snum').text(i+1 + "/" + s.slideCount)   //밑에 카운트 1/3 2/3 카운트 찍히는거
})



var ms=$('.main_slider').slick({
    autoplay:true,
    fade:true,
    arrows:false, 
    pauseOnHover:false,
});



$('.main_slider figure').eq(0).addClass('animation_active');
$('#main_visual .sbar').addClass('animation_active');
$('#main_visual .sbar2 span').css({height:100})
ms.on('beforeChange', function(e,s,c,n){
    $('#main_visual .sbar').removeClass('animation_active');
});


ms.on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');
    $('#main_visual .btn li').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');
    $('#main_visual .sbar').addClass('animation_active');
    $('#main_visual .sbar2 span').css({height:100*(c+1)})
});

$('#main_visual .btn li').on('click', function(){
    var idx=$(this).index();
    ms.slick('slickGoTo', idx)
});







//-----------------------------
})