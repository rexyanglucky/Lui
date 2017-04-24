var gulp=require("gulp");
var less = require('gulp-less');
var path = require('path');
var config=require('../config');
var handlerror=require('../custom-error');
//自动添加前缀
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
gulp.task('less',function(){
    gulp.src(config.less.src)
    .pipe(less({plugins:[autoprefix]})).on("success",function(){console.log("123");})
    .pipe(gulp.dest(config.less.dest)).on("error",handlerror);
    
});