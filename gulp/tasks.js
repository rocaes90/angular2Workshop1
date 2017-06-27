
var gulp  = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var ts = require("gulp-typescript");
var tsProject = ts.createProject( "./tsconfig.json" );

gulp.task( "clean", clean );
gulp.task( "clean:nm", cleannm );
gulp.task( "clean:all", [ "clean", "clean:nm" ], function( cb ) {
   return cb();
 } );

gulp.task( "copy:nm", require( "./templates" ).copynm );

gulp.task( "build:files", require( "./templates" ).copyfiles );
gulp.task( "build:sass", require( "./sass" ).development );
gulp.task( "build:ts", buildTS );
gulp.task( "build:html", require( "./templates" ).development );
gulp.task( "build", [ "build:files", "build:sass", "build:ts", "build:html" ], function( cb ) {
   return cb();
 } );

gulp.task( "dist:sass", require( "./sass" ).production );

gulp.task( "watch:js", require( "./browserify" ).watch );
gulp.task( "watch", [ "watch:js" ], require( "./watch" ) );

gulp.task( "serve:only", require( "./server" ) );
gulp.task( "serve:dev", [ "clean", "build", "watch" ], require( "./server" ) );
//gulp.task( "serve:dist", [ "clean", "dist" ], require( "./server" ) );

gulp.task( "default", [ "serve:dev" ] );

// gulp.task( "watch:js", require( "./browserify" ).watch );
// gulp.task( "watch", [ "watch:js" ], require( "./watch" ) );

// gulp.task( "serve:dev", [ "clean", "build", "watch" ], require( "./server" ) );
// gulp.task( "serve:dist", [ "clean", "dist" ], require( "./server" ) );

// gulp.task( "serve", require( "./server" ) );
// gulp.task( "default", [ "serve:dev" ] );

// clean the contents of the distribution directory
function clean( callback ) {
    //return del( "dist/app/**/*" );
    return del( ["dist/app/**/*", "dist/index.html", "dist/systemjs.config.js"] );    
}
function cleannm( callback ) {
    return del( "dist/node_modules/**/*" );
}
// TypeScript compile
function buildTS () {  
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist/app"));
}

//.pipe(sourcemaps.init())          // <--- sourcemaps
//.pipe(sourcemaps.write('.'))      // <--- sourcemaps