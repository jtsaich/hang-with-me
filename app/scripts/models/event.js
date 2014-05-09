/*global define*/

define([
    'underscore',
    'backbone',
    'localStorage'
], function (_, Backbone, LocalStorage) {
    'use strict';

    var EventModel = Backbone.Model.extend({
        defaults: {
          'name': 'default',
          'image_url': 'default',
          'activity': 'default',
          'time': 'default',
          'date': 'default'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return EventModel;
});
