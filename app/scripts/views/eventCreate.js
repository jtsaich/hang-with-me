/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'bootstrap'
], function ($, _, Backbone, JST) {
    'use strict';

    var EventCreateView = Backbone.View.extend({
        template: JST['app/scripts/templates/eventCreate.ejs'],

        el: $('#main'),
        
        tagName: 'div',

        className: 'row',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return EventCreateView;
});
