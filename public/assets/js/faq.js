/* 
    Created on : Jan 29, 2019, 3:10pm
    Author     : graper
*/
(function($) {
    $(document).ready(function() {
        $('#faq-listing .faq-item .question a').click(function(e) {
            e.preventDefault();
            if ($(this).parents('.faq-item').hasClass('open')) {
                $(this).parents('.faq-item').removeClass('open');
            } else {
                $(this).parents('.faq-item').addClass('open');
            }
        });

    });
})(jQuery);