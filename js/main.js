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
// $('.main-button').on('click', function(){
//         $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
//       var block = $(".overlay"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
//       if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
//           && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
//           block.hide(); // если условия выполняются - скрываем наш элемент
//       }
//   });
// });
$(document).ready(function() {
  $('.main-button').on('click', function(event) {
      $('.overlay').fadeIn('slow/700/fast', function() {  
      });
      $('.modal-content-close').on('click', function(event){
        $('.overlay').fadeOut();
      })
  });
});