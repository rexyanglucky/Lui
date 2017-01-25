var gulp = require("gulp"),
    jshint = require('gulp-jshint'),//js检测
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//重命名
    less = require('gulp-less'),//less2css
    minifyCss = require('gulp-minify-css'),//css压缩
    rev = require('gulp-rev'),//css 文件名 md5
    revCollector = require('gulp-rev-collector'),//路径替换
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify');//js压缩
gulp.task("default", ["lint", "distjs", "less2css", "revhtml"]);

// 检查js
gulp.task('lint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
gulp.task('distjs', function () {
    gulp.src("js/*.js")
        .pipe(concat('lui.js'))
        .pipe(gulp.dest("dist/js"))
        .pipe(rename("lui.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/rev"))
});

/**css */
gulp.task("less2css", ["imgdist"], function () {
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

})
/**版本化 */
gulp.task("revhtml", function () {
    gulp.src(["dist/rev/*.json", "html/*.html"])
        .pipe(revCollector())
        .pipe(gulp.dest("html"));
})
/**img */
gulp.task("imgdist", function () {
    gulp.src("img/*.*").pipe(gulp.dest("dist/img"));
})

/**watch */
gulp.task("watch", function () {
    gulp.watch("js/*.js", ["default"]);
});

/**clean */
gulp.task("clean",function(){
    gulp.src("dist").pipe(clean())
})