
(function($) {

    $.fn.mySlider = function(options) {

        var defaults = {
          backgroundColor: 'white',
          maxWidth: '1160px'
        };

        var settings = $.extend(defaults, options);

        $('.firstArticle__slider__list__element__img').css({
              'max-width' : settings.maxWidth
        });


        var leftButton = $('.firstArticle__slider__arrow-left');
        var rightButton = $('.firstArticle__slider__arrow-right');
        var elementsList = $('.firstArticle__slider__list');
            leftButton.css({
              'background-color' : settings.backgroundColor
            });
            rightButton.css({
              'background-color' : settings.backgroundColor
            });

        var pixelsOffset = 1185;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
        var maximumOffset = 0;
        console.log('elementsCount', elementsCount);
        console.log('elementsCount', pixelsOffset);

        leftButton.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 1185;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        rightButton.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 1185;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        return this;

    }
})(jQuery);