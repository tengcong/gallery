$(function(){
  var $container = $('#container');
  $container.imagesLoaded(function(){
    $container.masonry({
      itemSelector : '.item',
      columnWidth : 240,
      isAnimated: true
    });
  });
});
