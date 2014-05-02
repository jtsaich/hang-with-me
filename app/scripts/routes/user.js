/*global define*/

define([
    'jquery',
    'backbone',
    'views/users'
], function ($, Backbone, UsersView) {
    'use strict';

    var UserRouter = Backbone.Router.extend({
        routes: {
          'users':       'index',
          'users/:id':   'show',
          'users/add':   'add'
        },

        index: function() {
          console.log("UserRouter index");
          $("li.active").removeClass('active');
          $("#users-link").addClass('active');
          var users = [
            { 'username': 'jack' },
            { 'username': 'dan' }
          ];
          var usersView = new UsersView(users);
          usersView.render();
        },

        show: function(id) {
          console.log("UserRouter show");
        },

        add: function() {
          console.log("UserRouter add");
        }

    });

    return UserRouter;
});
