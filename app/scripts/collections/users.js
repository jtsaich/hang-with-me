/*global define*/

define([
    'underscore',
    'backbone',
    'localStorage',
    'models/user'
], function (_, Backbone, LocalStorage, UserModel) {
    'use strict';

    var UsersCollection = Backbone.Collection.extend({
        localStorage: new LocalStorage('backbone-hangwithme-users'),
        model: UserModel
    });

    return UsersCollection;
});
