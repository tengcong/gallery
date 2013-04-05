$(function(){

  $('img.lazy').lazyload({
    load: reload
  });

  reload();

  $(".pic").on('click', "img", function(){
    var $image = $(this);
    var url = $image.data('original');

    $('.modal-body>img').attr('src', url);
  });
});

function reload(){
  var $container = $('#container');
  $container.masonry({
    itemSelector : '.item',
    columnWidth : 240,
    isAnimated: true
  });
}
