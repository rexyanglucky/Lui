var gulp=require("gulp");
var config = require("../config.js");

gulp.task("img",function () {
    gulp.src(config.img.src).pipe(gulp.dest(config.img.dest));
});
gulp.task("copy-dep",function () {
    gulp.src(config.dep.src).pipe(gulp.dest(config.dep.dest));
});