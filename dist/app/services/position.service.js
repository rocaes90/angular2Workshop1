System.register(['@angular/core', './../entities/position', './../config/environment'], function(exports_1, context_1) {
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
    var core_1, position_1, environment_1;
    var PositionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            PositionService = (function () {
                function PositionService() {
                    this.ref = new Firebase(environment_1.environment.refFireBase);
                }
                PositionService.prototype.getPositions = function () {
                    //var servPositionsList:any[];
                    //var servPositionsList;
                    var servPositionsList = new Array();
                    var group_positions = this.ref.child('position/');
                    var newpos;
                    group_positions.once('value', function (snapshot) {
                        var posit = snapshot.val();
                        for (var i = 0; i <= posit.length - 1; i++) {
                            newpos = new position_1.Position(i, posit[i].toString());
                            servPositionsList.push(newpos);
                        }
                    });
                    return Promise.resolve(servPositionsList);
                };
                PositionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PositionService);
                return PositionService;
            }());
            exports_1("PositionService", PositionService);
        }
    }
});
