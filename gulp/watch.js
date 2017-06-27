"use strict";

var gulp = require( "gulp" );
var routes = require( "./routes" );

module.exports = watch;

function watch( ) {
  gulp.watch( routes.scripts.watch, [ "js:hint" ] );
  gulp.watch( routes.sass.watch, [ "build:sass" ] );
  gulp.watch( routes.templates.watch, [ "build:html" ] );
  gulp.watch( routes.resources.main, [ "resources" ] );
}