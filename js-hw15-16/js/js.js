$(function () {
  document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
      alert("Вы нажали Enter!");
    }
    return false;
  }
  // document.forms['search'].onsubmit=function(e){e.preventDefault(); alert('hello')}
  var parse;
  $('#searchButton').click (function () {
      var poisk = $("#search input").val();
      console.log(poisk);
      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+poisk+"&tagmode=any&format=json&jsoncallback=?",
        function(data){
        console.log(data);
            $.each(data.items, function(i,item){
              $("<img/>").attr("src", item.media.m).appendTo("#boxForRezult");
              var obj = JSON.stringify(item);
              console.log(obj);
              parse = JSON.parse(obj);
              console.log(parse);
              if ( i == 9 ) return false;
            });
        });
      });

      $(function(){
        var content = document.getElementById('boxForRezult');
        content.innerHTML = tmpl("wrapper", parse);
      });

});
