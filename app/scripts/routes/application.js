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
          console.log('initialize applicationRouter');
          new UserRouter;
          new EventRouter;
        },
    });

    return ApplicationRouter;
});
