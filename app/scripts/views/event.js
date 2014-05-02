/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/event'
], function ($, _, Backbone, JST, EventModel) {
    'use strict';

    var EventView = Backbone.View.extend({
        template: JST['app/scripts/templates/event.ejs'],

        tagName: 'div',

        className: 'row',

        events: {},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return EventView;
});
