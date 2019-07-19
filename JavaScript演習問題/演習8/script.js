$(function(){

// // メニューの開閉
  $('.main_menu').click(function(){
    $(this).next().slideToggle();
  });

  // 削除プルダウン
  $('#remove_pulldown_main').change(function(){
    var value = $(this).val();
    $('#remove_pulldown_sub').empty('<option>');
    var init = $('<option>').text('メニューを選択してください');
    $('#remove_pulldown_sub').append(init);
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
    var contain_remove = $("#remove_pulldown_main:contains(" + main_menu_name + ")");
    var li = $('<li class="sub_menu" value="' + main_menu_name + '">');
    var text = $('input').val();

// メインディスプレイに表示
    $(contain_menu.siblings('ul')).append(li.text(text));
  });

// サブメニューの削除
  $('#remove_pulldown_sub').change(function(){
    var sub = $(this).val();
    $('.sub_menu').each(function(){
      $('#remove_button').click(function(){
      if(sub === $(this).text()){
        $('sub_menu').val(sub).remove();
      }
    });
  });
});