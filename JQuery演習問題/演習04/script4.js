$(document).ready(function() {
  $('#favorite').on('click', function(){
    if($(this).text() === 'お気に入り') {
      $(this).text('お気に入り解除');
    } else {
      $(this).text('お気に入り');
    }
    $('#display').toggleClass('hidden');
  });
});