$(document).ready(function(){
  $('#remove_all').on('click', function(){
    $('#remove_me').remove();
    $('#parent').empty();
  });
});