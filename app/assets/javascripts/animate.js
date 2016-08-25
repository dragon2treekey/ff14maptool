
window.onload = function(){
  $(function() {
    $("#loading").fadeOut();
  });
}

$(function() {
    var h = $(window).height();
    $('.animation').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.animation').css('display', 'block');
});