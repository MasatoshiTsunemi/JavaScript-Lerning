$(function(){

// クリックしたメニューの開閉
  $('.main_menu').click(function(){
    $($(this).children()[0]).slideToggle();
  });

  // 削除プルダウン
  $('#remove_pulldown_main').change(function(){
    var value = $(this).val();


    // サブメニューの削除プルダウンの初期化
    $('#remove_pulldown_sub').empty('<option>');
    $('#remove_pulldown_sub').append($('<option>').text('メニューを選択してください'));

    // サブメニューの削除プルダウンに条件一致したものを表示
    $('.sub_menu').each(function(index, sub_menu){
      var values = $(sub_menu).attr('value');
      if(value === values){
        $('#remove_pulldown_sub').append($('<option>').text($(sub_menu).text()));
      }
    });
  });

// サブメニューの追加
  $('#add_button').click(function(){

    // 追加するサブメニューのタグとクラス名とバリューの値とテキストを作成
    var li = $(`<li class="sub_menu" value="${$('select').val()}">${$('input').val()}</li>`);

//  メインディスプレイに追加
    $($(".main_menu#"+ $('select').val())).children().append(li);

    // 削除プルダウンの更新
    $('#remove_pulldown_main').trigger('change');

    // サブメニュー追加フォームの初期化
    $('#form').val('');
  });

// サブメニューの削除
  $('#remove_button').click(function(){

    // メインメニュープルダウン選択されているバリューを取得
    var main = $('#remove_pulldown_main option:selected').attr('value');

    // サブメニュープルダウン選択されているテキストを取得
    var sub = $('#remove_pulldown_sub option:selected').text();

    // 条件に一致するサブメニューを削除
    $('.sub_menu').each(function(){
      var li_val = $(this).attr('value');
      var li_text = $(this).text();
      if(main === li_val && sub === li_text){
        $(this).remove();

        // 削除プルダウンの更新
        $('#remove_pulldown_main').trigger('change');
      }
    });
  });

});