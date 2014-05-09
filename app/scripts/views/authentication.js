/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AuthView = Backbone.View.extend({
        template: JST['app/scripts/templates/authentication.ejs'],

        el: $('div.container'),

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log('render loginView...');
            this.$el.html(this.template());
        }
    });

    return AuthView;
});
