var number = Math.floor(Math.random() * 5);
var answer = parseInt(window.prompt('数当てゲーム。0~5の数字を入力してね。'));
var message;
if(answer === number) {
  message = '当たり！';
} else if(answer < number) {
  message = '残念でした！もっと大きい。';
} else if(answer > number) {
  message = '残念でした！もっと小さい。';
} else {
  message = '0~5の数字を入力してね。';
}
window.alert(message);