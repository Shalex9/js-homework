$(function(){
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

// МЕНЮ
$(document).ready(function(){
    $(".dropdown")
          .mouseenter(function(){$('.subList').slideDown(200).animate({backgroundColor: 'rgb(225, 75, 75)'},200, 'easeInOutQuint')})
          .mouseleave(function(){$('.subList').slideUp(200).animate({backgroundColor: 'rgb(225, 225, 75)'},200)});

    $(".subDropDown")
          .mouseenter(function(){$('.subsubList').slideDown(200).animate({backgroundColor: 'rgb(225, 75, 75)'},200, 'easeOutExpo')})
          .mouseleave(function(){$('.subsubList').slideUp(200).animate({backgroundColor: 'rgb(0, 0, 75)'},200)});
        });
});
