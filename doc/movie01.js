$  (function(){
//----------------------------------------
$("#m01").YTPlayer({videoURL:'http://youtu.be/BsekcY04xvQ',
    containment:'#visual',       //동영상이 돌아갈 곳 지정
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:0.2,
    showControls:false,
});



$('#visual i.xi-pause').on('click', function(){
    $('#m01').YTPPause();
});
$('#visual i.xi-play').on('click', function(){
    $('#m01').YTPPlay();
});
$('#visual i.xi-tv').on('click', function(){
    $('#m01').YTPFullscreen();
});

//----------------------------------------
});


