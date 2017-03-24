var gulp=require('gulp');
var less=require('gulp-less');
var cssmin = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config=require('../config').less;
gulp.task('less',function(){
	return gulp.src(config.src)
	.pipe(less())
	.on('error', handleErrors)
	.pipe(gulp.dest(config.dest))
});
gulp.task('minless',function(){
	return gulp.src(config.src)
	.pipe(less()).pipe(cssmin())
	.on('error', handleErrors)
	.pipe(gulp.dest(config.dest))
});