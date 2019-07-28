$(document).ready(function(){

  var course_object   // 講座オブジェクトを定義
  var course_id   // jsonデータのid

  //ファイルの読み込み
  $.ajax({url: 'data.json', dataType: 'json'})
  .done(function(data){

    // jsonから講座オブジェクトの作成
    course_object = data;
    course_id = data.length

    $(data).each(function(){

      // course_object = {id: '' + this.id + '', name: '' + this.name + '', crowded: '' + this.crowded + ''}

      // 講座名を表示
      var add_li = $("<li class='seminar' id=" + this.id + "></li>");
      var add_h2 = $("<h2> " + this.name + " </h2>");
      var add_p_check = $("<p class='check'>空き席状況を確認</p>");
      var add_p_edit = $("<p class='edit'>編集</p>");
      var add_p_delete = $("<p class='delete'>削除</p>");
      $(add_li).append(add_h2, add_p_check, add_p_edit, add_p_delete);
      $('.list').append(add_li);

      // crowdedがyesなら、crowdedクラスを追加
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
  $('.list').on('click', '.check' ,function(){
    if($(this).hasClass('crowded')) {
      $(this).text('残席わずか').addClass('red');
    } else {
      $(this).text('お席あります').addClass('green');
    }
  });

  // 新規登録ボタンがクリックされたらモーダルを開く
  $('#sign_up').click(function(){
    $('#modal_contents').fadeIn('slow');
    $('#modal_overlay').fadeIn('slow');

    // 新規登録ボタンがクリックされたら、marker_newクラスを追加
    $('.seminar').addClass('marker_new')
  });

  // 登録ボタンがクリックされたら新講座名を表示
  $('#entry').click(function(){

    // textの文字数が１文字以上、20文字以下が入力されていたら新講座名を表示
    if(($('#text').val() !== "") && 
       ($('#text').val().length <= 20) && 
       ($('.seminar').hasClass('marker_new'))){
    var add_li = $("<li class='seminar' id=" + course_id + "></li>");
    var add_h2 = $("<h2> " + $('#text').val() + " </h2>");
    var add_p_check = $("<p class='check'>空き席状況を確認</p>");
    var add_p_edit = $("<p class='edit'>編集</p>");
    var add_p_delete = $("<p class='delete'>削除</p>");
    $(add_li).append(add_h2, add_p_check, add_p_edit, add_p_delete);
    $('.list').append(add_li);

    // 講座オブジェクトに講座の新規登録情報の追加を反映
    course_object.push(
      {"id":String(course_id),
       "name":$('#text').val(),
       "crowded":"no"});

      // 講座オブジェクトidを更新
      course_id += 1;

      // txetに文字が入力されていたら、モーダルを閉じる
      $('#modal_contents, #modal_overlay').fadeOut('slow');
      $('#text').val("");

      // seminarクラスからmarker_newクラスを削除
      $('.seminar').removeClass('marker_new');
    } else {
      window.alert("文字数は1文字以上20文字以下で登録してください")
    }
  });

  // 閉じるボタンかモーダルオーバーレイがクリックされたらモーダルとモーダルオーバーレイを閉じる
  $('#close, #modal_overlay').click(function(){
    $('#modal_contents, #modal_overlay').fadeOut('slow')

    // テキスト内の文字を消去
    $('#text').val("");

    // marker_newとmarker_editクラスを削除
    $('.seminar').removeClass('marker_new');
    $('.seminar').removeClass('marker_edit');
  });

  // 編集ボタンがクリックされたら、モーダルを開く
  $('.list').on('click', '.edit', function(){
    $('#modal_contents').fadeIn('slow');
    $('#modal_overlay').fadeIn('slow');

    // 編集ボタンがクリックされたら、marker_editクラスを追加
    $(this).parent('li').addClass('marker_edit')

    // 現在の講座名をtextに表示
    $('#text').val($($(this).siblings('h2')).text())
  });

  // 登録ボタンのクリックされたら講座名を編集
  $('#entry').click(function(){

    // 条件が成立していれば、講座名を編集
    if(($('#text').val() !== "") && ($('.seminar').hasClass('marker_edit'))){
      $('.marker_edit').children('h2').text(($('#text').val()));

      // 講座オブジェクトに編集を反映
      course_object[$('.marker_edit').attr('id')].name = $('#text').val();


      // 講座名が編集されたら、モーダルを閉じる
      $('#modal_contents, #modal_overlay').fadeOut('slow');
      $('#text').val("");
    }

    // seminarクラスからmarker_editクラスを削除
    $('.seminar').removeClass('marker_edit');
  });


  // 削除ボタンがクリックされたら、その講座名を消去
  $('.list').on('click', '.delete', function(){
    if(window.confirm('本当に削除しますか？')){
      $(this).parent('li').remove();

      var selected_id = $(this).parent('li').attr('id');
      // 講座オブジェクトに削除を反映
      $(course_object).each(function(index){
        if(this.id === selected_id){
          course_object.splice(index,1);
        }
      });
    }
  });


  // ダウンロードボタンがクリックされたら、更新されたjsonファイルをダウンロードする
  $('#download').on('click',function(){   //ダウンロードボタン

    /** ダウンロードデータの作成 **/
    var text = JSON.stringify(course_object, null, 2);
    var blob = new Blob([text], {type: "application/json"});

    /** ダウンロードリンクの作成 **/
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = 'data';
    a.click();
  });
});