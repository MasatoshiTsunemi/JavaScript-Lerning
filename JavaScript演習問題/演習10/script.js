$(document).ready(function(){
  //ファイルの読み込み
  $.ajax({url: 'data.json', dataType: 'json'})
  .done(function(data){
    $(data).each(function(){

      // 講座名を表示
      if(this.id === $('li[id]')){
        $('h2').text(this.name);
      }
      
      if(this.crowded === 'yes') {
        var idName = '#' + this.id;
        $(idName).find('.check').addClass('crowded');
      }
    });
  })
  .fail(function(){
    window.alert('読み込みエラー');
  });

  //クリックされたら空き席状況を表示
  $('.check').click(function(){
    if($(this).hasClass('crowded')) {
      $(this).text('残席わずか').addClass('red');
    } else {
      $(this).text('お席あります').addClass('green');
    }
  });

  // 新規登録ボタンか編集がクリックされたらモーダルを開く
  $('#sing_up, .edit').click(function(){
    $('#modal_contents').fadeIn('slow');
    $('#modal_overlay').fadeIn('slow');
  });

  // 閉じるボタンかモーダルオーバーレイがクリックされたらモーダルとモーダルオーバーレイを閉じる
  $('#close, #modal_overlay').click(function(){
    $('#modal_contents, #modal_overlay').fadeOut('slow')

    // モーダルが閉じたらテキスト内の文字を消去
    $('#text').val("");
  });
});