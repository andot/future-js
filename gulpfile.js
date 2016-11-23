/* jshint node:true */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require("gulp-jshint"),
    del = require('del');

gulp.task('clear', function(){
    del(['dist/future.js']);
});

gulp.task('default', ['clear'], function() {
    gulp.src(['utils/regenerator-runtime.js'])
        .pipe(concat('regenerator-runtime.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    gulp.src(['src/wx.js'])
        .pipe(concat('wx.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    return gulp.src(['src/TimeoutError.js',
                     'src/Future.js'])
        .pipe(concat('future.js'))
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});