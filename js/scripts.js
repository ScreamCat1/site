$(function(){
  $('.header-mobile').click(function(){
    $('.present-left-side').toggleClass('present-left-side__active');
    $(this).toggleClass('header-mobile__active');
  })

  $('.header-basket').click(function(){
    $('.basket-wrap').toggleClass('basket-wrap__active');
  });
});
