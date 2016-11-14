$(document).ready(function(){
    $(".news__block__blockRight__accordion__title:first").addClass("active");
    $(".news__block__blockRight__accordion__p:not(:first)").hide();


    $(".news__block__blockRight__accordion__title").click(function(){

        $(this).next(".news__block__blockRight__accordion__p").slideToggle("slow")
        .siblings(".news__block__blockRight__accordion__p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".news__block__blockRight__accordion__title").removeClass("active");

        // $(this).find(".news__block__blockRight__accordion__title__plusMinus").toggleClass("activePlus").text("-");
        // $(this).find(".news__block__blockRight__accordion__title__plusMinus")
        // .siblings(".news__block__blockRight__accordion__title__plusMinus").removeClass("activePlus");

        // $(this).find(".news__block__blockRight__accordion__title__plusMinus").text("-");
        // $(this).siblings(".news__block__blockRight__accordion__title__plusMinus").text("+");
     });

 });
