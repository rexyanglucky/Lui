var gulp=require('gulp');
var config=require('../config').js;
var webpackConfig=require('../../webpack.config');
/*var WebpackDevServer = require('webpack-dev-server');*/
var webpacks=require('webpack');
var handleErrors = require('../util/handleErrors');
gulp.task('js',["sui-mobile","dep",'zepto'], function () {
    // console.log(config.js)
    return gulp.src(config.js).pipe(gulp.dest(config.dest))
});
gulp.task('sui-mobile',function(){
    return gulp.src("./src/SUI-Mobile/**/*.*").pipe(gulp.dest('./build/dep/SUI-Mobile/'));
});
gulp.task('dep', function () {
   return gulp.src("./src/dep/**/*.*").pipe(gulp.dest('./build/dep/'));
});
gulp.task('zepto', function () {
    return gulp.src(config.zepto).pipe(gulp.dest('./build/js/'));
});
gulp.task('webpack', function () {
    return webpacks(webpackConfig,function(err, stats) {
               // console.log(stats.toString());
    })
});
gulp.task('minjs', function () {
    var min = new webpacks.optimize.UglifyJsPlugin({
        compress: { warnings: false },except: ['$super', '$', 'exports', 'require'],comments: false 
    })
    webpackConfig.devtool='cheap-module-source-map';
    webpackConfig.plugins.push(min);
    console.log(webpackConfig.plugins)
    webpacks(webpackConfig, function (err, stats) {
        //console.log(stats.toString());
    })
});