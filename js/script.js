var app = app || {};

(function(){
    'use strict';

    new app.AppView({
        el: ".l-wrapper",
        collection: app.headings
    });
})();