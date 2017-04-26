var gulp=require("gulp");
var gulpsync = require('gulp-sync')(gulp);
var requireDir = require('require-dir');

requireDir('./gulp/task',{ recurse: true});

// gulp.task("default",["less","move-css","move-lib-js","webpack","move-js","watching"]);
// gulp.task("package",["less","move-css","move-lib-js","webpack","move-js","min-css","min-js"]);

gulp.task("default",gulpsync.sync(["clean",["img","copy-dep","less","webpack"],"watching"]));
