var webpack = require("webpack-stream");
var webconfig = require("../webpack.config.js");
var gulp = require("gulp");
var named = require('vinyl-named');
var config = require("../config.js");
gulp.task("webpack", function () {
    gulp.src(config.js.src)
        .pipe(named())
        .pipe(webpack(webconfig))
        .pipe(gulp.dest(config.js.dest))
});

