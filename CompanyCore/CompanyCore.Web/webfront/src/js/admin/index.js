var lay = require("../../lib/layout.js");

//slider 绑定事件
$(".slider-nav-toggle-control").click(function () {
    if ($(".content-warp").hasClass("pc")) {
        lay.slider.hideSlider();
    }
    else {
        lay.slider.showSlider();
    }
});
$(".slider-nav>li").mouseover(function () {
    if($(".content-warp").hasClass("pc")){
        return;
    }
    lay.slider.showChildMenu(this);
});
$(".slider-nav>li").mouseleave(function () {
    if($(".content-warp").hasClass("pc")){
        return;
    }
    lay.slider.hideChildMenu(this);
});
$(".slider-nav>li").click(function () {
    if($(".content-warp").hasClass("pc")){
    lay.slider.toggleMenu(this);
    }

});

//header-nav 绑定事件
$(".second-nav .nav-arrow").click(function () {
   lay.header.closePage(this);
});
$(".second-nav>li>a").click(function () {
    lay.header.activePage(this);
});
$(document).click(function () {
    if($(".content-warp").hasClass("pc")){
        return;
    }
    lay.slider.hideAllMenu();
});

