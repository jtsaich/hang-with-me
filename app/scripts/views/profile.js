/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/event',
    'collections/users',
    'models/user',
    'models/profile'
], function ($, _, Backbone, JST, EventModel, UsersCollection, UserModel, ProfileModel) {
    'use strict';

    var ProfileView = Backbone.View.extend({
        //console.log("come in to proile View");
        template: JST['app/scripts/templates/profile.ejs'],

        tagName: 'div',
        className: '',
        el: $('#main'),

        events: {},
        initialize: function () {
            console.log('initialize profile...');
            // var username = Parse.User.current().getUsername();
            // var email = Parse.User.current().getEmail();
        },
        
        render: function () {
            console.log(this.model);
            console.log(this.model.toJSON());
            $(this.el).html(this.template(this.model.toJSON()));

            // var variables = { 
            //     username: "username",
            //     email: "lala",
            // };
            console.log('render profile');
            //this.$el.html(this.template());
            return this;
        },
    });

    return ProfileView;
});
