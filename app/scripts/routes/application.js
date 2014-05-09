/*global define*/

define([
    'jquery',
    'backbone',
    'models/application',
    'views/application',
    'routes/authentication',
    'routes/user',
    'routes/event'
], function ($, Backbone, ApplicationModel, ApplicationView, 
    AuthenticationRouter, UserRouter, EventRouter) {
    'use strict';

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
        },

        initialize: function() {
          console.log('initialize applicationRouter');
          new AuthenticationRouter;
          new UserRouter;
          new EventRouter;
        },
    });

    return ApplicationRouter;
});
