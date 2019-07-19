var addZero = function(num, digit) {
  var numString = String(num);
  while(numString.length < digit) {
    numString = '0' + numString;
  }
  return numString;
}

console.log(addZero(6, 2));
