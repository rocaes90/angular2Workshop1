## ABOUT THE APP
I develop this app to learn about angular2, I also was working with: Sass, Gulp, Firebase and emailjs. 
I was looking for a required App in my actual job, so I create a questionary, with differents positions to apply in HHRR department, each positions has a number of questions (like a wizard). When the user resolve all the categories he can send a email with the result, to a configured email.

### To test the APP
Actually its hosted in Firebase: [Recruitment App - Angular2 : (https://recruitment-1b951.firebaseapp.com)](https://recruitment-1b951.firebaseapp.com)

## WHAT TECHNOLOGIES ARE USING
```
- angular2
- gulp
- sass
- liteserver
- browserify
- emailjs
- firebase
- ES6
```

## DEPENDENCIES FOR THE PROJECT 
```
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
```

## ABOUT STRUCTURE
```
1. APP - FOLDER: all the code (.ts files) (modules, services, entities, styles)
    1. CONFIG - FOLDER: config parameters
    2. ENTITIES - FOLDER: objects, structures
        1. HOME - FOLDER: home component where app start, its controlling all the others components 
            1. category
            2. question
            3. user
        2. JS - FOLDER: all the libraries and the third party libs.
        3. SASS - FOLDER: all the styles files 
        4. SERVICES - FOLDER: services for modules, differents functions using parameters and returning values
2. DIST - FOLDER: version to publish in the server
3. GULP - FOLDER: gulp-tasks to copile and create the dist of the application
        1. tasks.js - FILE: has tasks for 
            1. copy files
            2. build (files, sass, ts, html)
            3. watch 
            4. serve (developer version/only run server with the precompiled version) 
            5. clean
4. NODE_MODULES - FOLDER: Libraries for the application
5. TYPINGS - FOLDER: typingsapplication
```

## RUN INDICATIONS

#### gulp clean commands 
```
gulp clean:all - delete all from app and node_modules folders
gulp clean:nm - delete all from node_module folder
gulp clean - delete all from js folder and html (components)
````
#### gulp build command
```
gulp build - make a build for the application 
```
#### gulp server command
```
gulp serve:dev - execute the clean, build and start the server
gulp server:only - run the server, using the precompiled code
```

# USING FIREBASE
Commands for firebase 
```
~firebase login
~firebase deploy -p dist 
~**firebase deploy --help
```
