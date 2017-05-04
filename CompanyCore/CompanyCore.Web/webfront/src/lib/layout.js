var layout = {
    slider: {
        //显示隐藏侧边栏
        showSlider: function () {
            $(".content-warp").addClass("pc");
            $(".header-nav-warp").addClass("pc");
            this.showMenu();
        }
        ,
        hideSlider: function () {
            $(".content-warp").removeClass("pc");
            $(".header-nav-warp").removeClass("pc");
            this.hideMenu();
        },
        //切换时菜单显示样式
        hideMenu: function () {
            //子菜单
            // $(".slider-nav .nav-ul").hide();
            this.hideAllMenu();
            //箭头
            $(".slider-nav .nav-arrow").hide();
            //内容
            $(".slider-nav .nav-label").hide();
            //图标
            $(".slider-nav .nav-icon").addClass("fa-2x");

        },
        //切换时菜单显示样式
        showMenu: function () {
            //子菜单
            $(".slider-nav .nav-ul").hide();
            this.showChildMenu(".slider-nav>li:first");
            //箭头
            $(".slider-nav .nav-arrow").show();
            //内容
            $(".slider-nav .nav-label").show();
            //图标
            $(".slider-nav .nav-icon").removeClass("fa-2x");

        },

        /*收起展开菜单*/
        toggleMenu: function (item) {
            var arrow = $(item).find(".nav-arrow");
            if (arrow.hasClass("fa-angle-double-up")) {
                this.showChildMenu(item);
            }
            else {
                this.hideChildMenu(item);
            }
        },
        //折叠菜单
        hideChildMenu: function (item) {
            $(item).find("ul").slideUp(100);
            $(item).find(".nav-arrow").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
        },
        //展开菜单
        showChildMenu: function (item) {
            var arrow = $(item).find(".nav-arrow");
            $(item).find("ul").slideDown(100).parent().siblings("li").find("ul").hide();
            $(".slider-nav .nav-arrow").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
            arrow.removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
        },
        hideAllMenu: function () {
            $(".slider-nav .nav-ul").hide();
            $(".slider-nav .nav-arrow").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
        },


    },
    header: {
        closePage: function (item) {
            var liparent = $(item).parent().parent();
            var isactive = liparent.children("a").hasClass("active");
            var linext = liparent.next();
            if (linext&&isactive) {
                linext.children("a").addClass("active");
                $(".main-content-warp").html(linext.html());
            }
            liparent.remove();
        },
        activePage:function (item) {
            var liparent=$(item).parent();
            var isactive = liparent.children("a").hasClass("active");
            if(isactive){return;}
            $(item).addClass("active");
            liparent.siblings().children("a").removeClass("active");
            $(".main-content-warp").html(liparent.html());

        },

    },



};
module.exports = layout;