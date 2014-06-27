/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'parse',
    'views/profile',
    'models/profile'
], function ($, _, Backbone, JST, Parse, ProfileView) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],
        tagName: 'div',
        id: '',
        el: $('#main'),

        className: '',
        events: {
            'click #fb_button': 'checkLoginState',
            'click #sign_in': 'signIn',
            'click #register_new_account': 'signUp',
            'click #log_out': 'logOut',
            'login #fbb': 'checkLoginState',
        },

        initialize: function () {
            console.log('view page');
            window.fbAsyncInit = function() {
                console.log('fbAsyncInit');
                Parse.FacebookUtils.init({
                  appId      : '691023744289828',
                  cookie     : true,  // enable cookies to allow the server to access 
                                // the session
                  xfbml      : true,  // parse social plugins on this page
                  version    : 'v1.0' // use version 2.0
                });

                Parse.FacebookUtils.logIn(null, {
                  success: function(user) {
                    if (!user.existed()) {
                      alert("User signed up and logged in through Facebook!");
                    } else {
                      alert("User logged in through Facebook!");
                    }
                    new ProfileView()
                  },
                  error: function(user, error) {
                    alert("User cancelled the Facebook login or did not fully authorize.");
                  }
                });

                // FB.getLoginStatus(function(response) {
                //   //this.statusChangeCallback(response);
                //     console.log('statusChangeCallback');
                //     console.log(response);
                //     if (response.status === 'connected') {
                //       // Logged into your app and Facebook.
                //       //testAPI();
                //         console.log('Welcome!  Fetching your information.... ');
                //         FB.api('/me', function(response) {
                //             console.log(response);
                //             console.log('Successful login for: ' + response.name);
                            
                //             var username = response.name;
                //             var password = response.name;
                //             var user = new Parse.User();
                //             user.set("username", username);
                //             user.set("password", password);
                           
                //             user.signUp(null, {
                //                 success: function(user) {
                //                   alert("success");
                //                 },
                //                 error: function(user, error) {
                //                   alert("Error: " + error.code + " " + error.message);
                //                 }
                //             });
                          
                //             document.getElementById('status').innerHTML =
                //             'Thanks for logging in, ' + response.name + '!';
                //         });
                //     } else if (response.status === 'not_authorized') {
                //       // The person is logged into Facebook, but not your app.
                //       document.getElementById('status').innerHTML = 'Please log ' +
                //         'into this app.';
                //     } else {
                //       // The person is not logged into Facebook, so we're not sure if
                //       // they are logged into this app or not.
                //       document.getElementById('status').innerHTML = 'Please log ' +
                //         'into Facebook.';
                //     }
                // });
            };
            // Load the SDK asynchronously
            (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "http://connect.facebook.net/en_US/all.js";
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
                //this.statusChangeCallback(response);
                console.log('statusChangeCallback');
                console.log(response);
                if (response.status === 'connected') {
                  // Logged into your app and Facebook.
                  //testAPI();
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
            });
        },
        // statusChangeCallback: function(response){
        //     console.log('statusChangeCallback');
        //     console.log(response);
        //     if (response.status === 'connected') {
        //       // Logged into your app and Facebook.
        //       testAPI();
        //     } else if (response.status === 'not_authorized') {
        //       // The person is logged into Facebook, but not your app.
        //       document.getElementById('status').innerHTML = 'Please log ' +
        //         'into this app.';
        //     } else {
        //       // The person is not logged into Facebook, so we're not sure if
        //       // they are logged into this app or not.
        //       document.getElementById('status').innerHTML = 'Please log ' +
        //         'into Facebook.';
        //     }
        // },

        // testAPI: function() {
        //     console.log('Welcome!  Fetching your information.... ');
        //     FB.api('/me', function(response) {
        //       console.log(response);
        //       console.log('Successful login for: ' + response.name);
        //       var username = response.name;
        //       var password = response.name;
        //       var user = new Parse.User();
        //       user.set("username", username);
        //       user.set("password", password);

               
        //       user.signUp(null, {
        //         success: function(user) {
        //           alert("success");
        //         },
        //         error: function(user, error) {
        //           alert("Error: " + error.code + " " + error.message);
        //         }
        //     });
              
        //       document.getElementById('status').innerHTML =
        //         'Thanks for logging in, ' + response.name + '!';
        //     });
        // },

        signUp: function(e){
            e.preventDefault();
            var form = $("form")[1];
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
                alert("Error: " + error.code + " " + error.message);
              }
            });
        },

        signIn: function(e) {
            e.preventDefault();
            var form = $("form")[0];
            var username = form.username.value;
            var password = form.password.value;
            Parse.User.logIn(username, password, {
                success: function(user) {
                  alert("sucess");
                  // profileModel = new ProfileModel();
                  // profileModel.set({
                  //   username: username,
                  //   email: Parse.User.current().getEmail(),
                  // });
                  window.location.href = '/#profile';
                  // new ProfileView();
                  // delete this;
                },

                error: function(user, error) {
                  alert("Error: " + error.code + " " + error.message);
                }
          });
        },

        logOut: function(e){
            Parse.User.logOut();
            new LoginView();

        }
    });
    return LoginView;
});


