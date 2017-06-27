System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var environment;
    return {
        setters:[],
        execute: function() {
            exports_1("environment", environment = {
                production: false,
                envName: 'RECRUITMENT SITE',
                //refFireBase: 'https://recruitment-1b951.firebaseio.com' //TEST
                //refFireBase: 'https://recruitmentdemo-d0551.firebaseio.com'//DEMO
                refFireBase: 'https://recruitmentprodigious-1d5e8.firebaseio.com/'
            });
        }
    }
});
