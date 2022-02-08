$(function(){
//-------------------------------------------


$('.ex_slider').slick({
    arrows:false,
    centerMode:true,
    autoPlay:true,
    centerPadding:'400px'
});




$("#mv01").YTPlayer({
    videoURL:'https://www.youtube.com/embed/ToOioZA7ITs',
    containment:'self',       //동영상이 돌아갈 곳 지정
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});





$('#section05 i.xi-pause').on('click', function(){
    $('#mv01').YTPPause();
});
$('#section05 i.xi-play').on('click', function(){
    $('#mv01').YTPPlay();
});
$('#section05 i.xi-tv').on('click', function(){
    $('#mv01').YTPFullscreen();
});


//-------------------------------------------


});





