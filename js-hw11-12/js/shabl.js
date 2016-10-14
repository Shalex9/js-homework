$(function(){
  var byMe = $('#test').html();

  var info = [
    {
      title: '<h1>ШЕВЧУК АЛЕКСАНДР АНДРЕЕВИЧ</h1><div class="foto"><img src="img/foto.jpg" alt="my foto" /></div>',
      content: 'Работаю по утеплению фасадов и ремонты квартир'
    },
    {
      title: 'Я учу фронтенд, потому что:',
      content: '<ul><li>Работа в этой сфере оценивается и оплачивается лучше</li><li>Комфортные и безопасные для здоровья условия работы</li><li>Есть возможность работать на дому</li></ul>'
    },
    {
      title: 'Мой контактный телефон:',
      content: '+38093 9112459'
    },
    {
      title: 'Мой профиль в фейсбуке:',
      content: '<a href="https://www.facebook.com/alex.smile.12?ref=tn_tnmn">facebook</a>'
    },
    {
      title: 'Моя АКЦИЯ:',
      content: 'Могу утеплить вам дом, по расценкам айтишников - 20$/час ;)'
    },
  ];

  var content = tmpl(byMe, {data: info});

   $('body').append(content);
});
