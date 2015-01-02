var app = app || {};

(function(){
    "use strict";

    app.HeadingView = Backbone.View.extend({
        events: {
            "click h1": "toggleCompleted"
        },
        // データバインディング設定
        bindings: {
            ":el": {
                observe: "show",
                visible: function(val, options){
                    console.log(val);
                    return !!val;
                }
            },
            ".js-input": {
                observe: "text"
            }
        },
        initialize: function(){
            console.log(this.el);

            this.$h1 = this.$("h1");

            this.addInput();

            // データバインディングを有効化
            this.stickit();

            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'change:text', this.changeText);
        },
        render: function(){
        },
        changeText: function(){
            console.log(this.model.get("text"));
            this.$h1.text(this.model.get("text"));
        },
        addInput: function(){
            this.$el.append('<input type="text" class="js-input">');
        },
        toggleCompleted: function(event){
            this.model.toggle();

            if(event.preventDefault){
                event.preventDefault();
            }
        }
    });
})();