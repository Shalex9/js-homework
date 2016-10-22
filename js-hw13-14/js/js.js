'use strict;'

// массив вопросов и ответов
var test = {
  title: "Тест по программированию",
  questions: ["В каком году крестили Русь?","Кто открыл Америку?","Сколько элементов в таблице Менделеева?"],
  answers : [["988г","998г","1991г"],
  ["Джордж Вашингтон","Христофор Колумб","Галилео Галилей"],
  ["113","118","126", "133"]],
  variant: ["a", "b", "c", "d"]
}
    console.log("test: ", test);

// Преобразовываем в JSON формат и обратно и записываем в локальное хранилище
var genString = JSON.stringify(test);
localStorage.setItem('str', genString);

genString = localStorage.getItem('str');
    console.log("JSON.stringify: ",genString);

var genSubj = JSON.parse(genString);
    console.log("JSON.parse: ", genSubj);

// Используем jQuery и шаблонизатор
$(function(){
  var content = document.getElementById('content');
  content.innerHTML = tmpl("wrapper", test);
});

// Проверка результатов
$(function(){
  var answers = [
    [true,false,false],
    [false,true,false],
    [false,false,true,false] ];
  $("#result").click(function(){
      var current,k,flag="Тест пройден";
      for (var i=0;i<3;i++){
        k=i+1;
        current ="#block"+ k +" input";
        $(current).each(function(j) {   //просматриваем все инпуты в блоке.
          // console.log("Выбран чекбокс"+[k]+":", $(current).eq(j)[0].checked); //выводим информацию - выбран ли чекбокс.
          // console.log("Правильный ответ:", answers[i][j]);  // выводим информацию -
          if ($(current).eq(j)[0].checked!=answers[i][j]){flag = "Опаньки! Тест провален!";} //если хоть один ответ не совпадает - значит ошибка
        })
      }
      alert(flag);
  });
});
