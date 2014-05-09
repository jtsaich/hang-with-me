/*global define*/

define([
    'jquery',
    'backbone',
    'views/authentication'
], function ($, Backbone, AuthView) {
    'use strict';

    var AuthenticationRouter = Backbone.Router.extend({
        routes: {
          'login': 'login'
        },

        login: function() {
            console.log("login...");
            var authView = new AuthView();
            authView.render();
        }

    });

    return AuthenticationRouter;
});
