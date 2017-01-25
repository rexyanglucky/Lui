
function LuiCheckBox() {
    this.selector = "luicheck";
    //参数
    this.param = {};
}

LuiCheckBox.prototype = {
    constructor: LuiCheckBox,
    /*
     *warpid 容器id
     *data 数据集，json 串 [{name:rex,val:001},{name:lilei,val:002}]
     *展示字段   textField
     *实际值字段 valueField
     *回调函数 callback 参数为当前触发的复选框上绑定的数据
     */
    init: function (param) {
        var cthis = this;
        if (param && param.group) {
            this.selector = 'luicheck[data-name="' + param.group + '"]';
        }
        this.param = param;
        $(this.selector).each(function (index, item) {
            var ischeckStyle = $(item).attr("data-checked") == 1 ? "check_sel" : "";
            var ischeckshow=$(item).attr("data-showcheckbox")!=1;
           
            var text = $(item).attr("data-text");
            var h = '<i class="icon_check ' + ischeckStyle + ' "></i>';
            var s='<span class="check_text"  onselectstart="return false;" >'+ text + '</span>';
            h=ischeckshow?h+s:s;
            $(item).append(h);
            $(item).css({ "cursor": "pointer" });
            $(item).unbind("click");
            $(item).bind("click", function () {
                var ischeck = $(this).attr("data-checked");
                if (ischeck == 1) {
                    $(this).attr("data-checked", 0);
                    $(this).children("i").removeClass("check_sel");
                }
                else {
                    $(this).attr("data-checked", 1);
                    $(this).children("i").addClass("check_sel");
                }
                // alert("bind");
                if (param.callback) {
                    var groupname = $(item).attr("data-name");
                    var val = cthis.getJsonValue(groupname);
                    //调用回调函数，并返回组名和所选中值得json串
                    param.callback(groupname, val);
                }
            });

        });
        return this;


    },
    //设置checkbox组哪些值被选中
    setValue: function (name, val) {
        $(this.selector).filter('[data-name="' + name + '"]').filter('[data-val="' + val + '"]').each(function (index, item) {
            var ischeck = $(item).attr("data-checked");
            if (ischeck == 1) {
            }
            else {
                $(item).click();
            }

        });
    },
    //获取checkbox组选中的值
    getValue: function (name) {
        var r = [];
        $(this.selector).filter('[data-name="' + name + '"]').each(function (index, item) {
            var ischeck = $(item).attr("data-checked");

            if (ischeck == 1) {
                r.push($(item).attr("data-val"));
            }


        });
        alert(r.join(','));
    },
    //获取checkbox组选中的值
    getJsonValue: function (name) {
        var r = [];
        $(this.selector).filter('[data-name="' + name + '"]').each(function (index, item) {
            var ischeck = $(item).attr("data-checked");
            if (ischeck == 1) {
                var jsonstr = $(item).attr("data-json");
                if (jsonstr) {
                    r.push(JSON.parse(unescape(jsonstr)));
                }
            }
        });
        return r;
    },
    /**判断当前 checkbox 是否选中 */
    ischeck: function (name, val) {
        var item = $(this.selector).filter('[data-name="' + name + '"]').filter('[data-val="' + val + '"]')[0];
        var ischeck = $(item).attr("data-checked");
        return ischeck == 1;
    },
    /**判断当前 checkbox 是否选中 */
    ischeckElement: function (item) {
        var ischeck = $(item).attr("data-checked");
        return ischeck == 1;
    },
    /**模拟单击 只改变样式 */
    setClickStyle:function(item){
         var ischeck = $(item).attr("data-checked");
                if (ischeck == 1) {
                    $(item).attr("data-checked", 0);
                    $(item).children("i").removeClass("check_sel");
                }
                else {
                    $(item).attr("data-checked", 1);
                    $(item).children("i").addClass("check_sel");
                }
    }
};
function LuiDropDownList() {
    this.param = null;
    this.selector = "";
}
var dropcount = 1000;
LuiDropDownList.prototype = {
    constructor: LuiDropDownList,
    init: function (param) {
        this.selector = this.warpid = "#" + param.warpid;
        var warpid = param.warpid;
        var data = param.data;

        var width = param.width = param.width || 180;
        var height = param.height = param.height || 200;
        var subtextlength = param.subtextlength = param.subtextlength || 5;
        param.valueField = param.valueField || "id";
        param.textField = param.textField || "name";
        var valueField = param.valueField;
        var textField = param.textField;
        var selectedCallBack = param.selectedCallBack;
        var loadedCallBack = param.loadedCallBack;
        var zindex = param.zindex;
        if (param.data.length === 0) {
            var d = {};
            d[valueField] = -1;
            d[textField] = "";
            data.push(d);
            height = 0;
        }

        //设置默认值
        var defaultValue = param.defaultValue = param.defaultValue || data[0][valueField];
        var defaultText = param.defaultText = param.defaultValue || data[0][textField];
        this.param = param;
        var ulHtml = "<div class='dropdiv dn'>";
        ulHtml += '  <ul class="dropul" style="max-height:' + height + 'px;overflow:auto;" data-id="' + defaultValue + '" data-name="' + defaultText + '">';

        for (var k = 0; k < data.length; k++) {
            var item = data[k];
            var v = item[textField].length > subtextlength ? item[textField].substring(0, subtextlength) + "..." : item[textField];
            var itemHtml = '<li title=' + item[textField] + ' data-index=' + k + ' data-id=' + item[valueField] + ' data-tag=\'' + JSON.stringify(data[k]) + '\'>' + v + '</li>';
            ulHtml += itemHtml;
        }
        ulHtml += "</ul>";
        ulHtml += "</div>";
        var spanHtml = ' <span style="width: ' + width + 'px;" class="dib"><span data-type="dropdownlist_drop_span">' + defaultText + '</span> <i class="num_down"></i></span>';

        var con = $("#" + warpid);
        con.css({ width: width });
        con.addClass("lui_dropdownlist");
        con.html(spanHtml);
        con.append(ulHtml);
        if (zindex) {
            con.find(".dropdiv").css("z-index", zindex);
            con.attr("zindex", zindex);
        } else {
            // con.find(".dropdiv").css("z-index", dropcount--);
            // con.attr("zindex", dropcount + 1);
        }
        con.addClass("btn_num_updown").addClass("btn_num_updown1").addClass("dib");
        con.attr("title", defaultText);

        var ul = $("#" + warpid + " ul");
        var dropdiv = $("#" + warpid + " .dropdiv");
        var li = $("#" + warpid + " ul li");
        var span = con.find("span[data-type='dropdownlist_drop_span']");
        //事件
        //下拉事件
        con.click(function () {

            if (ul.is(":visible")) {
                // ul.slideUp(200);
                dropdiv.slideUp(200);
            } else {
                $(".dropdiv").slideUp(200);
                // dropdiv.show();
                // ul.slideDown(200);
                dropdiv.slideDown(200);
            }
            return false;
        });
        $("body").click(function () {
            // ul.slideUp(200);
            $(".dropdiv").slideUp(200);
            // return false;
        });
        // con.mouseleave(function (e) {
        //     ul.slideUp(200);
        //     console.log(e);
        //     return false;
        // });
        //选中事件
        li.click(function () {
            var selectedValue = $(this).attr("data-id");
            var selectedText = $(this).html();
            var selectedJson = $(this).attr("data-josn");
            var alltitle = $(this).attr("title");
            span.text(selectedText);
            span.attr("data-id", selectedValue);
            span.attr("data-json", selectedJson);
            span.attr("title", alltitle);

            con.attr("title", alltitle);
            //选中回调事件
            if (selectedCallBack) {
                selectedCallBack(warpid, selectedValue, alltitle);
            }
            dropdiv.slideUp(200);
            return false;

        });
        this.span = span;
        //设置默认值
        this.setValue(defaultValue);
        return this;
    },
    getValue: function () {
        if (this.param.data.length > 0) {
            var span = this.span;
            return { value: span.attr("data-id"), text: span.attr("title"), zindex: $(this.selector).attr("zindex") };
        }
        else {
            return { value: -1, text: "" };
        }

    },
    //暴露给外部的方法
    getSelectedJsonValue: function () {
        if (this.param.data.length > 0) {
            var span = this.span;
            return JSON.parse(span.attr("data-json"));
        }
        else {
            return null;
        }

    },
    setValue: function (value) {
        var textsel = "";
        //选中的值
        var selItem;
        var span = this.span;
        for (var m = 0; m < this.param.data.length; m++) {
            var itemsel = this.param.data[m];
            if (itemsel[this.param.valueField] == value) {
                textsel = itemsel[this.param.textField];
                selItem = itemsel;
                break;
            }
        }
        span.attr("data-id", value);
        span.attr("data-json", JSON.stringify(selItem));
        span.attr("title", textsel);
        $(this.selector).attr("title", textsel);
        var selectedValue = value;
        var selectedText = textsel;
        var v = textsel.length > this.param.subtextlength ? textsel.substring(0, this.param.subtextlength) + "..." : textsel;
        span.text(v);

        if (this.param.loadedCallBack) {
            this.param.loadedCallBack(containerId, selectedValue, selectedText);
        }
        return this;
    }


};
// var LuiTree=require(tree);
function Lui() {
    this.checkBox = null;
    // this.initWordSpeak();
}
Lui.prototype = {
    constructor: Lui,
    initTree: function (p) {
        var t = new LuiTree();
        return t.init(p);
    },
    initDropDownList: function (p) {
        var d = new LuiDropDownList();
        return d.init(p);
    },
    initCheckBox: function (p) {
        //声明一个适用于全局的checkbox对象
        if (!this.checkBox) {
            this.checkBox = new LuiCheckBox();
        }
        var c = new LuiCheckBox();
        return c.init(p);

    },
    initWordSpeak: function (p) {
        //声明一个适用于全局的wordspeak对象
        if (!this.wordspeak) {
            this.wordspeak = new LuiWordSpeak();
        }
        var c = new LuiWordSpeak();
        return c.init(p);
    }
};

/*参数说明
 *warpid 容器ID
 *nameField 节点展示内容字段
 *idField   节点绑定id字段
 *parentField 节点父级ID
 *data      数据列表 json格式
 *showParentCheckBox 父节点元素是否显示复选框
 *showCheckBox 子节点元素是否显示复选框
 */
function LuiTree() {
    var param;
    this.selector = "";
    this.param = null;
    /*
     list：传入的数据来源
     current：当前要处理的项
     pid：父级ID
     currlevel：当前层级
     currentIndex：当前idndex 判断是否是最后一个last
     allcount：当前兄弟节点总数量，用于判断是否是最后一个节点
     */
    function createTreeHtml(list, current, pid, currlevel, currentIndex, allcount) {
        //获取指定层级的所有子元素  私有方法
        function getChildren(list, pid) {
            var result = [];
            for (var k = 0; k < list.length; k++) {
                var kno = list[k];
                if (kno[param.parentField] === pid) {
                    result.push(kno);
                }
            }
            return result;
        }

        /*拼接html */
        var html = "";
        if (!current)
            current = list[0];
        var nameField = param.nameField || "name";
        var idField = param.idField || "id";
        var warpid = param.warpid || "tree_1";
        var childrens = getChildren(list, pid);
        var isclose = currlevel >= param.showlevel || 0;

        if (childrens.length > 0) {
            if (currentIndex == allcount - 1) {
                html += '<li class="parent-last">';
            }
            else {
                html += '<li>';
            }

            if (isclose) {
                html += '<i class="icon icon_op close"></i>';
            } else {
                // html += '<i class="li_close "></i>';
                html += '<i class="icon icon_op open"></i>';
            }
            if (param.showParentCheckBox) {
                html += '<luicheck class="lui_checkbox"  data-type="parent" data-showcheckbox="0" data-name="' + warpid + '" data-level="' + currlevel + '" data-json=\'' + escape(JSON.stringify(current)) + '\'  data-val="' + current[idField] + '" data-text="' + current[nameField] + '" data-checked="0"></luicheck>';
            }
            else {
                html += '<luicheck class="lui_checkbox"  data-type="parent" data-showcheckbox="1" data-name="' + warpid + '" data-level="' + currlevel + '" data-json=\'' + escape(JSON.stringify(current)) + '\'  data-val="' + current[idField] + '" data-text="' + current[nameField] + '" data-checked="0"></luicheck>';
            }
            // html += ' <a class="hand" data-type="parent" data-level="' + currlevel + '" data-json=\'' + escape(JSON.stringify(current)) + '\' data-val="' + current[idField] + '">' + current[nameField] + '</a>';
            if (isclose) {
                html += '<ul class="dn">';
            } else {
                html += '<ul>';
            }

            for (var m = 0; m < childrens.length; m++) {
                var nextlevel = currlevel + 1;
                //回调
                html += arguments.callee(list, childrens[m], childrens[m][idField], nextlevel, m, childrens.length);
            }
            html += "</ul>";
            html += "</li>";
        } else {

            if (currentIndex == allcount - 1) {
                html += '<li class="leaf-last">';
            }
            else {
                html += '<li class="leaf">';
            }
            if (param.showCheckBox) {
                html += '<luicheck class="lui_checkbox" data-type="leaf"  data-showcheckbox="0" data-name="' + warpid + '" data-level="' + currlevel + '" data-json=\'' + escape(JSON.stringify(current)) + '\'  data-val="' + current[idField] + '" data-text="' + current[nameField] + '" data-checked="0"></luicheck>';
            } else {
                html += '<luicheck class="lui_checkbox" data-type="leaf"  data-showcheckbox="1" data-name="' + warpid + '" data-level="' + currlevel + '" data-json=\'' + escape(JSON.stringify(current)) + '\'  data-val="' + current[idField] + '" data-text="' + current[nameField] + '" data-checked="0"></luicheck>';
            }

            // html += '<a class="hand " data-type="leaf" data-level="' + currlevel + '" data-json=\'' + JSON.stringify(current) + '\' data-val="' + current[idField] + '">' + current[nameField] + '</a></li>';
        }


        return html;


    }
    /*初始化树
 *warpid 容器ID
 *nameField 节点展示内容字段
 *idField   节点绑定id字段
 *parentField 节点父级ID
 *data      数据列表 json格式
 *showParentCheckBox 父节点元素是否显示复选框
 *showCheckBox 子节点元素是否显示复选框
 *selectedCallBack 点击节点触发回调事件
 *isOnlyLeafCallback  是否【只有点击子元素触发事件，点击父元素只用作展开折叠，不做其它功能】
 *若showParentCheckBox与showCheckBox都为false 返回当前点击节点以及子元素的数据 json格式
 *若showParentCheckBox与showCheckBox任何一个为ture 返回值为所有选中节点的数据 json格式 
 
 */
    this.init = function (p) {
        if (!p) { return; }
        p.showParentCheckBox = !p.isOnlyLeafCallBack;
        this.param = param = p;
        var list = param.data;
        var nameField = param.nameField || "name";
        var idField = param.idField || "id";
        var warpid = param.warpid || "tree_1";
        this.selector = this.warpid = "#" + warpid;
        var html = createTreeHtml(list, list[0], list[0][idField], 0, 0, list.length);
        var con = $("#" + warpid);
        con.html("<ul>" + html + "</ul>");
        con.addClass("lui_tree_warp");
        /**展开折叠 */
        con.find(".icon_op").click(function () {
            if ($(this).hasClass("close")) {
                $(this).removeClass("close").addClass("open");
                $(this).siblings("ul").show(200);
            } else {
                $(this).removeClass("open").addClass("close");
                $(this).siblings("ul").hide(200);
            }
        });
        var luitemp = new Lui();

        luitemp.initCheckBox({ group: warpid });
        con.find("luicheck").click(function () {

            var item = $(this);
            var isleaf = item.attr("data-type") == "leaf";
            var op = item.prev("i.icon_op");
            //只有子节点触发
            if (param.isOnlyLeafCallBack) {
                if (!isleaf && op) { op.click(); return; }
            }

            if (!isleaf) {
                if (param.showParentCheckBox) {
                    if (luitemp.checkBox.ischeckElement(this)) {

                        item.siblings("ul").find("luicheck").each(function (index, citem) {
                            if (!luitemp.checkBox.ischeckElement(citem)) {
                                litem = citem;
                                lui.checkBox.setClickStyle(citem);

                            }
                        });
                    }
                    else {
                        item.siblings("ul").find("luicheck").each(function (index, citem) {
                            if (luitemp.checkBox.ischeckElement(citem)) {
                                lui.checkBox.setClickStyle(citem);

                            }
                        });
                    }
                }
            }


            if (param.selectedCallBack) {
                if (param.showCheckBox) {
                    // alert('子节点 多选');
                    var groupname = item.attr("data-name");
                    var val = luitemp.checkBox.getJsonValue(groupname);
                    param.selectedCallBack(groupname, val);
                }
                else {
                    // alert('子节点 单选')
                }
            }



        });

        return this;
    };
}

LuiTree.prototype = {
    constructor: LuiTree,

    /*定位
     *locationid 定位ID
     */
    setLocation: function (locationid) {

    },
    /*获取已选中节点的值 json格式
     */
    getSelectedJsonValue: function () {
        if (this.param.showParentCheckBox || this.param.showParentCheckBox) {
            var luitemp = new Lui();
            var result = lui.checkBox.getJsonValue();
            luitemp = null;
            return result;
        }
    },
    /*
     *展开层级
     *nodeindex 从哪个节点开始展开
     *length  展开几个node
     *level 展开深度
     */
    openNode: function (openstarnodeindex, length, level) { }


};

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