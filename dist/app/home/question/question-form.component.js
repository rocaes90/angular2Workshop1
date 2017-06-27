System.register(['@angular/core', './../../services/question.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, question_service_1;
    var QuestionFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            }],
        execute: function() {
            QuestionFormComponent = (function () {
                //constructor
                function QuestionFormComponent(questionService) {
                    this.questionService = questionService;
                    //var define
                    this.title = 'QUESTIONS';
                    this.isActive = 99;
                    this.cur_orderQuestion = 0;
                    this.cur_categoryQuestion = 0;
                    this.cur_categoryIndex = 0;
                    this.g_showMessageFinal = false;
                    this.g_correctQuestions = 0;
                    this.g_incorrectQuestions = 0;
                    this.g_isCorrect = false;
                    this.g_actualQuestion = '';
                    this.g_currentQuestion = '';
                    this.g_answerSelected = false;
                    this.g_showDivNoAnswer = false;
                    this.outCategoryFinished = new core_1.EventEmitter();
                    this.outCorrectQuestions = new core_1.EventEmitter();
                    this.outIncorrectQuestions = new core_1.EventEmitter();
                    this.outSelectedQuestion = new core_1.EventEmitter();
                    //functions
                    this.values = [];
                    this.g_currentQuestion = '';
                    this.g_actualQuestion = '';
                    console.log('currentQuestion CLEANED!');
                }
                QuestionFormComponent.prototype.inputQuestQuantity = function (pQuestQuantity) {
                    this.inpQuestQuantity = pQuestQuantity;
                };
                QuestionFormComponent.prototype.ngOnInit = function () {
                };
                QuestionFormComponent.prototype.loadQuestion = function () {
                };
                QuestionFormComponent.prototype.onSelectAnswer = function (question, answ, pIndex) {
                    this.g_answerSelected = true;
                    this.g_showDivNoAnswer = false;
                    for (var x = 0; x <= question.answ.length - 1; x++) {
                        this.g_isCorrect = false;
                        if (question.answ[x].toString() == answ && question.correct == x) {
                            this.g_isCorrect = true;
                            status = 'correct';
                            this.g_actualQuestion = '<tr><td>' + question.quest + '</td><td> ' + answ + ' </td><td style="background-color:#8EC642";></td></tr>';
                            break;
                        }
                        else {
                            this.g_isCorrect = false;
                            this.g_actualQuestion = '<tr><td>' + question.quest + '</td><td> ' + answ + ' </td><td style="background-color:#cc2f2f";></td></tr>';
                            status = 'incorrect';
                        }
                    }
                    console.log('selected: ' + answ + ' -- index: ' + pIndex);
                    console.log('status: ' + status);
                    this.isActive = pIndex;
                    //this.valobs.subscribe(value => {console.log(value)});
                    //let subscription = this.valuetest.subscribe(
                    //    value => this.valtest = value,
                    //    error => this.anyErrors = true,
                    //    () => this.finished = true
                    //);
                };
                QuestionFormComponent.prototype.LoadQuestionsByCategory = function (pCategory) {
                    var _this = this;
                    //debugger
                    //alert('hello world' + pCategory );
                    this.questionService.getQuestionsByCategory(pCategory).
                        then(function (questions) { return _this.Questions = questions; });
                };
                QuestionFormComponent.prototype.LoadQuestionByCategoryPosition = function (pCategory, pCategoryIndex, pOrderQuestion) {
                    var _this = this;
                    //debugger
                    //alert('hello world' + pCategory );
                    this.cur_categoryQuestion = pCategory;
                    this.cur_orderQuestion = pOrderQuestion;
                    this.cur_categoryIndex = pCategoryIndex;
                    this.isActive = 99;
                    this.questionService.getQuestionByCategoryPosition(this.cur_categoryQuestion, pOrderQuestion).
                        then(function (questions) { return _this.Questions = questions; });
                };
                QuestionFormComponent.prototype.nextQuestion = function () {
                    if (this.g_answerSelected) {
                        this.g_showDivNoAnswer = false;
                        this.g_answerSelected = false;
                        if (this.g_isCorrect) {
                            this.g_correctQuestions++;
                        }
                        else {
                            this.g_incorrectQuestions++;
                        }
                        this.g_currentQuestion += this.g_actualQuestion;
                        //debugger
                        this.g_isCorrect = false;
                        this.cur_orderQuestion += 1;
                        this.outCorrectQuestions.emit(this.g_correctQuestions);
                        this.outIncorrectQuestions.emit(this.g_incorrectQuestions);
                        this.outSelectedQuestion.emit(this.g_currentQuestion);
                        //console.log(this.g_currentQuestion.quest);
                        //debugger
                        this.LoadQuestionByCategoryPosition(this.cur_categoryQuestion, this.cur_categoryIndex, this.cur_orderQuestion);
                        if (this.cur_orderQuestion >= this.inpQuestQuantity) {
                            this.setCategoryFinal(this.cur_categoryIndex);
                        }
                    }
                    else {
                        this.g_showDivNoAnswer = true;
                    }
                };
                QuestionFormComponent.prototype.setCategoryFinal = function (p_categoryQuestion) {
                    //alert('CATEGORY FINISHED');
                    //debugger
                    this.outCategoryFinished.emit(p_categoryQuestion);
                    this.showMessageFinal(true);
                };
                QuestionFormComponent.prototype.showMessageFinal = function (p_showMessage) {
                    this.g_showMessageFinal = p_showMessage;
                    if (p_showMessage) {
                        this.LoadQuestionByCategoryPosition(99, 99, 0);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], QuestionFormComponent.prototype, "inpCatKey", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], QuestionFormComponent.prototype, "inpQuestQuantity", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuestionFormComponent.prototype, "outCategoryFinished", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuestionFormComponent.prototype, "outCorrectQuestions", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuestionFormComponent.prototype, "outIncorrectQuestions", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuestionFormComponent.prototype, "outSelectedQuestion", void 0);
                QuestionFormComponent = __decorate([
                    core_1.Component({
                        selector: 'question-form',
                        styleUrls: ['./app/css/styles.css'],
                        //styleUrls: ['./app/css/question-form.component.css'],    
                        //templateUrl: './app/templates.js',
                        templateUrl: './app/home/question/question-form.component.html',
                        providers: [question_service_1.QuestionService]
                    }), 
                    __metadata('design:paramtypes', [question_service_1.QuestionService])
                ], QuestionFormComponent);
                return QuestionFormComponent;
            }());
            exports_1("QuestionFormComponent", QuestionFormComponent);
        }
    }
});
