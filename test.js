$(document).ready(function () {
jQuery("#move_up").click(function () {
$("#change_me").animate({
    top:30
    },2000);
});
$("move_down").click(function () {
    $("#change_me").animate({
        top:500
    },2000);
});
$("#color").click(function () {
    $("#change_me").css({
        "background color": "yellow",
        "font-weight" : "bolder"});
});
$("#disappear").click(function () {
    $("#change_me").toggle('slow');
})
});