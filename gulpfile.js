'use strict';

var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require("gulp-babel");

var src = {
	js: [
		'./app/**/**.js'
	],
	html: [
		'./app/**/**.html'
	]
};

gulp.task('copy-html', () => {
	return gulp.src(src.html)
		.pipe(gulp.dest('./dest'));
})

gulp.task('default', ['copy-html'], () => {
	return gulp.src(src.js)
		.pipe(sourcemaps.init())
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dest'));
});