var app = app || {};

(function(){
    app.HeadingStatus = Backbone.Model.extend({
        defaults : {
            "show": true
        },
        initialize: function(){
        },
        toggle: function(){
            var new_set_flag = !this.get("show");
            this.set("show", new_set_flag);
        },
        reset: function(){
            this.set("show", true);
        }
    });
})();