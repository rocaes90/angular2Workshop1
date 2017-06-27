System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Answer;
    return {
        setters:[],
        execute: function() {
            Answer = (function () {
                function Answer(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Answer;
            }());
            exports_1("Answer", Answer);
        }
    }
});
