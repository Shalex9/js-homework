$(function () {
    function send() {
      // $('.searchButton').click (function () {
      var poisk = $("#search input").val().split(" ");

        $.ajax({
          url: 'https://pixabay.com/api/?key=3750037-59b70644a0ea3a4147bb2a2ad&q='+ poisk.join("+") +'&image_type=photo',
          dataType: 'json',
          success: function (data) {
            console.log('data: ', data);
            var box = $(".boxForRezult");
            box.innerHTML = tmpl("wrapper", data);
            if(data.hits.length > 0) {
              $('.boxForRezult').html('<ul></ul>');
              for (var i=0; i<data.hits.length; i++) {
                $('.boxForRezult ul').append('<li><img src="' + data.hits[i].webformatURL + '"></li>');
              }
            }
          }
        })
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
    function enter (event) {
      if(event.keyCode == 13) {
        send();
      }
    }
    $('.searchButton').on('click', send);
    $('.input').on('keypress', enter);
}), (jQuery);
