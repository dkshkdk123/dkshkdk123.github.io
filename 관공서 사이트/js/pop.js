$(document).ready(function(){
$(".opener_btn").click(function(){
    $("#pop").slideDown(1000);  //fadeIn(), show()
});
$(".close_btn").click(function(){
    $("#pop").slideUp(1000);    //fandOut(),    hide()
});
});