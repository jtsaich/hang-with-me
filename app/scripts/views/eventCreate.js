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
            'click #add': 'addEvent',
        },

        initialize: function () {
            this.collection = new EventsCollection();
            this.collection.fetch();
            console.log('initialize EventCreateView...');
            console.log('collection: after init' + JSON.stringify(this.collection.toJSON()));
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        addEvent: function (e) {
            //debugger;
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
            var event = new EventModel(formData);
            this.collection.add(event);
            event.save();
            console.log('collection after add: ' + JSON.stringify(this.collection.toJSON()));
            Backbone.history.navigate('events', true);

        },

        toggleActivity: function(e) {
            $('#activity-btn').html($(e.target).text());
            $('#activity-btn').val($(e.target).text());
        }

    });

    return EventCreateView;
});
