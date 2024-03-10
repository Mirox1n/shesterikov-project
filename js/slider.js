$(window).on("load", function() {
    let slide_left = 0;
    $('.step-carousel-arrow-right').click(function(){
        let count_slide = $('.step-carousel-cont').attr('count-slide');
        if (slide_left >= (count_slide - 1) * 100) {
            if ($('.step-carousel-arrow-right').css('display') != 'none') {
                $('.step-carousel-arrow-right').hide();
                
            }
        }
        else {
            slide_left += 100;
            $('.step-carousel-cont').css('left', '-' + slide_left + '%');
            if ($('.step-carousel-arrow-left').css('display') == 'none') {
                $('.step-carousel-arrow-left').show();
            }
            if (slide_left >= (count_slide - 1) * 100) {
                if ($('.step-carousel-arrow-right').css('display') != 'none') {
                    $('.step-carousel-arrow-right').hide();
                    
                }
            }
            
        } 
    });
    $('.step-carousel-arrow-left').click(function(){
        let count_slide = $('.step-carousel-cont').attr('count-slide');
        if (slide_left <= 0) {
            if ($('.step-carousel-arrow-left').css('display') != 'none') {
                $('.step-carousel-arrow-left').hide();
                
            }
        }
        else {
            slide_left -= 100;
            $('.step-carousel-cont').css('left', '-' + slide_left + '%');
            if ($('.step-carousel-arrow-right').css('display') == 'none') {
                $('.step-carousel-arrow-right').show();
                
            }
            if (slide_left <= 0) {
                if ($('.step-carousel-arrow-left').css('display') != 'none') {
                    $('.step-carousel-arrow-left').hide();
                    
                }
            }
            
        }

    });



    $(".link-button").on("click", function() {
        var get_id = $(this).attr("data-item");
        var target = $("#"+get_id).offset().top - 200;
      
        $("html, body").animate({scrollTop: target}, 800);
      
       });

});
