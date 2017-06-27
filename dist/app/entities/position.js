System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Position;
    return {
        setters:[],
        execute: function() {
            Position = (function () {
                function Position(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Position;
            }());
            exports_1("Position", Position);
        }
    }
});
