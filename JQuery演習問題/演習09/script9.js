 $.each($('li'), function (index, element) {
    //繰り返したい処理を記述
    console.log($(element));   //例：要素ごとのテキストデータをコンソールに表示
    // var chan = $(element).text() + '.java';
    $(element).text($(element).text() + '.java');
  });