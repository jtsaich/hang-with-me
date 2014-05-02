/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/users',
    'models/user',
    'views/user'
], function ($, _, Backbone, JST, UsersCollection, UserModel, UserView) {
    'use strict';

    var UsersView = Backbone.View.extend({
        template: JST['app/scripts/templates/users.ejs'],
        
        el: $('#main'),

        events: {},

        initialize: function (users) {
            this.collection = new UsersCollection(users);
        },

        render: function () {
            this.$el.empty();
            this.collection.each( function(user) {
              this.renderUser(user);
            }, this );
        },

        renderUser: function(user) {
            var userView = new UserView({
              model: user
            });
            this.$el.append(userView.render().el);
        }
    });

    return UsersView;
});
