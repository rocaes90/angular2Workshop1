System.register(['@angular/core', './../config/environment'], function(exports_1, context_1) {
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
    var core_1, environment_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this.ref = new Firebase(environment_1.environment.refFireBase);
                }
                //insertUser(pUser: User) {
                //var ref = new Firebase(environment.refFireBase+'user.json');
                //var ref;
                //var group_user = ref.child('user/');	
                //var localId = pUser.id;    
                //debugger
                //var txt = JSON.stringify(pUser)
                //group_user.setValue(txt);
                //Map<string, string> userMap= new HashMap<string,string>();
                //JSONObject tempObject = new JSONObject();
                //tempObject.put("birthday","1992");
                //tempObject.put("fullName","Emin AYAR");
                //userMap.put("myUser", txt);
                //group_user.setValue(userMap);
                //group_user.set(txt);
                //console.log(txt);
                //ref.push().set({
                //	txt
                //});
                //	id: pUser.id,
                //    name: pUser.name,
                //	position: pUser.position,
                //    score: pUser.score		    			
                //});		
                //}
                UserService.prototype.insertUser = function (pUser) {
                    var group_user = this.ref.child('user/');
                    var localId = pUser.id;
                    //debugger
                    group_user.push().set({
                        id: pUser.id,
                        name: pUser.name,
                        position: pUser.position,
                        score: pUser.score
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
