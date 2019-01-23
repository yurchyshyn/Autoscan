// menu
$(function(){
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

//lightbox 
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'showImageNumberLabel': false,
  'alwaysShowNavOnTouchDevices':true,
})