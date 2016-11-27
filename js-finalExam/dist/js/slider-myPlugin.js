'use strict';

(function ($) {

    $.fn.slider = function (options) {
        var leftButton = $('.slider__arrow-left'),
            rightButton = $('.slider__arrow-right'),
            pixelsOffset = 460,
            currentleftValue = 0,
            maximumOffset = 0;

        leftButton.click(function () {
            var thisSliderList = $(this).parent().parent().siblings('.slider__list'),
                elementsCount = thisSliderList.find('li').length,
                minimumOffset = -((elementsCount - 1) * pixelsOffset);
            if (currentleftValue != maximumOffset) {
                currentleftValue += 460;
                thisSliderList.animate({ left: currentleftValue + "px" }, 600, 'easeInBack');
            }
        });
        rightButton.click(function () {
            var thisSliderList = $(this).parent().parent().siblings('.slider__list'),
                elementsCount = thisSliderList.find('li').length,
                minimumOffset = -((elementsCount - 1) * pixelsOffset);
            if (currentleftValue != minimumOffset) {
                currentleftValue -= 460;
                thisSliderList.animate({ left: currentleftValue + "px" }, 600, 'easeInBack');
            }
        });
        return this;
    };
})(jQuery);