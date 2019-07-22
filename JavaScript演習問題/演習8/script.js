$(function(){

// クリックしたメニューの開閉
  $('.main_menu').click(function(){
    var slide = $(this).children()[0];
    $(slide).slideToggle();
  });

  // 削除プルダウン
  $('#remove_pulldown_main').change(function(){
    var value = $(this).val();

    // サブメニューの削除プルダウンの初期化
    $('#remove_pulldown_sub').empty('<option>');
    var init = $('<option>').text('メニューを選択してください');
    $('#remove_pulldown_sub').append(init);

    // サブメニューの削除プルダウンに条件一致したものを表示
    $('.sub_menu').each(function(index, sub_menu){
      var values = $(sub_menu).attr('value');
      if(value === values){
        var option = $('<option>').text($(sub_menu).text());
        $('#remove_pulldown_sub').append(option);
      }
    });
  });

// サブメニューの追加
  $('#add_button').click(function(){
    var main_menu_name = $('select').val();
    var contain_menu = $(".main_menu:contains(" + main_menu_name + ")");
    var li = $('<li class="sub_menu" value="' + main_menu_name + '">');
    var text = $('input').val();

//  メインディスプレイに表示
    $(contain_menu).children().append(li.text(text));

    // 削除プルダウンの更新
    $('#remove_pulldown_main').trigger('change');

    // サブメニュー追加フォームの初期化
    $('#form').val('');
  });

// サブメニューの削除
  $('#remove_button').click(function(){
    var main = $('#remove_pulldown_main option:selected').text();
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