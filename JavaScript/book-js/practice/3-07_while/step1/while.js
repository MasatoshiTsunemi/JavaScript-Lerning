var enemy = 100;
var attack;

window.alert('戦闘スタート！');
while(enemy > 0) {
  attack = Math.floor(Math.random() * 30)+1;
  console.log('モンスターに' + attack + 'のダメージ！');
  enemy = enemy - attack;
}
console.log('モンスターを倒した！');