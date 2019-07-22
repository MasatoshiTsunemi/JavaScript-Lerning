var fahr = parseInt(window.prompt('華氏温度を入力して下さい。'));

// 華氏から摂氏への変換式
var cel = (5 / 9) * (fahr - 32);

// 小数点第三位を四捨五入して出力
// 桁数を指定して四捨五入するように変更
cel = cel.toFixed(2);
console.log('華氏' + fahr + '°の摂氏温度は' + cel + '℃です。');