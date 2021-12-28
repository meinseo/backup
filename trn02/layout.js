$(function(){
//---------------------------------------------------------


    $('#main').fullpage({
        anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
        //navigation: true,
        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
            console.log(txt);
            $('.now').text(txt);
            destination.index==0 ? $('.header').fadeIn() : $('.header').fadeOut();
            //위에거랑 같은말임 if(destination.index==0)  {$('.header').fadeIn()} else {$('.header').fadeOut()}
            destination.index==0 ? $('.wheel').fadeIn() : $('.header').fadeOut();
        },
    });

    //con02 슬릭 돌리기 
    $('.b_slider').slick({
        arrows:false,
        asNavFor:'.b_slider',
    });


    //con02 브랜드이름 누르면 넘어가는 슬릭
    $('.brand_name li').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        //console.log("바부팅");
        let idx=$(this).index();
        $('.b_slider').slick('slickGoTo',idx);
    });


    $('.b_slider').on('afterChange', function(e,s,c){
        $('.brand_name li').eq(c).addClass('on').siblings().removeClass('on');
    });






//---------------------------------------------------------
});



// function cook (재료1,재료2){
//     let 삶은라면=재료1+ "과" + 재료2 + "로 삶은라면";
//     return 삶은라면;
// }

// let 라면 = coo("신라면", "스프");
// console.log(라면);










    
    