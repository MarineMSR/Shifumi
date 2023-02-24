$(function() {
    $('.arrow_right a').bind('click',function(event){
        var $anchor = $(this);

        //if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
        // $('html, body, main').stop().animate({
        // 	scrollLeft: $($anchor.attr('href')).offset().left
        // }, 1500);
        event.preventDefault();
    });
});

$(function() {
      $('.arrow_left a').bind('click',function(event){
          var $anchor = $(this);

          // if you want to use one of the easing effects:
          $('html, body').stop().animate({
              scrollLeft: $($anchor.attr('href')).offset().left
          }, 1800,'easeInOutExpo');
          // $('html, body, main').stop().animate({
          // 	scrollLeft: $($anchor.attr('href')).offset().left
          // }, 1500);
          event.preventDefault();
      });
  });