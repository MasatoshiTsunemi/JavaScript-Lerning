var todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for (var i = 0; i < todo.length; i++) {
  var li = document.createElement('li');
  li.textContent = todo[i];
  document.getElementById('list').appendChild(li);
}
