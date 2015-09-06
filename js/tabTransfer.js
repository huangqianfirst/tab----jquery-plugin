$(function(){
$('.nav-ul').movebg();
});
$.fn.extend({
movebg:function(){
$(this).delegate('li','click',function(){
    var elem=$(this);
    var indexNum=elem.index()+1;
    
    console.log(indexNum);
    var offsetX=elem[0].offsetLeft;
    var offsetY=elem[0].offsetTop;
     
    $('.moveBg').animate({
      left:offsetX,
      top:offsetY
    },500,function(){
       $('.panel').addClass('hide');
        var targetDiv=$('.panel')[indexNum-1];
        $(targetDiv).toggleClass('hide');
    });
   
});
}
})

