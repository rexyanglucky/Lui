
function LuiWordSpeak() {
    this.selector = "lui_wordspeak";
    //参数
    this.param = {};
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
        var sthis = this;
        param = param || {};
        var luidivspeak = '<div class="lui_div_speak" id="lui_div_speak"/>';
        $("body").append(luidivspeak);
        $(".lui_wordspeak").each(function (index, item) {
            // $(item).unbind("mouseover");
            $(item).unbind("click");
            $(item).bind("click", function () {
                // var soundurl = $(item).attr("data-src");
                sthis.play(item);
            });
        });
        if (param.auto) {
            param.loop = param.loop || 1;
            if (param.loop > 0) {
                $(".lui_wordspeak").each(function (index, item) {
                    sthis.play(item, param.loop,param.interval, param.callback);
                });
            }
        }
        sthis.param = param;
        return sthis;
    },
    //时间间隔
    play: function (item, loop, interval, callback) {
        var sthis = this;
        loop = loop || 1;
        interval = interval || 1000;
        if (loop > 0) {
            var url = $(item).attr("data-src");
            var div = document.getElementById('lui_div_speak');
            div.innerHTML = '<audio id="lui_audio_speak"><source src="' + url + '"></audio>';
            // div.innerHTML = '<embed src="' + url + '" loop="0" autostart="true" hidden="true"></embed>';
            // var emb = document.getElementsByTagName('EMBED')[0];
            // if (emb) {
            //     div.disabled = true;
            // }
            var audio = $("#lui_audio_speak")[0];
            audio.play();
            if (callback) {
                if (loop === 1) {
                    var is_playFinish = setInterval(function () {
                        if (audio.ended) {
                            callback();
                            window.clearInterval(is_playFinish);
                        }
                        setTimeout(function() {
                             window.clearInterval(is_playFinish);
                        }, 10000);
                    }, 5);
                }
            }
            loop--;
        }
        if (loop > 0) {
            setTimeout(function () {
                sthis.play(item, loop - 1,interval,callback);
            }, interval);
        }
        else { return; }
    }

};