$(function(){
  var  $topWrapper=$('.top-wrapper'),
       $win=$(window);

    $win.on('load scroll', function(){
      var $value=$(this).scrollTop();
      if($value>100){
        $('.top-logo').fadeIn();
      }else{
        $('.top-logo').fadeOut();
      }
    });
});
