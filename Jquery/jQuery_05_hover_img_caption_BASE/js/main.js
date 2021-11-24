$(function() {
    let $duration = 300;
    let $image = $('#images p');
    
    $image.mouseover(function() {
        $(this).find('span, strong').animate({opacity: 1}, $duration);
    })
    .mouseout(function() {
        $(this).find('span, strong').animate({opacity: 0}, $duration);
    });
});