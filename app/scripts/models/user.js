/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
          username: 'Name',
          password: '',
          lastName: '',
          firstName: '',
          facebook_id: '',
          dateOfBirth: '1980/01/01',
          gender: '',
          phone: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return UserModel;
});
