var addZero = function(num, digit) {
  var numString = String(num);
  while(numString.length < digit) {
    numString = '0' + numString;
  }
  return numString;
}

var songs = [
'Stella By Starlight',
'Starlight Starlight',
'Satin Doll',
'me',
'Flay again',
'Feaver',
'I go wild',
'Bluesette',
'Tomahawk',
'Waltz For Debby'
];
for(var i = 0; i < songs.length; i++) {
  var paragraph = document.createElement('p');
  paragraph.textContent = addZero(i + 1, 2) + '. ' + songs[i];
  document.getElementById('list').appendChild(paragraph);
}