## ABOUT THE APP
This app create an questionary about differents positions to apply in HHRR department.

## WHAT TECHNOLOGIES ARE using
- angular2
- gulp
- sass
- liteserver
- browserify
- emailjs
- firebase

## DEPENDENCIES FOR THE PROJECT 
 "dependencies": {
    "@angular/common": "2.0.0-rc.6",
    "@angular/compiler": "2.0.0-rc.6",
    "@angular/compiler-cli": "0.6.0",
    "@angular/core": "2.0.0-rc.6",
    "@angular/forms": "2.0.0-rc.6",
    "@angular/http": "2.0.0-rc.6",
    "@angular/platform-browser": "2.0.0-rc.6",
    "@angular/platform-browser-dynamic": "2.0.0-rc.6",
    "@angular/router": "3.0.0-rc.2",
    "@angular/upgrade": "2.0.0-rc.6",
    "angular2-in-memory-web-api": "0.0.18",
    "bootstrap": "^3.3.6",
    "browser-sync": "^2.18.12",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.11",
    "systemjs": "0.19.27",
    "zone.js": "^0.6.17"
  },
  "devDependencies": {
    "@types/core-js": "^0.9.41",
    "browserify": "^14.3.0",
    "concurrently": "^2.2.0",
    "gulp-angular-templatecache": "^2.0.0",
    "gulp-autoprefixer": "^4.0.0",
    "gulp-minify-html": "^1.0.6",
    "gulp-notify": "^3.0.0",
    "gulp-plumber": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "lite-server": "^2.2.2",
    "node-sass": "^3.9.3",
    "nodemon": "^1.10.2",
    "typescript": "^1.8.10",
    "typings": "^1.5.0",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^3.9.0"
  },

## ABOUT STRUCTURE
APP - FOLDER 
    all the code (.ts files) (modules, services, entities, styles)
        CONFIG - FOLDER:
            config parameters
        ENTITIES - FOLDER:    
            objects, structures
        HOME - FOLDER
            home component where app start, its controlling all the others components 
                category
                question
                user
        JS - FOLDER
            all the libraries and the third party libs.
        SASS - FOLDER 
            all the styles files 
        SERVICES - FOLDER 
            services for modules, differents functions using parameters and returning values
DIST - FOLDER 
    version to publish in the server
GULP - FOLDER
    gulp-tasks to copile and create the dist of the application
        tasks.js - FILE: has tasks for 
            copy files
            build (files, sass, ts, html)
            watch 
            serve (developer version/only run server with the precompiled version) 
            clean
NODE_MODULES - FOLDER
    Libraries for the application
TYPINGS - FOLDER 
    typingsapplication

## RUN INDICATIONS
gulp clean:all - delete all from app and node_modules folders
gulp clean:nm - delete all from node_module folder
gulp clean - delete all from js folder and html (components)

gulp build - make a build for the application 

gulp serve:dev - execute the clean, build and start the server

gulp server:only - run the server, using the precompiled code

# USING FIREBASE

firebase login

firebase deploy -p dist 

**firebase deploy --help
