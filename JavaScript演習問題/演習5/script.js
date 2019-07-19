// 単語のオブジェクト
var words = {調べたい単語を選択してください: "", イヌ: "食肉目イヌ科の哺乳類", ネコ: "食肉目ネコ科の哺乳類", ブタ: "偶蹄目イノシシ科", ニワトリ: "キジ目ニワトリ属に属する"};

// 選択した単語の情報を出力
document.getElementById('form').select.onchange = function() {
  document.getElementById('output').textContent = words[this.value];
}