/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var EventModel = Backbone.Model.extend({
        url: '',

        defaults: {
          'name': 'default',
          'image_url': 'default',
          'eventName': 'default',
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
