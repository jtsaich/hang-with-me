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

        initialize: function () {
            console.log("UsersView...");
            this.collection = new UsersCollection();
            this.collection.fetch();
            
            /* Create temp fake users
            var newUser = new UserModel({
                loginName: 'dandanbang',
                password: 'blah',
                firstName: 'Daniel',
                lastName: 'Chen',
                email: 'dandanbang@gmail.com'
            });
            
            this.collection.add(newUser);
            newUser.save();
            */

            console.log('users colletion:', JSON.stringify(this.collection));
            this.render();
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
