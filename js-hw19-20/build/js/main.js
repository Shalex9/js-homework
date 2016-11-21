$(document).ready(function(){

  // Slider
  $(".firstArticle__slider__nav__outside__inside:first").css("display", "block");
  $(".firstArticle__slider__nav__outside").click(function() {
      $(this).find(".firstArticle__slider__nav__outside__inside").css("display", "block");
      $(this).siblings(".firstArticle__slider__nav__outside").find(".firstArticle__slider__nav__outside__inside").css("display", "none")
  });
  // END Slider

  // Голубой фон при наведении на картинки
  $(".ourServices__content__item__items__img__picture").mouseover(function() {
    $(this).find(".ourServices__content__item__items__img__picture__fon").css("display", "block")})
    .mouseout(function() {
        $(this).find(".ourServices__content__item__items__img__picture__fon").css("display", "none")});
  // конец фона

  //   Accordion
    $(".news__block__blockRight__accordion__title:first").addClass("active")
        .find(".news__block__blockRight__accordion__title__plusMinus").addClass("activePlus").text("-");
    $(".news__block__blockRight__accordion__p:not(:first)").hide();

    $(".news__block__blockRight__accordion__title").click(function(){
        $(this).next(".news__block__blockRight__accordion__p").slideToggle("slow")
            .siblings(".news__block__blockRight__accordion__p:visible").slideUp("slow");
        var text = $(this).find(".news__block__blockRight__accordion__title__plusMinus").text();
        $(this).toggleClass("active")
            .find(".news__block__blockRight__accordion__title__plusMinus").toggleClass("activePlus").text(text == "+" ? "-" : "+")
            .siblings(".news__block__blockRight__accordion__title").removeClass("active")
            .find(".news__block__blockRight__accordion__title__plusMinus").text(text == "+" ? "-" : "+");
        // var sibl = $(this).siblings(".news__block__blockRight__accordion__title").find(".news__block__blockRight__accordion__title__plusMinus");
        // (sibl.text()==="+" ? "-" : "+");
     });
     //  END Accordion
});