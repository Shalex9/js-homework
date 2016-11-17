
(function($) {

    $.fn.mySlider = function(options) {

        var defaults = {
          backgroundColor: 'white',
          maxWidth: '250px'
        };

        var settings = $.extend(defaults, options);

        $('.carousel-element img').css({
              'max-width' : settings.maxWidth
        });


        var leftButton = $('.carousel-arrow-left');
        var rightButton = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
            leftButton.css({
              'background-color' : settings.backgroundColor
            });
            rightButton.css({
              'background-color' : settings.backgroundColor
            });

        var pixelsOffset = 275;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
        var maximumOffset = 0;

        leftButton.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 275;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        rightButton.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 275;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        return this;
    }

})(jQuery);
