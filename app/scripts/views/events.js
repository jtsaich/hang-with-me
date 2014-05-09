/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/events',
    'views/event'
], function ($, _, Backbone, JST, EventsCollection, EventView) {
    'use strict';

    var EventsView = Backbone.View.extend({
        template: JST['app/scripts/templates/events.ejs'],

        el: $('#main'),

        events: {},

        initialize: function () {
            this.collection = new EventsCollection();
            this.collection.fetch();
            console.log('initialize EventsView...');
            console.log('collection: ' + JSON.stringify(this.collection.toJSON()));
        },

        render: function () {
            this.$el.empty();
            this.collection.each( function(event) {
                this.renderEvent(event);
            }, this );
        },

        renderEvent: function(event) {
            var eventView = new EventView({
                model: event
            });
            this.$el.append(eventView.render().el);
        }

    });

    return EventsView;
});
