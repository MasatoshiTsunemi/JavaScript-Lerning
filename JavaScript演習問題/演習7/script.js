// 背景変更
$(function(){
  $('.square').click(function(){
    $('body').attr('id', this.id);
  });
});