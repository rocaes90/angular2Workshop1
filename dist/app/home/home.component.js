System.register(['@angular/core', './../entities/category', './../services/position.service', './../services/question.service', './../services/category.service', './question/question-form.component', './category/category-form.component', './../config/environment'], function(exports_1, context_1) {
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
    var core_1, category_1, position_service_1, question_service_1, category_service_1, question_form_component_1, category_form_component_1, environment_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_1_1) {
                category_1 = category_1_1;
            },
            function (position_service_1_1) {
                position_service_1 = position_service_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (question_form_component_1_1) {
                question_form_component_1 = question_form_component_1_1;
            },
            function (category_form_component_1_1) {
                category_form_component_1 = category_form_component_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                //constructor
                function HomeComponent(positionService, questionService) {
                    this.positionService = positionService;
                    this.questionService = questionService;
                    //variables
                    this.title = environment_1.environment.envName;
                    this.currentCategory = 0;
                    this.currentPosition = 0;
                    this.g_correctQuestions = 0;
                    this.g_incorrectQuestions = 0;
                    this.g_selectedQuestion = '';
                    this.showContainer2 = false;
                    this.showContainer = true;
                    //input/out
                    this.userInfoCorrect = false;
                    this.catForHome = category_1.Category;
                }
                HomeComponent.prototype.inputUserInfo = function (pUserInfo) {
                    this.userInfoCorrect = pUserInfo;
                    if (pUserInfo == false) {
                        this.showContainer2 = true;
                        this.showContainer = false;
                    }
                };
                HomeComponent.prototype.inputCategory = function (pCategory) {
                    this.currentCategory = pCategory.id;
                    //this.questionService.getQuestionsByCategory(pCategory.id).
                    //	then(questions => this.Questions = questions);
                    //console.log('-- ' + pCategory.id);
                    this.questionFormChild.LoadQuestionByCategoryPosition(pCategory.id, pCategory.index, 0);
                };
                HomeComponent.prototype.inputCategoryFinished = function (pCategoryFinished) {
                    this.catFinished = pCategoryFinished;
                    this.categoryFormChild.AddCategoryFinished(pCategoryFinished);
                };
                HomeComponent.prototype.inputCorrectQuestions = function (pCorrectQuestions) {
                    this.g_correctQuestions = pCorrectQuestions;
                };
                HomeComponent.prototype.inputIncorrectQuestions = function (pIncorrectQuestions) {
                    this.g_incorrectQuestions = pIncorrectQuestions;
                };
                HomeComponent.prototype.inputSelectedQuestion = function (pSelectedQuestion) {
                    this.g_selectedQuestion = pSelectedQuestion;
                    console.log(pSelectedQuestion + "in home");
                };
                HomeComponent.prototype.inputShowMessage = function (pShowMessage) {
                    this.showMessage = pShowMessage;
                    this.questionFormChild.showMessageFinal(pShowMessage);
                };
                HomeComponent.prototype.inputQuestQuantity = function (pQuestQuantity) {
                    this.questQuantity = pQuestQuantity;
                    console.log('Quantity of questions by Category: ' + this.questQuantity);
                };
                HomeComponent.prototype.inputPosition = function (pPosition) {
                    this.currentPosition = pPosition;
                };
                //functions
                HomeComponent.prototype.ngOnInit = function () {
                    this.getPositions(this.Positions);
                };
                HomeComponent.prototype.getPositions = function (positions) {
                    var _this = this;
                    //debugger
                    this.positionService.getPositions().then(function (positions) { return _this.Positions = positions; });
                };
                HomeComponent.prototype.onSelectPosition = function (position) {
                    console.log('position');
                    this.selectedPosition = position;
                };
                HomeComponent.prototype.sendok = function () {
                    this.showContainer2 = false;
                    this.showContainer = true;
                };
                HomeComponent.prototype.ButtonClick = function () {
                    this.name = name;
                };
                __decorate([
                    core_1.ViewChild(question_form_component_1.QuestionFormComponent), 
                    __metadata('design:type', question_form_component_1.QuestionFormComponent)
                ], HomeComponent.prototype, "questionFormChild", void 0);
                __decorate([
                    core_1.ViewChild(category_form_component_1.CategoryFormComponent), 
                    __metadata('design:type', category_form_component_1.CategoryFormComponent)
                ], HomeComponent.prototype, "categoryFormChild", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HomeComponent.prototype, "userInfoCorrect", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HomeComponent.prototype, "catForHome", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], HomeComponent.prototype, "catFinished", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], HomeComponent.prototype, "showMessage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], HomeComponent.prototype, "questQuantity", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], HomeComponent.prototype, "posForHome", void 0);
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        styleUrls: ['./app/css/styles.css'],
                        //styleUrls: ['./app/css/home.component.css'],
                        templateUrl: './app/home/home.component.html',
                        //templateUrl: './app/templates.js',
                        inputs: ['name'],
                        providers: [position_service_1.PositionService, question_service_1.QuestionService, category_service_1.CategoryService, question_form_component_1.QuestionFormComponent, category_form_component_1.CategoryFormComponent]
                    }), 
                    __metadata('design:paramtypes', [position_service_1.PositionService, question_service_1.QuestionService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
