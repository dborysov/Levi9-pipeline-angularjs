'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject');

var src = {
    js: {
        libs: [
            './node_modules/babel-es6-polyfill/browser-polyfill.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js'
        ],
        custom: [
            './app/main.js',
            './app/Services/*.js',
            './app/Controllers/*.js'
        ]
    },
    css: {
        libs: ['./bower_components/bootstrap/dist/css/bootstrap.min.css'],
        custom: []
    },
    html: {
        main: './app/index.html',
        partials: ['./app/partials/*.html']
    }
},
    dest = './dest';

gulp.task('bower-install', () => bower());

gulp.task('copy-html', () => gulp.src(src.html.partials).pipe(gulp.dest(dest + '/partials')));

gulp.task('copy-libs', () => gulp.src(src.js.libs).pipe(gulp.dest(dest)));

gulp.task('compile-js', () =>
    gulp.src(src.js.custom)
        .pipe(sourcemaps.init())
        .pipe(babel( {presets: ['es2015']} ))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest)));

gulp.task('default', ['copy-html', 'bower-install', 'compile-js'], () => {
    var sourceFiles = gulp.src(src.js.libs.concat([dest + '/all.js']).concat(src.css.libs), { read: false });

    return gulp.src(src.html.main)
               .pipe(inject(sourceFiles))
               .pipe(gulp.dest(dest))
});