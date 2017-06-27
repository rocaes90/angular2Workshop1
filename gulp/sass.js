"use strict";
var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
var gulpif = require( "gulp-if" );
var gutil  = require( "gulp-util" );
var routes = require( "./routes" );
var rename = require( "gulp-rename" );
var plumber = require( "gulp-plumber" );
var notify   = require( "gulp-notify" );
var cleanCSS = require( "gulp-clean-css" );
var browserSync = require( "browser-sync" );
var sourcemaps  = require( "gulp-sourcemaps" );
var autoprefixer = require( "gulp-autoprefixer" );
//var Promise      = require( "es6-promise" ).Promise;
var reload = browserSync.reload;

exports.development = development;
exports.production = production;

function development() {
  return compiler( false )
  .pipe( reload( {
    stream: true
  } ) );
}

function production() {
  return compiler( true );
}

function compiler( minify ) {
    
    gutil.log('COMPILER!' + routes.sass.main )
  return gulp.src( [ routes.sass.main ] )
    .pipe( plumber( {
      errorHandler: notify.onError( "Error: <%= error.message %>" )
    } ) )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .on( "error", sass.logError )
    .pipe( autoprefixer() )
    .pipe( gulpif( minify, cleanCSS()  ) )
    .pipe( sourcemaps.write( ) )
    .pipe( rename( "styles.css" ) )
    .pipe( gulp.dest( "dist/app/css/" ) )
    .on( "error", function( e ) {
      gutil.log( e );
      this.emit( "end" );
    } );
}