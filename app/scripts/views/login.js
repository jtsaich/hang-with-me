/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    //'parse'
], function ($, _, Backbone, JST) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],
        tagName: 'div',
        id: '',
        el: $('#main'),

        className: '',
        events: {
            'click #fb_button': 'checkLoginState',
            'click #register_new_account': 'signUp',
            //'click fb:login-button': 'checkLoginState',
        },

        initialize: function () {
            console.log('view page');
            window.fbAsyncInit = function() {
                console.log('fbAsyncInit');
                FB.init({
                  appId      : '691023744289828',
                  cookie     : true,  // enable cookies to allow the server to access 
                                // the session
                  xfbml      : true,  // parse social plugins on this page
                  version    : 'v2.0' // use version 2.0
                });

                FB.getLoginStatus(function(response) {
                  this.statusChangeCallback(response);
                });
            };
            // Load the SDK asynchronously
            (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "http://connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

        },

       
        render: function () {
            console.log('render');
            this.$el.html(this.template());
            return this;
        },

        // fbLogin: function(e) {
        //     alert("fbLogin");
        // }

        checkLoginState: function (e) {
            console.log("fbLogin");
            FB.getLoginStatus(function(response) {
                console.log("check status");
                this.statusChangeCallback(response);
            });
        },
        statusChangeCallback: function(response){
            console.log('statusChangeCallback');
            console.log(response);
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().
            if (response.status === 'connected') {
              // Logged into your app and Facebook.
              testAPI();
            } else if (response.status === 'not_authorized') {
              // The person is logged into Facebook, but not your app.
              document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
            } else {
              // The person is not logged into Facebook, so we're not sure if
              // they are logged into this app or not.
              document.getElementById('status').innerHTML = 'Please log ' +
                'into Facebook.';
            }
        },

        testAPI: function() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
              console.log(response);
              console.log('Successful login for: ' + response.name);
              var username = response.name;
              var password = response.name;
              var user = new Parse.User();
              user.set("username", username);
              user.set("password", password);

               
              user.signUp(null, {
                success: function(user) {
                  alert("success");
                },
                error: function(user, error) {
                  alert("Error: " + error.code + " " + error.message);
                }
            });
              
              document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
            });
        },

        signUp: function(e){
            e.preventDefault();
            var form = $("form")[0];
            var username = form.username.value;
            var password = form.password.value;
            var phone = form.phone.value;
            var email = form.email.value;

            console.log("Username: " + username + " Password: " + password + " email:" + email + " phone:" + phone);
            alert("Username: " + username + " Password: " + password);

            var user = new Parse.User();
            user.set("username", username);
            user.set("password", password);
            user.set("email", email);
            user.set("phone", phone);
             
            user.signUp(null, {
              success: function(user) {
                alert("success");
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
              }
            });
        }
    });
    // window.activeSession = new SessionModel();
    // console.log('authorized after create (should be false):', window.activeSession.isAuthorized());
    return LoginView;
});


