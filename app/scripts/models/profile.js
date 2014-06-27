/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProfileModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
          username: 'defaults',
          email: 'defaults',
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return ProfileModel;
});
