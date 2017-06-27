"use strict";
var browserSync = require( "browser-sync" ).create( "prdgs" );
var historyApiFallback = require("connect-history-api-fallback");

module.exports = servidor;

function servidor( ) {
  return browserSync.init( {
    server: {
      baseDir: "./dist",
      index: "index.html"
    },
    ui: {
      port: 3010,
      weinre: {
        port: 3011
      }
    },
    middleware: [ historyApiFallback() ],
    files: [ "dist/*.css", "dist/*.js", "dist/*.html", "dist/resources/**/*" ],
    online: false,
    notify: true,
    reloadDelay: 2000,
    reloadDebounce: 2000,
    injectChanges: true,
    host: "0.0.0.0",
    logLevel: "warn",
    logPrefix: "browser-sync",
    ghostMode: false
  } );
}