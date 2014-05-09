/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/user'
], function ($, _, Backbone, JST, UserModel) {
    'use strict';

    var UserView = Backbone.View.extend({

        template: JST['app/scripts/templates/user.ejs'],

        tagName: 'div',

        events: {
            'click .user-show': 'renderUserShow'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        renderUserShow: function() {
            console.log("renderUserShow...");
        }
    });

    return UserView;
});
