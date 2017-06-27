System.register(['@angular/core', './../../entities/category', './../../services/category.service'], function(exports_1, context_1) {
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
    var core_1, category_1, category_service_1;
    var CategoryFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_1_1) {
                category_1 = category_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            CategoryFormComponent = (function () {
                //constructor
                function CategoryFormComponent(categoryService) {
                    this.categoryService = categoryService;
                    //var define
                    this.title = 'CATEGORIES';
                    this.active = true;
                    this.model = new category_1.Category(1, 'Name', 0);
                    this.submitted = false;
                    this.isActive = 99;
                    this.g_catsDone = new Array();
                    this.g_valueRef = false;
                    this.outShowMessage = new core_1.EventEmitter();
                    this.outCategory = new core_1.EventEmitter();
                    this.outQuestQuantity = new core_1.EventEmitter();
                }
                CategoryFormComponent.prototype.ngOnInit = function () {
                    this.getCategoriesByPosition();
                };
                CategoryFormComponent.prototype.onSelectCategory = function (category, pIndex) {
                    var _this = this;
                    this.isActive = pIndex;
                    category.index = pIndex;
                    var isComplete = false;
                    console.log('Category selected: ' + category.id);
                    //debugger
                    for (var x = 0; x <= this.g_catsDone.length - 1; x++) {
                        if (pIndex == this.g_catsDone[x]) {
                            isComplete = true;
                            this.outShowMessage.emit(true);
                        }
                    }
                    if (!isComplete) {
                        this.outCategory.emit(category);
                        this.outShowMessage.emit(false);
                        this.categoryService.getTotalOfQuestionsByCategory(pIndex)
                            .then(function (value) { return _this.outQuestQuantity.emit(value); });
                    }
                    //this.outQuestQuantity.emit(this.g_questQuantity);
                };
                CategoryFormComponent.prototype.AddCategoryFinished = function (pFinishedCategory) {
                    //debugger
                    this.g_catsDone.push(pFinishedCategory);
                };
                CategoryFormComponent.prototype.getCategories = function () {
                    var _this = this;
                    this.categoryService.getAllCategories().
                        then(function (servCategoryList) { return _this.CategoryList = servCategoryList; });
                };
                CategoryFormComponent.prototype.getCategoriesByPosition = function () {
                    var _this = this;
                    this.categoryService.getCategoriesByPosition(this.inpPosKey).
                        then(function (servCategoryList) { return _this.CategoryList = servCategoryList; });
                };
                CategoryFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    console.log(this.model);
                };
                CategoryFormComponent.prototype.newHero = function () {
                    this.model = new category_1.Category(42, '', 0);
                };
                CategoryFormComponent.prototype.sendMessage = function () {
                };
                CategoryFormComponent.prototype.SetTotalOfQuestionsByCategory = function (pIndex) {
                    var _this = this;
                    this.subscription = this.categoryService.obsQuestQuantity$
                        .subscribe(function (g_questQuantity) { return _this.g_questQuantity = g_questQuantity; });
                    //this.categoryService.getTotalOfQuestionsByCategory2(pIndex);
                    console.log('return value: ' + this.g_questQuantity);
                    this.outQuestQuantity.emit(this.g_questQuantity);
                };
                CategoryFormComponent.prototype.getQuantityOfQuestions = function (pCategory) {
                    this.outQuestQuantity.emit(this.g_questQuantity);
                };
                CategoryFormComponent.prototype.isComplete = function (i) {
                    //debugger
                    for (var x = 0; x <= this.g_catsDone.length - 1; x++) {
                        console.log('cats done: ' + this.g_catsDone[x]);
                        console.log('indice: ' + i);
                        if (i == this.g_catsDone[x]) {
                            return true;
                        }
                    }
                    return false;
                };
                Object.defineProperty(CategoryFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CategoryFormComponent.prototype, "inpPosKey", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CategoryFormComponent.prototype, "outShowMessage", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CategoryFormComponent.prototype, "outCategory", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CategoryFormComponent.prototype, "outQuestQuantity", void 0);
                CategoryFormComponent = __decorate([
                    core_1.Component({
                        selector: 'category-form',
                        styleUrls: ['./app/css/styles.css'],
                        //styleUrls: ['./app/css/category-form.component.css'],
                        //templateUrl: './app/templates.js',
                        templateUrl: './app/home/category/category-form.component.html',
                        providers: [category_service_1.CategoryService]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], CategoryFormComponent);
                return CategoryFormComponent;
            }());
            exports_1("CategoryFormComponent", CategoryFormComponent);
        }
    }
});
