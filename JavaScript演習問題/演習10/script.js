$(document).ready(function(){

  var all_course_object   // 講座オブジェクトを定義
  var course_number   // オブジェクト数

  // ファイルの読み込み
  $.ajax({url: 'data.json', dataType: 'json'})
  // 正常
  .done(function(data){

    // jsonデータから講座オブジェクトを作成
    all_course_object = data;
    // jsonデータからオブジェクト数を取得
    course_number = data.length;

    $(data).each(function(){

      // 講座作成
      create_seminar(this.id, this.name);

      // crowdedがyesなら、crowdedクラスを追加
      if(this.crowded === 'yes') {
        $('.check').addClass('crowded');
      }
    });
  })
  // エラー
  .fail(function(){
    window.alert('読み込みエラー');
  });

  //クリックされたら空き席状況を表示
  $('.list').on('click', '.check' ,function(){
    console.log($(this).hasClass('crowded'));
    if($(this).hasClass('crowded')) {
      $(this).text('残席わずか').addClass('red');
    } else {
      $(this).text('お席あります').addClass('green');
    }
  });

  // 「新規登録」ボタンをクリックしたときの処理
  $('#sign_up').click(function(){
    // モーダルフェードイン
    modal_fadein();
  });

  // 「編集」ボタンをクリックしたときの処理
  $('.list').on('click', '.edit', function(){
    // モーダルフェードイン
    modal_fadein();

    // marker_editクラスを追加
    $(this).parent('li').addClass('marker_edit');

    // 処理する講座名をtextに表示
    $('#text').val(all_course_object[$(this).parent('li').attr('value')].name);
  });

  // 「登録する」ボタンをクリックしたときの処理
  $('#entry').click(function(){
    // エンターキー無効化
    enter();

    // validation
    if($('#text').val() == ""){
      window.alert("講座名が未入力です");
      return false;
    } else if($('#text').val().length >= 20){
      window.alert("講座名は19文字以内で登録してください");
      return false;
    }

    // 条件を満たしたときの処理
    if($('.seminar').hasClass('marker_edit')){
      // 編集を実行
      $('.marker_edit').children('h2').text(($('#text').val()));

      // 講座オブジェクトに編集を反映
      all_course_object[$('.marker_edit').attr('value')].name = $('#text').val();

    // 条件を満たさなかったときの処理
    } else {
      // 新規登録を実行
      create_seminar(course_number, $('#text').val());

      // 講座オブジェクトに講座の新規登録の情報を反映
      all_course_object.push(
        {"id":String(course_number),
        "name":$('#text').val(),
        "crowded":"no"});
      course_number += 1;
    }
    // モーダルフェードアウト
    modal_fadeout();
  });

  // 「閉じる」ボタンか「モーダルオーバーレイ」をクリックしたときの処理
  $('#close, #modal_overlay').click(function(){
    // モーダルフェードアウト
    modal_fadeout();
  });

  // 「削除ボタン」をクリックしたときの処理
  $('.list').on('click', '.delete', function(){
    if(window.confirm('本当に削除しますか？')){
      $(this).parent('li').remove();

      // 講座オブジェクトに削除を反映
      var selected_id = $(this).parent('li').attr('value');
      $(all_course_object).each(function(index){
        if(this.id === selected_id){
          all_course_object.splice(index,1);
        }
      });
    }
  });

  // ダウンロードボタンをクリックしたときの処理
  $('#download').on('click',function(){

    // ダウンロードデータの作成
    var text = JSON.stringify(all_course_object, null, 2);
    var blob = new Blob([text], {type: "application/json"});

    // ダウンロードリンクの作成
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = 'data';
    a.click();
  });

  // 講座フォームを作成
  function create_seminar(id, name){
    corse_form = $('<li>');
    corse_form.addClass('seminar');
    corse_form.attr('value', id);
    corse_form.append($('<h2>').append(name));
    corse_form.append($("<p class='check'>空き席状況を確認</p>"));
    corse_form.append($("<p class='edit'>編集</p>"));
    corse_form.append($("<p class='delete'>削除</p>"));
    $('.list').append(corse_form);
  }

  // モーダルフェードイン
  function modal_fadein(){
    $('#modal_contents').fadeIn('slow');
    $('#modal_overlay').fadeIn('slow');
  }

  // モーダルフェードアウト
  function modal_fadeout(){
    $('#modal_contents').fadeOut('slow');
    $('#modal_overlay').fadeOut('slow');
    // textフォーム内の文字を消去
    $('#text').val("");
    // seminarクラスからmarker_editクラスを削除
    $('.seminar').removeClass('marker_edit');
  }

  // エンターキー無効化
  document.onkeypress = enter;
  function enter(){
    if( window.event.keyCode == 13 ){
    return false;
    }
  }

});