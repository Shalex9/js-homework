$(function(){
  var byMe = $('#test').html();

  var info = [
    {
      title: 'ШЕВЧУК АЛЕКСАНДР АНДРЕЕВИЧ',
      content: 'Работаю по утеплению фасадов и ремонты квартир'
    },
    {
      title: 'Я учу фронтенд, потому что:',
      content: ''
    },
    {
      title: 'Мой контактный телефон:',
      content: '+38093 9112459'
    },
    {
      title: 'Мой профиль в фейсбуке:',
      content: facebook
    },
    {
      title: 'Моя АКЦИЯ:',
      content: 'Могу утеплить вам дом, по расценкам айтишников ;)'
    },
  ];

  var facebook = $('.div_4').html('<a href="https://www.facebook.com/alex.smile.12?ref=tn_tnmn">facebook</a>')

  var content = tmpl(byMe, {data: info});

   $('body').append(content);

   var link = $(".div_4").html('<a href="https://www.facebook.com/alex.smile.12?ref=tn_tnmn">facebook</a>');
   $('body').append(link);
});
