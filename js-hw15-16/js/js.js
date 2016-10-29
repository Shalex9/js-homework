$(function () {
  document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
      alert("Вы нажали Enter!");
    }
    return false;
  }
  // document.forms['search'].onsubmit=function(e){e.preventDefault(); alert('hello')}   //второй вариант
  var parse;
  $('#searchButton').click (function () {
      var poisk = $("#search input").val();
      // console.log(poisk);
      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+poisk+"&tagmode=any&format=json&jsoncallback=?",
        function(data){
        // console.log(data);
            $.each(data.items, function(i,item){
              $("<img/>").attr("src", item.media.m).attr("class", "foto").appendTo("#boxForRezult");
              if ( i == 3 ) {return false}  // с шаблонизатором не реагирует на эту строку и выхаёт всего один результат
              else {document.getElementById('boxForRezult').innerHTML = tmpl("wrapper", item)}  // если закоммитить эту строку то будет выдавать нужное количество картинок но без текста
            });
        });
    });

});
