$(function(){

    $('#top_banner i').on('click', function(){
        $('#top_banner').slideUp();
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3500,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});
 
$('#section01 .menu>ul>li>a').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('on')
});



$("#video01").YTPlayer({
    videoURL:'https://www.youtube.com/embed/r0MGwCOFaOI',
    containment:'self',       
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$('#section04 i.xi-pause').on('click', function(){
    $('#video01').YTPPause();
});
$('#section04 i.xi-play').on('click', function(){
    $('#video01').YTPPlay();
});
$('#section04 i.xi-tv').on('click', function(){
    $('#video01').YTPFullscreen();
});


$('.tab_menu li').on('click', function(){
    var idx=$(this).index();
    // $('.tab_con>div').eq(idx).show().siblings().hide();
    $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
});


$('.tab_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:4,
    centerMode:true,

});


});

