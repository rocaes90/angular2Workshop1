"use strict";

module.exports = {
  sass: {
    main: "app/sass/main.scss" ,
    watch: "app/sass/*.scss"
  },
  scripts: {
    base: "./app/",
    main: "./app/index.js",
    watch: [ "./app/*.js", "./app/**/*.js" ]
  },
  templates: {
    watch: [ "./app/*.html", "./app/**/*.html" ]
  },
  resources: {
    main: [ "./index.html" ]
  }
};
