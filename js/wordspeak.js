
function LuiWordSpeak() {
    this.selector = "lui_wordspeak";
    //参数
    this.param = {};
    this.play = function (url) {
        var div = document.getElementById('lui_div_speak');
        div.innerHTML = '<embed src="' + url + '" loop="0" autostart="true" hidden="true"></embed>';
        var emb = document.getElementsByTagName('EMBED')[0];
        if (emb) {
            div.disabled = true;
        }
    };
}

LuiWordSpeak.prototype = {
    constructor: LuiWordSpeak,
    /*
     *warpid 容器id
     *data 数据集，json 串 [{name:rex,val:001},{name:lilei,val:002}]
     *展示字段   textField
     *实际值字段 valueField
     *回调函数 callback 参数为当前触发的复选框上绑定的数据
     */
    init: function (param) {
        var sthis=this;
        var luidivspeak = '<div class="lui_div_speak" id="lui_div_speak"/>';
        $("body").append(luidivspeak);
        $(".lui_wordspeak").each(function (index, item) {
            $(item).unbind("mouseover");
            $(item).bind("mouseover", function () {
                var soundurl = $(item).attr("data-src");
                sthis.play(soundurl);
            });
        });
        return sthis;
    }

};