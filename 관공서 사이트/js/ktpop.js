/*2020-09-25 development by kkt in JongroEzen */
(function( $ ){
    $.fn.extend({
       openPop:function(opt1){
           var evTar = opt1.evTar;  //팝업창의 선택자
           var spd = opt1.spd;      //효과의 밀리초단위시간
           if(spd==undefined || spd.isNaN() ){spd=1000;}
           if(evTar==undefined){evTar="#pop";}
            $(this).click(function(){  //".opener_btn" -> this
                $(evTar).fadeIn(spd);  //fadeIn(), show(), slideDown()
                //evTar: "#pop", spd :1000
            });
        },
        closePop:function(opt2){
            var evTar = opt2.evTar;
            var spd = opt2.spd;
            $(this).click(function(){   //".close_btn" -> this
                $(evTar).slideUp(spd);    //fandOut(),    hide()
                //evTar:"#pop", spd:1000
            });
        }
    });
})(jQuery);
/*
(function( $ ){
    $.fn.extend({
      (메서드명) openPop:function(opt1(매개객체)){
           var evTar(옵션변수1) = (매개객체.속성1;)opt1.evTar;
           var spd(옵션변수2) = (매개객체.속성2;)opt1.spd;
            $(this).(이벤트명)click(function(){  //".opener_btn" -> this
                $(evTar(옵션변수1)).fadeIn(spd(옵션변수2));  //fadeIn(), show(), slideDown()
                //evTar: "#pop", spd :1000
            });
        },
        closePop:function(opt2){
            var evTar = opt2.evTar;
            var spd = opt2.spd;
            $(this).click(function(){   //".close_btn" -> this
                $(evTar).slideUp(spd);    //fandOut(),    hide()
           
            });
        }
    });
})(jQuery);

*/ 
/* html 문서에서 적용
<script src = "jquery.js"></script>
<script src = "plugin1.js"></script>
<script>
$(document).ready(function(){
    $("이벤트리스너").메서드명({속성1:"값", 속성2:숫자값});
});
</script>
*/
/*  plugin1.js
(function( $ ){
    $.fn.extend({
        메서드명:function(매개객체){
            var 옵션변수1 = 매개객체.속성1;
            var 옵션변수2 = 매개객체.속성2;
            $(this).이벤트명(function(){  
                $(옵션변수1).fadeIn(옵션변수2);
            });
    });
}) (jQuery);
*/
/* html문서에서 적용  
<script src="jquery.js"></script>
<script src="plugin1.js"></script>
<script>
$(document).ready(function(){
    $("이벤트리스너선택자").메서드명({속성1:"값", 속성2:숫자값});
});
</script>
*/
