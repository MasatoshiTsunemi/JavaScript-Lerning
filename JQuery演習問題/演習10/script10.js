$(function () {
  var profile = { 名前: "ぼのぼの", 歳: 4, 種別: "ラッコ" };

  //ここに処理を追加
$.each(profile, function (key, value) {
  console.log('キーは' + key + '、バリューは' + value);
  $('#bono-profile').append($('<li>').text(key + 'は、' + value));
    });
});