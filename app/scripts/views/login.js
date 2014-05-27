/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],
        tagName: 'div',
        id: '',
        el: $('#main'),

        className: '',
        events: {},

        initialize: function () {
            console.log('view page');
            //this.listenTo(this.model, 'change', this.render);
        },

       
        render: function () {
            console.log('render');
            this.$el.html(this.template());
            return this;
        },
     
    });
    // window.activeSession = new SessionModel();
    // console.log('authorized after create (should be false):', window.activeSession.isAuthorized());
    return LoginView;
});

// (function (d) {
//         var js, id = 'facebook-jssdk',
//           ref = d.getElementsByTagName('script')[0];
//         if (d.getElementById(id)) {
//           return;
//         }
//         js = d.createElement('script');
//         js.id = id;
//         js.async = true;
//         js.src = "//connect.facebook.net/en_US/all.js";
//         ref.parentNode.insertBefore(js, ref);
//       }(document));


//       window.fbAsyncInit = function () {
//         FB.init({
//           appId: '691023744289828',
//           status: true, // check login status
//           cookie: true, // enable cookies to allow the server to access the session
//           xfbml: true // parse XFBML
//         });

//         FB.getLoginStatus(function (response) {
//           console.log('FB resp:', response, response.status);
//           /* Bind event handler only after Facebook SDK had a nice cup of coffee */
//           $('#btnLogin').on('click', function () {
//             window.activeSession.login({
//               before: function () {
//                 console.log('before login()')
//               },
//               after: function () {
//                 console.log('after login()')
//               }
//             });
//           });
//         });

//       };
//   }
