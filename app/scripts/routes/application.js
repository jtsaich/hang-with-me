/*global define*/

define([
    'jquery',
    'backbone',
    'models/application',
    'views/application',
    'routes/authentication',
    'routes/user',
    'routes/event',
    'routes/login'
], function ($, Backbone, ApplicationModel, ApplicationView, 
    AuthenticationRouter, UserRouter, EventRouter, LoginRouter) {
    'use strict';

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
        },

        initialize: function() {
          console.log('initialize applicationRouter');
          //alert("hihi");
          new AuthenticationRouter;
          new UserRouter;
          new EventRouter;
          new LoginRouter;
        },
    });

    return ApplicationRouter;
});
