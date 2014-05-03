/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var EventModel = Backbone.Model.extend({
        //localStorage: new Backbone.LocalStorage('hangwith
        //url: '',

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
