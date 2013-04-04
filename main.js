$(function(){

  $('img.lazy').lazyload({

    load: reload

  });

  reload();
});

function reload(){
  var $container = $('#container');
  $container.masonry({
    itemSelector : '.item',
    columnWidth : 240,
    isAnimated: true
  });
}
