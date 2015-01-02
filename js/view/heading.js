var app = app || {};

(function(){
    "use strict";

    app.HeadingView = Backbone.View.extend({
        events: {
            "click": "toggleCompleted"
        },
        initialize: function(){
            console.log(this.el);

            this.listenTo(this.model, 'change', this.toggleHeading);
        },
        toggleHeading: function(){
            this.$el.toggle();
            console.log(JSON.stringify(this.model));
        },
        toggleCompleted: function(){
            this.model.toggle();
        }
    });
})();