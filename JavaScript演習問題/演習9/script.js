$(document).ready(function(){
  $.ajax({url: 'data.json', dataType: 'json'})
  .done(function(data){
    $(data).each(function(){
      var countryNames = this.countryName;
      var id = this.id

      // jsonが読み込まれたら、プルダウンに国名が追加
      $('.countries').append($("<option id=" +  id + ">").text(countryNames));
    });
  })
  .fail(function(){
    window.alert('読み込みエラー');
  });

  // プルダウンから国が選択されたら、その国の世界遺産を表示
  $('.countries').change(function(){
    var selectedId = $('option:selected').attr('id');

    // 世界遺産表示の初期化
    $('#heritage').text("");

    // jsonの更新
    $.ajax({url: 'data.json', dataType: 'json'})
    .done(function(data){
      $(data).each(function(){
        var countryId = this.id
        var worldHeritage = this.worldHeritageSiteName

        // boxに世界遺産を表示
        if(selectedId == countryId){
          $('#heritage').text(worldHeritage);
          $('.box').removeClass('hidden');
          return false;
        } else {
          $('.box').addClass('hidden');
        }
      });
    })
  });
});