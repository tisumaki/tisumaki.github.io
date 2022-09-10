$("document").ready(function($){
    var nav = $('.nav-container-fixed');
  
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 285) {
            nav.addClass("sticky");
        } else {
            nav.removeClass("sticky");
        }
    });
  });


$(document).ready(function() {
    $("button").click(function() {
        $(".more").slideToggle(200);
        if($(this).text()=='Show more'){
            $(this).text('Show less');
            $(".more").css('display', '');
        } else {
            $('html,body').animate({
                scrollTop: $("#about").offset().top -50},
                200);
            $(this).text('Show more');
        }
    })
});