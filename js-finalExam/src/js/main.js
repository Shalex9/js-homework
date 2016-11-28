$(function () {

  $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
    percentPosition: true,
    packery: {
      gutter: '.gutter-sizer'
    }
  });

  $('.carousel').slider(); //запускает слайдер

  function send() {
    function clear() {$('.grid-item').empty()}
    if($('.grid').children().length > 0) {clear()}

    var poisk = $(".form__input").val().split(" ");

    $.ajax({
      url: 'https://pixabay.com/api/?key=3750037-59b70644a0ea3a4147bb2a2ad&q='+ poisk.join("+") +'&image_type=photo',
      dataType: 'json',
      success: function (data) {
        console.log('Объект данных с pixabay: ', data);
        if(data.hits.length > 0) {
          for (var i=0; i<7; i++) {
            $('.image'+ [i+1]).append('<a href=" ' + data.hits[i].webformatURL + ' " class="grid-item__title"><span class="grid-item__title-author">Autor: </span>' + data.hits[i].user + '</a>');
            $('.image'+ [i+1]).css({'backgroundImage':'url("' + data.hits[i].webformatURL + '")'});
          }
        }
      }
    })
  }

  function enter (event) {if(event.keyCode == 13) {send();}}
  $('.form__button').on('click', send);  //запускаю поиск по нажатию на кнопку поиска
  $('.form__input').on('keypress', enter);  //запускаю поиск по нажатию на энтер

  $(document).ready(send());  //запускаю при полной загрузке страницы загрузку картинок в плитку
}), (jQuery);
