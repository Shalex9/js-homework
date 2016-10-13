var header = document.createElement("h2");
      header.innerHTML = "Тест по программированию";
      header.style.textAlign = "center";
      header.style.fontFamily = "Arial";
    document.body.appendChild(header);

var divs =  [];
var g;
for (g = 1; g < 4; g++) {
    var question = document.createElement("div");
    question.className = "divs"+g;
    var spanQuestion = document.createElement("span");
    spanQuestion.className = "spanQuestion";
    spanQuestion.innerHTML = g+". Вопрос №"+g;
    question.appendChild(spanQuestion);
          var block = [];
          for (var b = 1; b < 4; b++) {
              block[b] = document.createElement('div');
              block[b].className = "blockdiv block"+g+"_"+b;
                          var chek = document.createElement('input');
                          chek.className = "check checkbox"+g+"_"+b;
                          chek.type = "checkbox";
                          block[b].appendChild(chek);
                          var text = document.createElement('span');
                          text.className = "text";
                          text.innerHTML = "Вариант ответа №"+b;
                          block[b].appendChild(text);
              question.appendChild(block[b]);
          }
    document.body.appendChild(question);
}

var footer = document.createElement('a');
      footer.className = 'footer';
      footer.innerHTML = "Проверить мои результаты";
      footer.setAttribute('href', 'http://google.com');
    document.body.appendChild(footer);
