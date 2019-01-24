// menu
$(document).ready(function(){
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('menu-active');
        $('.menu-btn').toggleClass('menu-btn-active');
    });
    $('.menu-item').on('click', function(){
        $('.menu').removeClass('menu-active');
        $('.menu-btn').removeClass('menu-btn-active');
    })
})
// slider
$(document).ready(function(){
  $('.catalog-goods-item-slider').slick({
  });
});
// magnific-popup
$('.catalog-goods-item-slider').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true,
  },
});