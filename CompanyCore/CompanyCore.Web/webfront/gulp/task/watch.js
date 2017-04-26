var gulp=require("gulp");
var config = require("../config.js");
var watch=require('gulp-watch');

gulp.task("watching",function () {
    watch(config.less.src,function(){
        gulp.start('less');
    });
    watch(config.img.src,function(){
        gulp.start('img');
    });
    watch(config.js.src,function(){
        gulp.start('webpack');
    });
    watch(config.dep.src,function(){
        gulp.start('dep');
    });
});