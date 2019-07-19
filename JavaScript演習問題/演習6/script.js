$(function(){

// モーダルを開く
  $('#here').on('click', function(){
    $('#modal_content').fadeIn('slow');
    $('#modal_overlay').fadeIn('slow');
  });
});

// モーダルを閉じる
$('#modal_overlay, #modal_close').unbind().click(function(){
  $('#modal_content, #modal_overlay').fadeOut('slow', function(){
    $('#modal_overlay').remove;
// テキスト内の文字を消す
    $('input[name="chname"]').val('');
  });
});

// 書き込み
$('#write').on('click', function(){
  if($('input[name="chname"]').val() == ''){
    return ;

  } else{
    $('#display').text($('input[name="chname"]').val() + 'さん、こんにちは');
    $('#modal_content, #modal_overlay').fadeOut('slow', function(){
      $('#modal_overlay').remove;
    });
  }
});