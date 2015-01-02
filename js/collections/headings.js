var app = app || {};

(function(){
    "use strict";

    app.Headings = Backbone.Collection.extend(function(){
        model: HeadingStatus
    });

    app.headings = new app.Headings();
})();