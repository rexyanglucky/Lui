var path = require("path");

module.exports = {
    less: {
        src: path.join(__dirname, "../src/less", "**/*.less"),
        dest: path.join(__dirname, "../bundle/css/"),
    },
    js: {
        src: path.join(__dirname, "../src/js", "**/*.js"),
        dest: path.join(__dirname, "../bundle/js/"),
    },
    img: {
        src: path.join(__dirname, "../src/img/*"),
        dest: path.join(__dirname, "../bundle/img/"),
    },
    dep: {
        src: path.join(__dirname, "../src/dep/*"),
        dest: path.join(__dirname, "../bundle/dep/")
    },
    clean: {dir: path.join(__dirname, "../bundle")},
    src: path.join(__dirname, "../src/js/**/*.js"),
    dest: path.join(__dirname, "../bundle/"),
}