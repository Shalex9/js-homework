$(function(){
  $("#container").clickCarousel({margin: 10});
});

$(document).ready(function(){
  $("select").selectbox();
});

// NFS carousel
$(document).ready(function() {
    // Slider #2
  $("#jl2").jliderSlide({
        slideEffect  : "random",
        visiTime     : 6000,
        autoPlay     : false,
        width        : "800px",
        height       : "420px",
        photoCaption : true,
        visiProgress : true,
        noCopy       : true,
        hideControl  : "hover",
        navType      : "line",
        Loaded       : function (curSlide) {
                            console.log('Loaded...!');
                        },
        pressPlay    : function (curSlide) {
                            console.log('Pressed Play button...!');
                        },
        pressPause   : function (curSlide) {
                            console.log('Pressed Pause button...!');
                        }
    });
  });


      //Чекбокс из Xiper.nex
      jQuery(document).ready(function(){

      jQuery(".niceCheck").each(
      /* при загрузке страницы меняем обычные на стильные checkbox */
      function() {
                    changeCheckStart(jQuery(this));
                });
                                            });

      function changeCheck(el)
      /*
      функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, котрый отвечает за новый вид)
      el - span контейнер для обычного чекбокса
      input - чекбокс
      */
      {
      var el = el,
        input = el.find("input").eq(0);

      if(el.attr("class").indexOf("niceCheckDisabled")==-1)
      {
          if(!input.attr("checked")) {
          el.addClass("niceChecked");
          input.attr("checked", true);
        } else {
          el.removeClass("niceChecked");
          input.attr("checked", false).focus();
        }
      }

        return true;
      }

      function changeVisualCheck(input)
      {
      /*
      меняем вид чекбокса при смене значения
      */
      var wrapInput = input.parent();
      if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
      }
      else
      {
        wrapInput.addClass("niceChecked");
      }
      }

      function changeCheckStart(el)
      /*
      новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
      новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
      */
      {

      try
      {
      var el = el,
      checkName = el.attr("name"),
      checkId = el.attr("id"),
      checkChecked = el.attr("checked"),
      checkDisabled = el.attr("disabled"),
      checkValue = el.attr("value");
      checkTab = el.attr("tabindex");
      if(checkChecked)
        el.after("<span class='niceCheck niceChecked'>"+
          "<input type='checkbox'"+
          "name='"+checkName+"'"+
          "id='"+checkId+"'"+
          "checked='"+checkChecked+"'"+
          "value='"+checkValue+"'"+
          "tabindex='"+checkTab+"' /></span>");
      else
        el.after("<span class='niceCheck'>"+
          "<input type='checkbox'"+
          "name='"+checkName+"'"+
          "id='"+checkId+"'"+
          "value='"+checkValue+"'"+
          "tabindex='"+checkTab+"' /></span>");

      /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */
      if(checkDisabled)
      {
        el.next().addClass("niceCheckDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
      }

      /* цепляем обработчики стилизированным checkbox */
      el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
      el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
      if(jQuery.browser.msie)
      {
        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
      }
      el.remove();
      }
      catch(e)
      {
      // если ошибка, ничего не делаем
      }

        return true;
      }



// МЕНЮ и боксы
$(document).ready(function(){
    $(".dropdown")
          .hover(
              function() {$('.subList').slideDown(500)},
              function() {$('.subList').slideUp(500)}
          )
          .mouseenter(function(){$('.subList').animate({backgroundColor: 'rgb(225, 75, 75)'},500, 'easeInOutQuint')})
          .mouseleave(function(){$('.subList').animate({backgroundColor: 'rgb(225, 225, 75)'},500)});

    // $(".subdropdown").mouseenter(function(){$('.subsubList').animate({backgroundColor: 'rgb(225, 75, 75)'},1000)});
    // $(".subdropdown").mouseleave(function(){$('.subsubList').animate({backgroundColor: 'rgb(225, 0, 75)'},1000)});

    $(".subDropDown")
          .hover(
              function() {$('.subsubList').slideDown(500)},
              function() {$('.subsubList').slideUp(500)}
          )
          .mouseenter(function(){$('.subsubList').animate({backgroundColor: 'rgb(225, 75, 75)'},1000, 'easeOutExpo')})
          .mouseleave(function(){$('.subsubList').animate({backgroundColor: 'rgb(0, 0, 75)'},1000)});

// ДОПОЛНИТЕЛЬНЫЕ ЭКСПЕРИМЕНТЫ
    $(".boxfon").mouseenter(function(){$(this).animate({backgroundColor: '#fff'},500, 'easeInOutQuint')})
                .mouseleave(function(){$(this).animate({backgroundColor: '#000'},500, 'easeInBounce')});

    $(".boxfon").click(function(){
        $(this).animate({opacity: "0.1", left: "+=400"}, 1200)
               .animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
               .animate({opacity: "1", left: "-=400", height: "50", width: "100"}, "slow")
               .animate({top: "-=160"}, "fast")
               .slideUp()
               .slideDown("slow")
       return false;
   });

    $(".boxfonUI").click(function(){
      $(this).switchClass("red", "blue", 500, 'easeInBounce')
             .switchClass("blue", "red", 1000, 'easeInOutQuint');
    });

    $(".css").click(function() {
        this.style.left = '700px';
        this.style.backgroundColor = 'red';
        $(".css").click(function() {
            this.style.left = '300px';
            this.style.backgroundColor = 'yellow';
        });

    });



});
