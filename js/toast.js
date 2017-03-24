function LuiToast() {
    //参数
    this.param = undefined;
    this.selector = undefined;
}

LuiToast.prototype = {
    constructor: LuiToast,
    init: function(param) {
        var sthis = this;
        param = param || {};
        param.text = param.text || "弹框成功";
        param.class = param.class || "";
        param.showTime = param.showTime || 2000;
        var luitoast = document.createElement("div");
        luitoast.setAttribute("class", "lui_toast" + " " + param.class);
        var txt = document.createTextNode(param.text);
        luitoast.appendChild(txt);
        this.selector = luitoast;
        sthis.param = param;
        return sthis;
    },
    pop: function(p) {
        var sthis = this;
        if (!this.selector) {
            this.init(p);
        }
        document.body.appendChild(this.selector);
        setTimeout(function() {
            sthis.hide();
        }, this.param.showTime);
        return sthis;

    },
    hide: function() {
        if (this.selector) {
            this.selector.remove();
        }
    }



};