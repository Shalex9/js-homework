$(function(){

    var $body = $('.wrapper').parent();
    $body.css({
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sherif',
    })

    var $wrapper = $('.wrapper');
    $wrapper.css({
      margin: '30px auto',
      width: '585px',
      height: '330px',
      border: '1px solid #bfbfbf',
      overflow: 'auto'
    });

    var $content = $('.content');
    $content.css({
      margin: '10px 9px',
      border: '1px solid #bfbfbf',
      borderRadius: '5px',
    });

    var $ul = $('.ListLink');
    $ul.css({
      margin: '5px 5px',
      height: '40px',
      border: '1px solid #bfbfbf',
      borderRadius: '5px',
      background: '#e9e9e9',
      paddingLeft: '3px',
      overflow: 'hidden'
    });

    var $li = $('.items');
    $li.css({
      display: 'inline-block',
      background: '#f6f6f6',
      border: '1px solid #bfbfbf',
      borderRadius: '5px',
      marginTop: '2px',
    });

    var $link = $('.ListLink a');
    $link
          .css({
            textDecoration: 'none',
            display: 'inline-block',
            padding: '2px 20px',
            fontSize: '16px',
            lineHeight: '35px',
            marginBottom: '3px',
            borderRadius: '5px',
            color: 'black'
          })
        $('.ListLink a').hover(
              function() {$(this).not('.active').css({background: '#ededed', color: 'black'})},
              function() {$(this).not('.active').css({background: '#f6f6f6', color: 'black'})}
          )
    $(".content p").css({
      padding: '10px 25px',
    });

// ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
    // $(".items:first").addClass("active");
    $(".content p:not(:first)").hide();

    $(".items").click(function(e){
        e.preventDefault();
        $('.ListLink a').removeClass('active').css({background: '#f6f6f6', color: '#000'});
        $(this).addClass('active').css({background: '#007fff', color: '#fff'});  // или так  $(this).toggleClass("active")
                                                                      //        .siblings().removeClass("active");
        var tab = $(this).attr('href');
        $('.text').not(tab).css({display: 'none'});
        $(tab).fadeIn(300);

    });
    // $('.item2').click(function(){$('.text2').css('display', 'block'); $('text3').css('display', 'none')});
    // $('.item3').click(function(){$('.text3').css('display', 'block');});
    $('.active').css({
      background: '#007fff',
      color: '#fff'
    });

// ВТОРОЕ ЗАДАНИЕ

    $('article').css({
      margin: '50px auto',
      padding: '5px 15px',
      width: '500px',
      height: '200px',
      border: '1px solid #bfbfbf',
      fontSize: '16px',
      fontFamily: 'Arial, sherif'
    });

    $('article li').css({
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'middle'
    });

    $('.post').css({
      width: '200px',
      height: '35px',
      margin: '-5px 5px 2px',
      padding: '10px',
      border: '1px solid #bfbfbf',
      borderRadius: '5px',
      boxShadow: '0px 0px 3px 1px gray',
      display: 'none',
    });

    $("article ul").css({
        padding: '0',
    });

    $("article li").css({
        textDecoration: 'none',
        margin: '0',
        height: '60px'
    });

    $("article .name").css({
        width: '80px'
    });

    $("article input").css({
                          height: '15px'
                      })

                      .hover(function() {
                          $(this).next(".post").animate({opacity: "show"}, 500);
                      }, function() {
                          $(this).next(".post").animate({opacity: "hide"}, 300);
                      });

});
