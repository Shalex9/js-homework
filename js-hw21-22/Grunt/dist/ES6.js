"use strict";

$(function () {
  var test = {
    title: "Тест по программированию",
    questions: ["В каком году крестили Русь?", "Кто открыл Америку?", "Сколько элементов в таблице Менделеева?"],
    answers: [["988г", "998г", "1991г"], ["Джордж Вашингтон", "Христофор Колумб", "Галилео Галилей"], ["113", "118", "126", "133"]],
    variant: ["a", "b", "c", "d"]
  };

  document.getElementById('content');
  content.innerHTML = tmpl("wrapper", test);

  var answers = [[true, false, false], [false, true, false], [false, false, true, false]];

  $("#result").click(function () {
    var current = void 0,
        k = void 0,
        flag = "Тест пройден";
    for (var i = 0; i < 3; i++) {
      k = i + 1;
      current = "#block" + k + " input";
      $(current).each(function (j) {
        if ($(current).eq(j)[0].checked != answers[i][j]) {
          flag = "Опаньки! Тест провален!";
        }
      });
    }
    alert(flag);
  });
});
//# sourceMappingURL=ES6.js.map
