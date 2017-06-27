System.register(['@angular/core', 'rxjs/Rx', 'rxjs/Observable', './../entities/category', './../config/environment'], function(exports_1, context_1) {
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
    var core_1, Rx_1, Observable_1, category_1, environment_1;
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (category_1_1) {
                category_1 = category_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService() {
                    var _this = this;
                    // Observable navItem source
                    this._navItemSource = new Rx_1.BehaviorSubject(0);
                    this._obsQuestQuantitySource = new Rx_1.BehaviorSubject(0);
                    // Observable navItem stream
                    this.navItem$ = this._navItemSource.asObservable();
                    this.obsQuestQuantity$ = new Observable_1.Observable(function (observer) {
                        //debugger
                        //let timeout = setTimeout(() => {
                        var quantity = _this.getTotalOfQuestionsByCategory2(_this.g_catKey);
                        //	observer.next(quantity);
                        //}, 1000);
                    }); //this._obsQuestQuantitySource.asObservable();
                    this.obsQuestQuantity2$ = new Observable_1.Observable(function (observer) {
                        var count = 0;
                        var interval = setInterval(function () {
                            observer.next(count++);
                        }, 1000);
                        return function () {
                            clearTimeout(interval);
                        };
                    });
                    this.source = Observable_1.Observable.create(function (observer) {
                        observer.onNext(50);
                    });
                    this.ref = new Firebase(environment_1.environment.refFireBase);
                }
                CategoryService.prototype.test2 = function () {
                    this.obsQuestQuantity2$.subscribe(function (value) { return console.log('mueca ' + value); });
                };
                // service command
                CategoryService.prototype.changeNav = function (num_p) {
                    console.log('service ' + num_p);
                    this._navItemSource.next(num_p);
                };
                //getTotalOfQuestionsByCategory(catKey: number) {
                //	console.log('catkey queantity ' + catKey);
                //	this._obsQuestQuantitySource.next(catKey);
                //}
                CategoryService.prototype.getTotalOfQuestionsByCategory2 = function (catKey) {
                    console.log('get total in, cat  ' + catKey);
                    //var servQuestionList[];
                    //var servQuestionList;
                    var servQuestionList = new Array();
                    var g_quantity = 0;
                    var filterChild = 'questions/cat';
                    filterChild += catKey;
                    var group_questions = this.ref.child(filterChild);
                    var _obsQuestQuantitySource2 = new Rx_1.BehaviorSubject(0);
                    this.obsQuestQuantity$ = _obsQuestQuantitySource2.asObservable();
                    //debugger
                    group_questions.once("value", function (snapshot) {
                        snapshot.forEach(function (childSnapshot) {
                            var key = childSnapshot.key();
                            var childData = childSnapshot.val();
                            servQuestionList.push(childData);
                            //debugger
                            g_quantity = g_quantity + 1;
                            console.log('NUMBER ' + g_quantity);
                            //this._obsQuestQuantitySource.next(g_quantity);
                        });
                    });
                    return g_quantity;
                };
                CategoryService.prototype.getAllCategories = function () {
                    //var servCategoryList[];
                    //var servCategoryList;
                    var servCategoryList = new Array();
                    var group_categories = this.ref.child('category/');
                    var newcat;
                    group_categories.once('value', function (snapshot) {
                        var cat_val = snapshot.val();
                        for (var i = 0; i <= cat_val.length - 1; i++) {
                            newcat = new category_1.Category(i, cat_val[i]['name'], cat_val[i]['position']);
                            servCategoryList.push(newcat);
                        }
                    });
                    return Promise.resolve(servCategoryList);
                };
                CategoryService.prototype.getCategoriesByPosition = function (posKey) {
                    //var servCategoryList[];
                    //var servCategoryList;
                    var servCategoryList = new Array();
                    var group_categories = this.ref.child('category/');
                    var intPosKey = parseInt(posKey.toString());
                    group_categories.once('value', function (snapshot) {
                        //debugger
                        snapshot.forEach(function (childSnapshot) {
                            var localCategory = childSnapshot.val();
                            localCategory.position.forEach(function (positionSnapshot) {
                                if (positionSnapshot == posKey) {
                                    servCategoryList.push(localCategory);
                                }
                            });
                        });
                    });
                    return Promise.resolve(servCategoryList);
                };
                CategoryService.prototype.getTotalOfQuestionsByCategory = function (catKey) {
                    var g_quantity;
                    var filterChild = 'questions/cat';
                    filterChild += catKey;
                    var group_questions = this.ref.child(filterChild);
                    return group_questions.once('value').then(function (snapshot) {
                        return snapshot.numChildren();
                    });
                };
                CategoryService.prototype.getHeroesSlowly = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        return setTimeout(resolve, 2000);
                    }) // delay 2 seconds
                        .then(function () { return _this.getAllCategories(); });
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
