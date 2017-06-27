"use strict";

var gulp = require( "gulp" );
var minifyHTML = require( "gulp-minify-html" );
var ngTemplate = require( "gulp-angular-templatecache" );
var routes = require( "./routes" );
var gutil = require( "gulp-util" );
var plumber = require( "gulp-plumber" );
var notify = require( "gulp-notify" );

var ngTemplateOpts = {
  module: require( "../package.json" ).name
};

exports.development = development;
exports.production = production;
exports.copyfiles = copyfiles;
exports.copynm = copynm;

function development() {
  var minifyOpts = {
    empty: true,
    spare: true,
    quotes: true,
    comments: true
  };
  return toCompile( minifyOpts );
}

function production() {
  var minifyOpts = {
    empty: false,
    spare: false,
    quotes: true,
    comments: false
  };
  return toCompile( minifyOpts );
}

function toCompile( minifyOpt ) {
  return gulp.src( routes.templates.watch )
    .pipe( plumber( {
      errorHandler: notify.onError( "Error: <%= error.message %>" )
    } ) )
    .pipe( minifyHTML( minifyOpt ) )
    .pipe( ngTemplate( "templates.js", ngTemplateOpts ) )
    .pipe( gulp.dest( "./dist/app/" ) )
    .on( "error", gutil.log );
}

function copynm () {
    gulp.src('node_modules/@angular/common/bundles/common.umd.js')
        .pipe(gulp.dest('./dist/node_modules/@angular/common/bundles/'))
    gulp.src('node_modules/@angular/compiler/bundles/compiler.umd.js')
        .pipe(gulp.dest('./dist/node_modules/@angular/compiler/bundles/'))
    gulp.src('node_modules/@angular/core/bundles/core.umd.js')
        .pipe(gulp.dest('./dist/node_modules/@angular/core/bundles/'))
    gulp.src('node_modules/@angular/forms/bundles/forms.umd.js')
        .pipe(gulp.dest('./dist/node_modules/@angular/forms/bundles/'))
    gulp.src('node_modules/@angular/platform-browser/bundles/platform-browser.umd.js')
        .pipe(gulp.dest('./dist/node_modules/@angular/platform-browser/bundles/'))
    gulp.src('node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js')
        .pipe(gulp.dest('./dist/node_modules/@angular/platform-browser-dynamic/bundles/'))

    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./dist/node_modules/bootstrap/dist/css/'))

    gulp.src('node_modules/core-js/client/shim.min.js')
        .pipe(gulp.dest('./dist/node_modules/core-js/client/'))

    gulp.src('node_modules/reflect-metadata/Reflect.js')
        .pipe(gulp.dest('./dist/node_modules/reflect-metadata/'))

    gulp.src('node_modules/rxjs/**/*.js')
        .pipe(gulp.dest('./dist/node_modules/rxjs/'))

    gulp.src('node_modules/systemjs/dist/system.src.js')
        .pipe(gulp.dest('./dist/node_modules/systemjs/dist/'))

    gulp.src('node_modules/zone.js/dist/zone.js')
        .pipe(gulp.dest('./dist/node_modules/zone.js/dist/'))
}

function copyfiles () {
    gulp.src('app/js/**/*')
        .pipe(gulp.dest('./dist/app/js/'))  
    gulp.src('systemjs.config.js')
        .pipe(gulp.dest('./dist'))

    gulp.src('index.html')
        .pipe(gulp.dest('./dist'))

    gulp.src('./app/home/category/category-form.component.html')
        .pipe(gulp.dest('./dist/app/home/category/'))
    gulp.src('./app/home/question/question-form.component.html')
        .pipe(gulp.dest('./dist/app/home/question/'))
    gulp.src('./app/home/user/user-form.component.html')
        .pipe(gulp.dest('./dist/app/home/user/'))
    gulp.src('./app/home/home.component.html')
        .pipe(gulp.dest('./dist/app/home/'))
}