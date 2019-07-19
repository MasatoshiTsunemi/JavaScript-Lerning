var point = function(num, digit) {
  var time = Math.pow(10, digit);
  return Math.floor(num * time) / time;
}

document.getElementById('output').textContent = point(Math.PI, 2);