var path=require("path");

module.exports={
    less:{
        src:path.join(__dirname,"../src/less","**/*.less"),
        dest:path.join(__dirname,"../bundle/css/"),
    },
    clean:{dir:path.join(__dirname,"../bundle")},
    src:path.join(__dirname,"../src/"),
    dest:path.join(__dirname,"../bundle/"),
}