$(document).ready(function($){
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
            $('html,body').scrollTop($("#about").offset().top -60);
            $(this).text('Show more');
        }
    })
});

toggle = true;
function changeBanner(){
    const p = document.getElementById("banner");
    toggle = !toggle;
    if(toggle) {
        p.style.backgroundImage = "url('resources/images/DSC00638.JPG')";
    } else {
        p.style.backgroundImage = "url('resources/images/IMG_20210715_220053-PANO.jpg')"
}};