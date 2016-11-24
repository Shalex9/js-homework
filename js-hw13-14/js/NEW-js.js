'use strict;'
$(function(){

  var test = {
    title: 'Тест по программированию',
    variant: ["a", "b", "c", "d"],
    questions: [
      { title: 'Что обозначает директива ‘use strict’?',
        answers: [  'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.',
                    'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.',
                    'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'],
        check: 0
      }, {
        title: 'К какому участку скрипта применяется строгие правила ‘use strict’?',
        answers: [  'Строгие правила работают между директивами ‘use strict’ и ‘strict end’.',
                    'Либо во всем скрипте, либо в отдельной функции.',
                    'Во всем скрипте.'],
        check: 1
      }, {
        title: 'Для чего используется конструкция try-catch в javascript?',
        answers: [  'Для генерирования ошибок.',
                    'В строгом режиме весь код необходимо оборачивать в try-catch.',
                    'Для обработки возможных ошибок.'],
        check: 2
      }
    ]
  };

//localStorage, JSON.stringify, JSON.parse
  // var genString = JSON.stringify(test);
  // localStorage.setItem('str', genString);
  // genString = localStorage.getItem('str');
  // console.log("JSON.stringify: ",genString);
  // var genSubj = JSON.parse(genString);
  // console.log("JSON.parse: ", genSubj);

  var content = document.getElementById('content');
  content.innerHTML = tmpl("wrapper", test);

  $("#result").click(function(){
      var current,k,flag="Тест пройден";
      for (var i=0;i<test.questions.length;i++){
        k=i+1;
        current ="#block"+ k +" input";
        $(current).each(function(j) {
          if ($(current).eq(j)[0].checked!=test.questions[i].check){flag = "Тест провален!";}
        })
      }

      var result = "RESULT: " + flag;
      var modal = $('<div class="modal"><p>' + result + '<p></div>');
      var overlay = $('<div class="overlay"></div>')
      $("body").append(modal);
      $("body").append(overlay);

      overlay.one('click', hideModal);
      modal.one('click', hideModal);

      function hideModal() {
          $('[type=checkbox]').prop("checked", false);
          modal.remove();
          overlay.remove();
      }
  });

  // var d = Object.keys(test).length;                 console.log("Длинна объекта test:", d);
  // var z = test.questions[0].answers;                console.log("Массив ответов в вопросе 1:", z);
  // var f = test.questions[2].answers.length;         console.log("Количество ответов в вопросе 2:", f);
  // console.log("test: ", test);
});
