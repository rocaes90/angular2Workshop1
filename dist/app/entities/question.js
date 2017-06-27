System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Question;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(category, correct, quest, answ) {
                    this.category = category;
                    this.correct = correct;
                    this.quest = quest;
                    this.answ = answ;
                }
                return Question;
            }());
            exports_1("Question", Question);
        }
    }
});
