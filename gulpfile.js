var gulp = require("gulp"),
    jshint = require('gulp-jshint'),//js检测
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');//js压缩
gulp.task("default",["lint","distjs"]);
// gulp.watch()
// 检查js
gulp.task('lint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
gulp.task('distjs', function () {
    gulp.src("js/*.js")
    .pipe(concat('lui.js'))
    .pipe(gulp.dest("dist/js"))
    .pipe(rename({stuffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});