var hour = new Date().getHours();

if(hour >= 19 && hour < 21) {
  window.alert('お弁当30%OFF！');
} else if(hour === 9 || hour === 15) {
  window.alert('お弁当1個買ったら1個おまけ！');
} else {
  window.alert('お弁当いかがですか');
}