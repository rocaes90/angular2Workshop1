System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, name, position, score, categories) {
                    this.id = id;
                    this.name = name;
                    this.position = position;
                    this.score = score;
                    this.categories = categories;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
