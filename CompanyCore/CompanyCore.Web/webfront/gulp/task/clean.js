var gulp=require("gulp");
var clean = require('gulp-clean');
var path=require('path');
var config=require("../config");
gulp.task("clean",function(){
    console.log(config.clean.dir);
    gulp.src(config.clean.dir).pipe(clean());
})