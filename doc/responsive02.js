$(function(){
//-----------------------------------------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp(400);
//그냥 없어지는건 slideUp자리에 hide라고 적으면 됨 
 });


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,         // 기본은 3초
    pauseOnHover:false,         //마우스 올려도 넘어가는거 안멈추고 계속 되는거
    pauseOnFocus:false,         //마우스 올려도 넘어가는거 안멈추고 계속 되는거
    fade:true,                  //사라졌다 나오는거 
    speed:1000,
});

//-----------------------------------------------------------------------

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});



$('#link select').on('change', function(){
    var lnk = $(this).val();
    if(lnk) window.open(lnk);
    // window.open(lnk)
    
});



$('.mopen').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});





});