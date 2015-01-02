var app = app || {};

(function(){
    "use strict";

    app.AppView = Backbone.View.extend({
        events: {
            "click .js-console":  "consoleCollection",
            "click .js-reset": "resetAllModel"
        },
        initialize: function(){
            this.$headings = this.$(".js-heading-wrapper");

            this.$headings.each(_.bind(this.addHeadings, this));
        },
        addHeadings: function(index, element){
            var heading_text = $(element).find("h1").text();

            var new_model = new app.HeadingStatus({
                text: heading_text
            });

            this.collection.add(new_model);

            new app.HeadingView({ el: element, model: new_model });
        },
        consoleCollection: function(){
            console.log(JSON.stringify(this.collection));
        },
        resetAllModel: function(){
            this.collection.each(function(model){
                model.reset();
            });
        }
    });
})();