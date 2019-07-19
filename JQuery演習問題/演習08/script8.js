$(function () {
  var menu = ["牛とろ玉うどん", "釜玉うどん", "おろし醤油うどん", "ぶっかけうどん"];
    // ここに処理を追加する
    $.each(menu, function(index, value){
      console.log(index + 1 + '. ' + value);
      $('#menu-list').append($('<li>').text(index + 1 + '. ' + value));
    });
});