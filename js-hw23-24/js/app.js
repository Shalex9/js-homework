requirejs.config({
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'template': {
            exports: 'template'
        }
    }
});
require(
    [   'model',
        'view',
        'controller'
    ],
    function(Model, View, Controller) {

        $(function() {
            var firstToDoList = ['learn JS', 'learn CSS', 'learn HTML'],
                model = new Model(firstToDoList),
                view = new View(model),
                controller = new Controller(model, view);

        });
    }
);
