$(function(){
    $('.owl-carousel').owlCarousel({
        items:1,                 //몇개씩 보여줄건지
        loop:true,               // 제품이 4개여도 뒤로 계속 나옴
        autoplay:true,
        autoplayTimeout:3000,    //지나가는속도, 1000=1초
        nav:true,                // 넘기는 화살표 
        dots:true,
    });
});


