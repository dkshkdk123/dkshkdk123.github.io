@charset "utf-8;

<script src="./jquery-1.10.0.js" type="text/javascript"></script>
<script src="jquery.easing.1.3.js"></script>
<script type="text/javascript">
$(document).ready(function(){   //좌우슬라이딩 -3초 좌슬라이딩 인터발
    let n = $("#images > a").length;
    let wd = parseInt($("#region").width());
    let ra = wd*-1;
	
    let itv = setInterval(function(){lslide();},3000);
    $(".rightbtn").click(function(){
        clearInterval(itv);
        lslide();
        itv = setInterval(function(){lslide();}, 3000);
    });
    $(".leftbtn").click(function(){
        clearInterval(itv);
        rslide();
        itv = setInterval(function(){lslide();}, 3000);
    });
function lslide(){
    $("#num_box button").removeClass("on");
    $("#num_box button").eq(0).appendTo($("#num_box"));
    $("#num_box button").eq(0).addClass("on");
    $("#images").not(":animated").animate({"margin-left":ra+"px"}, 1500, function(){
        $("#images > a") .eq(0).appendTo($("#images"));
        $("#images").css("margin-left", "0px");
    });
}
function rslide(){
    $("#num_box button").removeClass("on");
    $("#num_box button").eq(n-1).prependTo($("#num_box"));
    $("#num_box button").eq(0).addClass("on");
    $("#images").css("margin-left",ra+"px");
    $("#images > a").eq(n-1).prependTo($("#images"));
    $("#images").not(":animated").animate({"margin-left":"0px"}, 1500);
}
});
</script>