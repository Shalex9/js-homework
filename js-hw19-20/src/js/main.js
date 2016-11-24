$(document).ready(function(){

  // Slider
  $(".slider__nav__inside:first").css("display", "block");
  $(".slider__nav__outside").click(function() {
      $(this).find(".slider__nav__inside").css("display", "block");
      $(this).siblings(".slider__nav__outside").find(".slider__nav__inside").css("display", "none")
  });
  $(".slider__img1").css("opacity", "1");
  $(".slider__nav__outside:first").click(function() {
      $(".slider__img1").animate({opacity: "1"}, 1200);
      $(".slider__img2, .slider__img3").animate({opacity: "0"}, 1200);
  });
  $(".slider__nav__outside:nth-child(2)").click(function() {
      $(".slider__img2").animate({opacity: "1"}, 1200);
      $(".slider__img1, .slider__img3").animate({opacity: "0"}, 1200);
  });
  $(".slider__nav__outside:last-child").click(function() {
      $(".slider__img3").animate({opacity: "1"}, 1200);
      $(".slider__img1, .slider__img2").animate({opacity: "0"}, 1200);
  });
  // END Slider

  // Голубой фон при наведении на картинки
  $(".services__box-img").mouseover(function() {
    $(this).find(".services__box-img__fon").css("display", "block")})
    .mouseout(function() {
        $(this).find(".services__box-img__fon").css("display", "none")});
  // конец фона

  //   Accordion
    $(".accordion__title-box:first").addClass("active")
        .find(".accordion__plus-minus").addClass("active-plus").text("-");
    $(".accordion__text:not(:first)").hide();

    $(".accordion__title-box").click(function(){
        $(this).next(".accordion__text").slideToggle("slow")
            .siblings(".accordion__text:visible").slideUp("slow");
        var text = $(this).find(".accordion__plus-minus").text();
        $(this).toggleClass("active")
            .find(".accordion__plus-minus").toggleClass("active-plus").text(text == "+" ? "-" : "+")
            .siblings("accordion__title-box").removeClass("active")
            .find(".accordion__plus-minus").text(text == "+" ? "-" : "+");
        // var sibl = $(this).siblings(".accordion__title-box").find(".accordion__plus-minus");
        // (sibl.text()==="+" ? "-" : "+");
     });
     //  END Accordion
});
