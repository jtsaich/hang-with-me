/*global define*/

define([
    'jquery',
    'backbone',
    'views/login'
], function ($, Backbone, LoginView) {
    'use strict';

    var LoginRouter = Backbone.Router.extend({
        routes: {
          'login':'index'
        },



        index: function() {
             console.log('LogIndex');
            // $("li.active").removeClass('active');
            // $("#home-link").addClass('active');
            var loginView = new LoginView();
            loginView.render();
        },
    });

    return LoginRouter;
});
