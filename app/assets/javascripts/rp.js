$(document).ready(function() {
  var pagetop = $('.pagetop');
  var pagescroll = $('.pagescroll');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 2350) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }

      if ($(this).scrollTop() > 2200) {
        pagescroll.fadeOut();
      } else {
        pagescroll.fadeIn();
      }
    });

    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });

    pagescroll.click(function () {
      if ($(window).scrollTop() < 600) {
        $('body, html').animate({ scrollTop: 601 }, 500);
        return false;
      } else if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1200){
        $('body, html').animate({ scrollTop: 1201 }, 500);
        return false;
      } else if ($(window).scrollTop() > 1200 && $(window).scrollTop() < 1800){
        $('body, html').animate({ scrollTop: 1801 }, 500);
        return false;
      } else if ($(window).scrollTop() > 1800 && $(window).scrollTop() < 2400){
        $('body, html').animate({ scrollTop: 2401 }, 500);
        return false;
      }else{

      }
    });
});