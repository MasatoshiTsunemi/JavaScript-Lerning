var profile = {名前: 'Mick JS',年齢: 28, 身長: 185, 体重: 65, 趣味: "釣り、ツーリング、家庭菜園"};
var content = window.prompt('マイクさんの何が知りたいですか？(名前、年齢、身長、体重、趣味)');
var message;

// 結果を出力
// ifを使わずに、入力された値から直接結果を出力
document.getElementById('output').textContent = 'マイクさんの'+ content + 'は' + profile[content] + 'です';