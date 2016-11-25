requirejs.config({
  paths: {
    'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
    'template': 'js/template',
    'model': 'js/model',
    'view': 'js/view',
    'controller': 'js/controller'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'template': {
      exports: 'template'
    }
  }
});

require(
  ['jquery', 'template', 'model', 'view', 'controller'],
  function ($, shablonizator, model, view, controller) {
    var firstToDoList = ['learn JS', 'learn CSS', 'learn HTML'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
    console.log('$', $);
    console.log('model', model);
    console.log('shablonizator', shablonizator);
  }
);
