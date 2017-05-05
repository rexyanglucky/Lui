var webpack = require("webpack");
var webpackstream = require("webpack-stream");
var webconfig = require("../../webpack.config.js");
var gulp = require("gulp");
var named = require('vinyl-named');
var config = require("../config.js");

gulp.task("webpack", function () {
    webpack(webconfig,function (err,states) {

    });
    // gulp.src(config.js.src)
    //     .pipe(named())
    //     .pipe(webpackstream(webconfig))
    //     .pipe(gulp.dest(config.js.dest+"**/"))

});

