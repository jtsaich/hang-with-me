/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_compenents/handlebars/handlebars',
    }
});

require([
    'backbone', 'routes/application'
], function (Backbone, ApplicationRouter) {
    var appRouter = new ApplicationRouter(); 
    Backbone.history.start({pushState: true});
  
    $(document).on('click', 'a:not([data-bypass])', function(e) {
      var href = $(this).attr('href');
      var protocol = this.protocol + '//';

      if (href && href.slice(0, protocol.legnth) !== protocol &&
        href.indexOf("javascript:" !== 0)) {
          e.preventDefault();
          Backbone.history.navigate(href, true);
      }
    });
    
});
