var timeAllocation = ['未明','明け方','朝','昼前','昼過ぎ','夕方','夜の初め頃','夜遅く'];
var hour = parseInt(window.prompt('時刻を入力して下さい(時のみ/24時制)'));
var message;

// 入力時間と結果の条件
// 条件方法を範囲で指定
if(hour <= 2) {
  message = timeAllocation[0];
} else if(hour <= 5) {
  message = timeAllocation[1];
} else if(hour <= 8) {
  message = timeAllocation[2];
} else if (hour <= 11) {
  message = timeAllocation[3];
} else if (hour <= 14) {
  message = timeAllocation[4];
} else if (hour <= 17) {
  message = timeAllocation[5];
} else if (hour <= 20) {
  message = timeAllocation[6];
} else {
  message = timeAllocation[7];
}

// 結果を出力
document.getElementById('output').textContent = hour + '時は' + message + 'です';