/*global define*/

define([
    'jquery',
    'backbone',
    'views/events',
    'views/eventCreate'
], function ($, Backbone, EventsView, EventCreateView) {
    'use strict';

    var EventRouter = Backbone.Router.extend({
        routes: {
            'events': 'index',
            'events/add': 'create'
        },

        index: function() {
            console.log('eventsIndex');
            $("li.active").removeClass('active');
            $("#home-link").addClass('active');
            var events = [
              {'eventName': 'Coffee'},
              {'eventName': 'Jogging'}
            ];
            var eventsView = new EventsView(events);
            eventsView.render();
        },

        show: function() {
        },

        create: function() {
            console.log('eventsCreate');
            $("li.active").removeClass('active');
            $("#new-event-link").addClass('active');
            var eventCreateView = new EventCreateView();
            eventCreateView.render();
        }

    });

    return EventRouter;
});
