'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./styles/*.scss')
   .pipe(concat('style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./styles/*.scss', gulp.series('sass'));
 });