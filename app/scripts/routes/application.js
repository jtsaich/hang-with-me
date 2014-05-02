/*global define*/

define([
    'jquery',
    'backbone',
    'models/application',
    'views/application',
    'routes/user',
    'routes/event'
], function ($, Backbone, ApplicationModel, ApplicationView, UserRouter, EventRouter) {
    'use strict';

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
        },

        initialize: function() {
          new UserRouter;
          new EventRouter;
          var appView = new ApplicationView({model: new ApplicationModel});
          appView.render();
        },
    });

    return ApplicationRouter;
});
