document.getElementById('form').onsubmit = function() {
  // console.log('クリックされました');
  var search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = '『' + search + '』の検索中...';
  return false;
};