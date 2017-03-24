var gulp = require("gulp"),
    jshint = require('gulp-jshint'), //js检测
    concat = require('gulp-concat'), //文件合并
    rename = require('gulp-rename'), //重命名
    less = require('gulp-less'), //less2css
    minifyCss = require('gulp-minify-css'), //css压缩
    rev = require('gulp-rev'), //css 文件名 md5
    revCollector = require('gulp-rev-collector'), //路径替换
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'); //js压缩
var gulpsync = require("gulp-sync")(gulp);
gulp.task("default", gulpsync.sync(["clean", "lint", "imgdist-dev","distjs-dev", "less2css-dev"]));
gulp.task("package", gulpsync.sync(["clean", "lint", "imgdist","less2css", "distjs", "revhtml"]));




gulp.task('distjs', function() {
    gulp.src("js/*.js")
        .pipe(concat('lui.js'))
        .pipe(gulp.dest("dist/js"))
        .pipe(rename("lui.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/rev"));
    gulp.src("js/demo/*.js")
        .pipe(gulp.dest("dist/js/demo"))
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/demo'))
        .pipe(rev())
        .pipe(gulp.dest('dist/js/demo'))
        .pipe(rev.manifest()).pipe(rename("rev-manifest-main.json"))
        .pipe(gulp.dest("dist/rev"));
});

/**css */
gulp.task("less2css", ["imgdist"], function() {
    gulp.src("less/*.less")
        .pipe(less())
        .pipe(concat("luicom.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(rename("luicom.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest("dist/css"))
        .pipe(rev())
        .pipe(gulp.dest("dist/css"))
        .pipe(rev.manifest()).pipe(rename("rev-manifest-css.json"))
        .pipe(gulp.dest("dist/rev"));


});
/**版本化 */
gulp.task("revhtml", function() {
    gulp.src(["dist/rev/*.json", "html/*.html"])
        .pipe(revCollector())
        .pipe(gulp.dest("html"));
});
/**img */
gulp.task("imgdist", function() {
    gulp.src("img/*.*").pipe(gulp.dest("dist/img"));
});



/************************************************dev***********************************/
gulp.task('distjs-dev', function() {
    gulp.src("js/*.js")
        .pipe(concat('lui.js'))
        .pipe(gulp.dest("dist/js"));
    gulp.src("js/demo/*.js")
        .pipe(gulp.dest("dist/js/demo"));
});

/**css */
gulp.task("less2css-dev", function() {
    gulp.src("less/*.less")
        .pipe(less())
        .pipe(concat("luicom.css"))
        .pipe(gulp.dest("dist/css"));
              console.log("less");

});

/**img */
gulp.task("imgdist-dev", function() {
    gulp.src("img/*.*").pipe(gulp.dest("dist/img"));
    console.log("imgdist-dev");
});

/**watch */
gulp.task("watch", function() {
    // gulp.watch("js/*.js", ["default"]);
});
/****************************************** 检查js*********************************/
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
/*******************************************clean **********************************/
gulp.task("clean", function() {
    gulp.src("dist").pipe(clean());
});