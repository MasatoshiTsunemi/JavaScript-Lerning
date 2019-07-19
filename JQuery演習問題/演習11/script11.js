$(function () {
  var seaCreatures = [
    {
      "名前": "シロギス",
      "学名": "Sillago japonica",
      "説明": "底生魚で、群れを作り外敵から逃れる。摂餌のために砂に潜る。砂浜からの投げ釣り、沖釣りで人気が高い。"
    },
    {
      "名前": "アオリイカ",
      "学名": "Sepioteuthis lessoniana",
      "説明": "外套背長 20 センチ前後。外套膜（身体の周り）を「えんぺら」と呼ぶ鰭が縁取っている。餌木（エギ）と呼ばれる、日本の伝統的なルアーを使った釣りが人気。"
    },
    {
      "名前": "メジナ",
      "学名": "Girella punctata ",
      "説明": "体型は扁平な卵型で、灰色がかった青緑色。クロダイと双璧をなす磯釣りの人気魚種。寄せエサを用いたウキフカセ釣りでねらう。"
    }
  ]

  //ここに処理を追加する
  $.each(seaCreatures, function(index, seaCreature){
    var target = $('<ul class="target">');
    $.each(seaCreature, function(kye, value){
      $(target).append($('<li>').text(kye + ': ' + value));
    });
    $('#fish_guide').append(target);
  });
});