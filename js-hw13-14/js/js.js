'use strict;'

// массив вопросов и ответов
var test = {
  title: "Тест по программированию",
  questions: ["Вопрос №1","Вопрос №2","Вопрос №3"],
  answers : [["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
  ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
  ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"]],
  right:[1,2,1],
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
// var $ques1 = $('.all');
// var $ques2 = $(".block2").find('input');
// var $ques2 = $(".block3").find('input');
//   console.log($ques1);
// $('#result').on('click', function () {
//     event.preventDefault();
//     if($($ques1).prop('checked')) {
//       alert("Вы прошли тест");
//
//     };
// });
