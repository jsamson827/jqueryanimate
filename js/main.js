// This is an example of jQuery Animate and CSS updating with a click
$(document).ready(function () {


});

var switcher = true;
var $movieMenu = $('#movie-menu');
var $ep1 = $('#episode-one');
var $ep2 = $('#episode-two');
var $ep3 = $('#episode-three');
var $ep4 = $('#episode-four');
var $ep5 = $('#episode-five');
var $ep6 = $('#episode-six');
var $ep7 = $('#episode-seven');
var $movieRow = $('.movies')

function colorize(somediv) {
    somediv.css('background-color', 'black')
        .css('color', 'yellow');
}

$('#movie-menu li:eq(0)').click(function () {
    $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $(this).css('background-color', 'black')
    $(this).children().css("color", 'yellow');
    $ep2.hide();
    $ep3.hide();
    $ep4.hide();
    $ep5.hide();
    $ep6.hide();
    $ep7.hide();
    colorize($ep1);
    $ep1.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '400px' });
    $ep1.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2500);

})



$('#movie-menu li:eq(1)').click(function () {
 $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $(this).css('background-color', 'black');
    $(this).children().css("color", 'yellow');
    $ep1.hide();
    $ep3.hide();
    $ep4.hide();
    $ep5.hide();
    $ep6.hide();
    $ep7.hide();
    colorize($ep2);
    $ep2.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '100px' });
    $ep2.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2500);

})
$('#movie-menu li:eq(2)').click(function () {
 $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $('#movie-menu ul li a').css("color", '#337ab7');
    $(this).css('background-color', 'black');
    $(this).children().css("color", 'yellow');
    $ep1.hide();
    $ep2.hide();
    $ep4.hide();
    $ep5.hide();
    $ep6.hide();
    $ep7.hide();
    colorize($ep3);
    $ep3.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '100px' });
    $ep3.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2500);

})

$('#movie-menu li:eq(3)').click(function () {
 $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $(this).css('background-color', 'black')
    $(this).children().css("color", 'yellow');
    $ep1.hide();
    $ep2.hide();
    $ep3.hide();
    $ep5.hide();
    $ep6.hide();
    $ep7.hide();
    colorize($ep4);
    $ep4.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '100px' });
    $ep4.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2500);
})
$('#movie-menu li:eq(4)').click(function () {
    $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $(this).css('background-color', 'black')
    $(this).children().css("color", 'yellow');
    $ep1.hide();
    $ep2.hide();
    $ep3.hide();
    $ep4.hide();
    $ep6.hide();
    $ep7.hide();
    colorize($ep5);
    $ep5.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '100px' });
    $ep5.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2500);

})

$('#movie-menu li:eq(5)').click(function () {
    $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $(this).css('background-color', 'black')
    $(this).children().css("color", 'yellow');
    $ep1.hide();
    $ep2.hide();
    $ep3.hide();
    $ep4.hide();
    $ep5.hide();
    $ep7.hide();
    colorize($ep6);
    $ep6.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '100px' });
    $ep6.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2500);
})
$('#movie-menu li:eq(6)').click(function () {
     $movieMenu.children().css('background-color', 'white')
    $movieMenu.children().children().css("color", '#337ab7');
    $(this).css('background-color', 'black')
    $(this).children().css("color", 'yellow');
    $ep1.hide();
    $ep2.hide();
    $ep3.hide();
    $ep4.hide();
    $ep5.hide();
    $ep6.hide();
    colorize($ep7);
    $ep7.css({ 'top': 1000, 'position': 'absolute', 'width': 8000, 'font-size': '100px' });
    $ep7.animate({ "opacity": "show", "top": 230, width: 1100, 'font-size': '18px' }, 2000);
})
