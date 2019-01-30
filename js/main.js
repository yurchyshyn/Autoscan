$(document).ready(function(){
  // menu
  $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('menu-active');
      $('.menu-btn').toggleClass('menu-btn-active');
  });
  $('.menu-item').on('click', function(){
      $('.menu').removeClass('menu-active');
      $('.menu-btn').removeClass('menu-btn-active');
  })
  // slider
  $('.catalog-goods-item-slider').slick({
  });
  // magnific-popup
  $('.catalog-goods-item-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true,
    },
  });
  // modal windows
  $('.main-button').on('click', function() {
      $('.overlay').fadeIn('slow/400/fast', function() {
      });
  })
  $('.modal-content-close').on('click', function(){
      $(".overlay").fadeOut('fast');
  })
  $(".overlay").on('click', function (e) {
      if (e.target == this) $(".overlay").fadeOut('fast');
  })
})