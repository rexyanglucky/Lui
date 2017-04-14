// var LuiTree=require(tree);


;
(function(name, definition) { // 检测上文环境是否为AMDCMD  
    var hasDefine = typeof define === 'function',
        // 检查上文环境是否为Node  
        hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) {
        // AMD环境CMD环境   
        define(definition);
    } else if (hasExports) {
        // 定义为通Node模块  
        module.exports = definition();
    } else {
        // 将模块的执行结在window量中在器中thiswindow对象
        this[name] = definition();
    }
})('Lui', function() {
    function Lui() {
    this.checkBox = null;
  }
Lui.prototype = {
    constructor: Lui,
    initTree: function(p) {
        var t = new LuiTree();
        return t.init(p);
    },
    initDropDownList: function(p) {
        var d = new LuiDropDownList();
        return d.init(p);
    },
    initCheckBox: function(p) {
        //声明一个适用于全局的checkbox对象
        if (!this.checkBox) {
            this.checkBox = new LuiCheckBox();
        }
        var c = new LuiCheckBox();
        return c.init(p);

    },
    initWordSpeak: function(p) {

        var c = new LuiWordSpeak();
        return c.init(p);
    },
    toast: function(p) {
        var c = new LuiToast();
        return c.pop(p);
    }
};
return Lui;
});