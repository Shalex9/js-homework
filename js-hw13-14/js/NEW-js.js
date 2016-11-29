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
        arrAnsw: [true, false, false],  // вариант через булеан РАБОТАЕТ!
        trueAnswer: 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.',  // вариант через строку хотелось бы понять
        check: 0  // вариант через цифру-номер чекбокса - кажется самый простой, хотелось бы его понять
      }, {
        title: 'К какому участку скрипта применяется строгие правила ‘use strict’?',
        answers: [  'Строгие правила работают между директивами ‘use strict’ и ‘strict end’.',
                    'Либо во всем скрипте, либо в отдельной функции.',
                    'Во всем скрипте.'],
        arrAnsw: [false, true, false],
        trueAnswer: 'Либо во всем скрипте, либо в отдельной функции.',
        check: 1
      }, {
        title: 'Для чего используется конструкция try-catch в javascript?',
        answers: [  'Для генерирования ошибок.',
                    'В строгом режиме весь код необходимо оборачивать в try-catch.',
                    'Для обработки возможных ошибок.'],
        arrAnsw: [false, false, true],
        trueAnswer: 'Для обработки возможных ошибок.',
        check: 2
      }
    ]
  };
localStorage, JSON.stringify, JSON.parse
  var genString = JSON.stringify(test);
  localStorage.setItem('str', genString);
  genString = localStorage.getItem('str');
  console.log("JSON.stringify: ",genString);
  var genSubj = JSON.parse(genString);
  console.log("JSON.parse: ", genSubj);

  var content = document.getElementById('content');
  content.innerHTML = tmpl("wrapper", test);


  $("#result").click(function(){
      var current,k,flag="Тест пройден";

  var ch = $('check'); console.log('check: ', ch);
      for (var i=0;i<test.questions.length;i++){
        k=i+1;
        current ="#block"+ k +" input";
        $(current).each(function(j) {
          if ($(current).eq(j)[0].checked!=test.questions[i].arrAnsw[j]){flag = "Тест провален!";} //если хоть один ответ не совпадает - значит ошибка
        })
// нерабочие варианты, но в которых хотелось бы разобраться на будущее.
// как сравнить значение инпута со строкой или с номером чекбокса??
        // var ss = $('input:checked').parent().text();                               console.log('ss: ', ss);
        // var gg = $($(current).is(":checked")).parent().text();                 console.log('gg: ', gg);
        // var ff = test.questions[i].answers[test.questions[i].check];            // console.log('ff :', ff);
        // for (var j=0;j<current.length;j++){
        //   if (($(ss).prop("checked")) != ff){flag = "Тест провален!";}
        // }
        // var q1 = test.questions[1].answers[test.questions[1].check];  console.log('q1: ', q1);
        // var ta2 = test.questions[2].trueAnswer;  console.log('ta2: ', ta2);
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
});
