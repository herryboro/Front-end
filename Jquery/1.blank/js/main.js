$(function() {
    $('h1').css({'color' : 'red'});
    /* jquery css 사용
    $('#typo .inner').css({
        'text-decoration': 'underline',
        'border-bottom' : '5px solid red',
        'transform' : 'rotate(45deg)',
        'opacity' : 0.5 
    });*/

    /* 
    $('#typo').mouseover(function() {
        $(this).css('background-color', 'green');
    }).mouseout(function() {
        $(this).css('background-color', '#3498db');
    });*/
    $('#typo .inner').click(function() {
        $(this).animate({opacity: 0, fontSize: '0px'}, 2000, 'easeInOutElastic', function() {
            $(this).animate({opacity: 1, fontSize: '110px'}, 1000);
        });
    });
});