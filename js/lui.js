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
