/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/event',
    'collections/events',
    'bootstrap'
], function ($, _, Backbone, JST, EventModel, EventsCollection) {
    'use strict';


    var EventCreateView = Backbone.View.extend({
        template: JST['app/scripts/templates/eventCreate.ejs'],

        el: $('#main'),
        
        tagName: 'div',

        className: 'row',

        events: {
            'click .activity-form-group li': 'toggleActivity',
            'click #add': 'addEvent'
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        addEvent: function (e) {
            e.preventDefault();
            var formData = {};

            formData.date = $('#date-form-group').children('input').val();

            formData.time = [];
            $('#time-form-group').find('input').each( function(i, el) {
                if ( $(el).prop('checked') ) {
                    console.log($(el).val());
                    formData.time.push($(el).val());
                }
            } );

            formData.activity = $('#activity-btn').val();

            console.log(JSON.stringify(formData));
            (new EventsCollection()).add(new EventModel(formData));
        },

        toggleActivity: function(e) {
            $('#activity-btn').html($(e.target).text());
            $('#activity-btn').val($(e.target).text());
        }

    });

    return EventCreateView;
});
