/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        parse: {
            deps: ['jquery', 'underscore'],
            exports: 'Parse'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        localStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        parse: '//www.parsecdn.com/js/parse-1.2.18.min'
    }
});

require(['parse'], function(Parse) {
    Parse.initialize("xuROB68PlE33z0TszYi0neUHZpfjeD9S9pjsipbX", "xGDkvNETnceI3fAexHfcZAsZ7A23FkXa2h3aIsH2");
});

require([
    'backbone', 'routes/application'
], function (Backbone, ApplicationRouter) {
    var appRouter = new ApplicationRouter(); 
    Backbone.history.stop();
    Backbone.history.start();

});
