$( () => {
  let test = {
    title: "Тест по программированию",
    questions: ["В каком году крестили Русь?","Кто открыл Америку?","Сколько элементов в таблице Менделеева?"],
    answers : [["988г","998г","1991г"],
    ["Джордж Вашингтон","Христофор Колумб","Галилео Галилей"],
    ["113","118","126", "133"]],
    variant: ["a", "b", "c", "d"]
  }

  document.getElementById('content');
  content.innerHTML = tmpl("wrapper", test);

  let answers = [
    [true,false,false],
    [false,true,false],
    [false,false,true,false] ];

  $("#result").click( () => {
      let current,k,flag="Тест пройден";
      for (var i=0;i<3;i++){
        k=i+1;
        current ="#block"+ k +" input";
        $(current).each( j => {
          if ($(current).eq(j)[0].checked!=answers[i][j]){flag = "Опаньки! Тест провален!";}
        })
      }
      alert(flag);
  });
});
