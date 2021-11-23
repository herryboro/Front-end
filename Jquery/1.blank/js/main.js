$(function() {
    $('h1').css({'color' : 'red'});
    /* jquery css 사용
    $('#typo .inner').css({
        'text-decoration': 'underline',
        'border-bottom' : '5px solid red',
        'transform' : 'rotate(45deg)',
        'opacity' : 0.5 
    });*/
    $('#typo').mouseover(function() {
        $(this).css('background-color', 'green');
    }).mouseout(function() {
        $(this).css('background-color', '#3498db');
    });
});