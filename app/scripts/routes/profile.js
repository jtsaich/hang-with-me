/*global define*/

define([
    'jquery',
    'backbone',
    'views/profile',
    'models/profile'
], function ($, Backbone, ProfileView, ProfileModel) {
    'use strict';

    var ProfileRouter = Backbone.Router.extend({
        routes: {
            'profile': 'index',
        },

        index: function() {
            console.log('profile Index');
            var profileModel = new ProfileModel();
            profileModel.set({
                username: Parse.User.current().getUsername(),
                email: Parse.User.current().getEmail(),
            });
            var profileView = new ProfileView({model: profileModel});
            profileView.render();
        },

    });

    return ProfileRouter;
});
