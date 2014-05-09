/*global define*/

define([
    'underscore',
    'backbone',
    'models/event',
    'localStorage'
], function (_, Backbone, EventModel, LocalStorage) {
    'use strict';

    var EventsCollection = Backbone.Collection.extend({
        localStorage: new LocalStorage('backbone-hangwithme-events'),
        model: EventModel
    });

    return EventsCollection;
});
