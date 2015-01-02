var app = app || {};

(function(){
    app.HeadingStatus = Backbone.Model.extend({
        defaults : {
            text: "",
            show: true
        },
        initialize: function(){
            this._originalAttributes = this.toJSON();
        },
        toggle: function(){
            var new_set_flag = !this.get("show");
            this.set("show", new_set_flag);
        },
        reset: function(){
            this.set(this._originalAttributes);
            return this;
        }
    });
})();