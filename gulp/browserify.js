"use strict";

var gulp = require( "gulp" );
var gutil = require( "gulp-util" );
var source = require( "vinyl-source-stream" );
var watchify = require( "watchify" );
var browserify = require( "browserify" );
var routes = require( "./routes" );
var plumber = require( "gulp-plumber" );
var notify = require( "gulp-notify" );
var buffer = require( "vinyl-buffer" );
var uglify = require( "gulp-uglify" );
var sourcemaps = require( "gulp-sourcemaps" );

exports.watch = watch;
exports.development = development;
exports.production = production;

function production() {
  return logger( browserifier( false ), streamProduction );
}

function development() {
  return logger( browserifier( true ), streamDevelopment );
}

function watch() {
  var b = watchify( browserifier( true ) );
  b.on( "update", function() {
    streamDevelopment( b );
  } );
  return logger( b, streamDevelopment );
}

function logger( b, stream ) {
  b.on( "log", gutil.log );
  b.on( "error", gutil.log.bind( gutil, "Browserify Error" ) );
  return stream( b );
}

function browserifier( debug ) {
  return browserify( routes.scripts.main, {
    debug: debug,
    fullPaths: true
  } );
}

function streamDevelopment( b ) {
  return toWrite( compile( b ) );
}

function streamProduction( b ) {
  var comp = compile( b );
  comp.pipe( uglify() );
  return toWrite( comp );
}

function compile( b ) {
  function announce( err ) {
    notify( "Browserify Error" );
    this.emit( "end" );
    gutil.log( err );
  }

  return b.bundle().on( "error", announce )
    .pipe( plumber( {
      errorHandler: notify.onError( "Error: <%= error.message %>" )
    } ) )
    .pipe( source( "logic.js" ) )
    .pipe( buffer() )
    .pipe( sourcemaps.init( {loadMaps: true} ) );
}

function toWrite( stream ) {
  return stream
  .pipe( sourcemaps.write( "./" ) )
  .pipe( gulp.dest( "./dist" ) );
}
