System.register(['@angular/core', './../../entities/user', './../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_1, user_service_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                //constructor
                function UserFormComponent(userService) {
                    this.userService = userService;
                    //variables  
                    this.model = new user_1.User('1234', 'test', 0, 0);
                    this.submitted = false;
                    this.positionName = '';
                    this.active = true;
                    this.g_correctQuestions = 0;
                    this.g_incorrectQuestions = 0;
                    //g_details = "<h5> ola <br>  Hola Mundo 2 </h5>";
                    this.g_details_start = "<h5>  ";
                    this.g_details_content = "ola";
                    this.g_details_final = "</h5>";
                    //input/out
                    this.outUserInfo = new core_1.EventEmitter();
                    this.outPosition = new core_1.EventEmitter();
                }
                UserFormComponent.prototype.inputPositions = function (pPositions) {
                    this.inpPositions = pPositions;
                };
                //functions
                UserFormComponent.prototype.onSubmit = function () {
                    //debugger
                    for (var x = 0; x <= this.inpPositions.length - 1; x++) {
                        if (x == this.model.position) {
                            this.positionName = this.inpPositions[x].name;
                            break;
                        }
                    }
                    this.submitted = true;
                    this.outUserInfo.emit(true);
                    this.outPosition.emit(this.model.position);
                };
                UserFormComponent.prototype.newUser = function () {
                    this.model = new user_1.User('', '', 0, 0);
                };
                UserFormComponent.prototype.exit = function () {
                    this.submitted = false;
                    this.outUserInfo.emit(false);
                };
                UserFormComponent.prototype.send = function () {
                    //debugger
                    var totalOfQuestions;
                    var score;
                    totalOfQuestions = this.inpCorrectQuestions + this.inpIncorrectQuestions;
                    score = ((100 / totalOfQuestions) * this.inpCorrectQuestions);
                    this.model.score = score;
                    this.userService.insertUser(this.model);
                    this.submitted = false;
                    this.outUserInfo.emit(false);
                    //alert('TEST FINISHED, THANKS FOR YOUR TIME!!!')
                    this.sendEmail(score);
                };
                UserFormComponent.prototype.sendEmail = function (pScore) {
                    this.g_details_content = '<table style="width:100%"><tr><th style="background-color:#f79622; color: white; height: 40px;	font-size: 20px;">Question</th><th style="background-color:#f79622; color: white; height: 40px;	font-size: 20px;">Answer</th><th style="background-color:#f79622; color: white; height: 40px;	font-size: 20px;">Status</th></tr>@' + this.inpSelectedQuestion + ' </table>';
                    //debugger
                    emailjs.send("gmail", "recruitmentmail", {
                        score: parseFloat(pScore.toString()).toFixed(2),
                        id: this.model.id,
                        name: this.model.name,
                        category: this.model.categories,
                        position: this.positionName,
                        details: this.g_details_content
                    });
                };
                Object.defineProperty(UserFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], UserFormComponent.prototype, "outUserInfo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], UserFormComponent.prototype, "outPosition", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], UserFormComponent.prototype, "inpPositions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], UserFormComponent.prototype, "inpCorrectQuestions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], UserFormComponent.prototype, "inpIncorrectQuestions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UserFormComponent.prototype, "inpSelectedQuestion", void 0);
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'user-form',
                        styleUrls: ['./app/css/styles.css'],
                        //styleUrls: ['./app/css/user-form.component.css'],    
                        //templateUrl: './app/templates.js',
                        templateUrl: './app/home/user/user-form.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
