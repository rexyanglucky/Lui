var webpack=require("webpack-stream");
var webconfig=require("../webpack.config.js");
var gulp=require("task");
var config=require("../config.js");
gulp.task("webpack",function(){
    gulp.src(config.src)
    .pipe(webpack(webconfig))
    .pipe(gulp.dest(config.dest))
});
