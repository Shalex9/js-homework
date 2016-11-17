var unitTest13_14 = {
  sum: function (a, b) {
    return a+b;
  }
  question1: function () {
          $("#result").click(function(){
              var current, flag="Тест пройден";
              for (var i=0;i<3;i++){
                current ="#block1 input";
                $(current).each(function(j) {
                  if ($(current).eq(j)[0].checked!=answers[i][j]){flag = "Опаньки! Тест провален!";}
                })
              }
              alert(flag);
          });
  }
  // question2: function () {
  //
  // },
  // question3: function () {
  //
  // }
}

try {
  module.exports = unitTest13_14;
} catch (e) {}
