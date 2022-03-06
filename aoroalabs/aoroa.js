
$(function(){

    $('#main').fullpage({
    anchors:[ 'section01', 'section02', 'section03', 'section04' , 'section05' , 'footer'],
    css3:false,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');

    },

    });


});