System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category;
    return {
        setters:[],
        execute: function() {
            Category = (function () {
                function Category(id, name, position, index) {
                    this.id = id;
                    this.name = name;
                    this.position = position;
                    this.index = index;
                }
                return Category;
            }());
            exports_1("Category", Category);
        }
    }
});
