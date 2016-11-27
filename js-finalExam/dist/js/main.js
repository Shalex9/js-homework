'use strict';

$(function () {
  $('.carousel').slider(); //запускает слайдер

  function send() {
    // $('.searchButton').click (function () {

    function clear() {
      $('.grid').removeChild(this);
    }
    if ($('.grid').children() > 0) {
      clear();
    }

    var poisk = $(".form__input").val().split(" ");

    $.ajax({
      url: 'https://pixabay.com/api/?key=3750037-59b70644a0ea3a4147bb2a2ad&q=' + poisk.join("+") + '&image_type=photo',
      dataType: 'json',
      success: function success(data) {
        console.log('data: ', data);
        // $('.grid').innerHTML = tmpl("wrapper", data);
        if (data.hits.length > 0) {
          for (var i = 0; i < 7; i++) {
            $('.grid').append('<div class="grid-item image' + [i + 1] + '"><p class="grid-item__title"><span class="grid-item__title-author">Autor: </span>' + data.hits[i].user + '</p></div>');
            $('.image' + [i + 1]).css({ 'backgroundImage': 'url("' + data.hits[i].webformatURL + '")' });
          }
          $('.grid-item:nth-child(5)').addClass("grid-item--width2");
          $('.grid-item:nth-child(6)').addClass("grid-item--width2");
        }
      }
    });
    // Первый и РАБОЧИЙ пример - раскоммитить все и var poisk оставить
    //   $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+poisk+"&tagmode=any&format=json&jsoncallback=?",
    //     function(data){
    //     console.log('data: ', data);
    //         $.each(data.items, function(i,item){
    //           $("<img/>").attr("src", item.media.m).attr("class", "foto").appendTo("#boxForRezult .info");
    //           console.log('item: ', item);
    //           var w = data.items;
    //           // console.log(w);
    //           if ( i == 1 ) {return false}  // с шаблонизатором не реагирует на эту строку и выдаёт всего один результат
    //           else {document.getElementByClasssName('boxForRezult').innerHTML = tmpl("wrapper", item)}  // если закоммитить эту строку то будет выдавать нужное количество картинок но без текста
    //         });
    //     });
    // });
  }
  function enter(event) {
    if (event.keyCode == 13) {
      send();
    }
  }
  $('.form__button').on('click', send); //запускаю поиск по нажатию на кнопку поиска
  $('.form__input').on('keypress', enter); //запускаю поиск по нажатию на энтер

  $(document).ready(send()); //запускаю при полной загрузке страницы загрузку картинок в плитку
  //   //Попытка с анимацией
  // var step1= document.getElementByClasssName('step-1'),
  //     right = document.getElementByClasssName('step__arrows__right');
  // $(".step-1").click(function() {
  //   this.style.backgroundPosition = "initial";
  //   this.style.backgroundImage = "url('../img/howItWorks_img2.png')";
  //   $(".step-1").click(function() {
  //     this.style.backgroundImage = "url('../img/howItWorks_img3.png')";
  //     this.style.backgroundPosition = "center center";
  //     $(".step-1").click(function() {
  //       this.style.backgroundImage = "url('../img/howItWorks_img1.png')";
  //       this.style.backgroundPosition = "initial";
  //     });
  //   });
  // });
}), jQuery;