var t1, t2, webSocket;
$(function () {


    /*初始化树
     *warpid 容器ID
     *nameField 节点展示内容字段
     *idField   节点绑定id字段
     *parentField 节点父级ID
     *data      数据列表 json格式
     *showParentCheckBox 父节点元素是否显示复选框
     *showCheckBox 子节点元素是否显示复选框
     */
    var p = {
        warpid: "tree_demo1",
        nameField: 'name',
        idField: 'id',
        parentField: 'pid',
        isOnlyLeafCallBack: true,
        showParentCheckBox: true,
        showCheckBox: true,
        data: [{
            name: '01',
            id: '00',
            pid: ''
        }, {
            name: '02',
            id: '00_01',
            pid: '00'
        }, {
            name: '03',
            id: '00_02',
            pid: '00'
        }, {
            name: '04',
            id: '00_01_01',
            pid: '00_01'
        }, {
            name: '05',
            id: '00_01_02',
            pid: '00_01'
        }, {
            name: '06',
            id: '00_02_01',
            pid: '00_02'
        }, {
            name: '07',
            id: '00_02_02',
            pid: '00_02'
        }],
        selectedCallBack: function (groupname, val) {
            // var j=JSON.parse(unescape(val));
            console.log(val);
        }
    };
    var p2 = {
        warpid: "tree_demo2",
        nameField: 'name',
        idField: 'id',
        parentField: 'pid',
        isOnlyLeafCallBack: true,
        showParentCheckBox: true,
        showCheckBox: true,
        data: [{
            name: '01',
            id: '00',
            pid: ''
        }, {
            name: '02',
            id: '00_01',
            pid: '00'
        }, {
            name: '03',
            id: '00_02',
            pid: '00'
        }, {
            name: '04',
            id: '00_01_01',
            pid: '00_01'
        }, {
            name: '05',
            id: '00_01_02',
            pid: '00_01'
        }, {
            name: '06',
            id: '00_02_01',
            pid: '00_02'
        }, {
            name: '07',
            id: '00_02_02',
            pid: '00_02'
        }],
        selectedCallBack: function (groupname, val) {
            // var j=JSON.parse(unescape(val));
            console.log(val);
        }
    };
    // var p={warpid:"tree_demo1",nameField:'name',idField:'id',parentField:'pid',showParentCheckBox:false,showCheckBox:false,data:[{name:'01',id:'00',pid:''},{name:'02',id:'00_01',pid:'00'},{name:'03',id:'00_02',pid:'00'},{name:'04',id:'00_01_01',pid:'00_01'},{name:'05',id:'00_01_02',pid:'00_01'},{name:'06',id:'00_02_01',pid:'00_02'},{name:'07',id:'00_02_02',pid:'00_02'}]}


    t2 = lui.initTree(p2);
    t1 = lui.initTree(p);
    lui.initDropDownList({
        warpid: "drop_demo1",
        width: 200,
        nameField: 'name',
        idField: 'id',
        data: [{
            name: '01',
            id: '00',
            pid: ''
        }, {
            name: '02',
            id: '00_01',
            pid: '00'
        }, {
            name: '03',
            id: '00_02',
            pid: '00'
        }, {
            name: '04',
            id: '00_01_01',
            pid: '00_01'
        }, {
            name: '05',
            id: '00_01_02',
            pid: '00_01'
        }, {
            name: '06',
            id: '00_02_01',
            pid: '00_02'
        }, {
            name: '07',
            id: '00_02_02',
            pid: '00_02'
        }]
    });
    lui.initDropDownList({
        warpid: "drop_demo2",
        width: 200,
        nameField: 'name',
        idField: 'id',
        data: [{
            name: '01',
            id: '00',
            pid: ''
        }, {
            name: '02',
            id: '00_01',
            pid: '00'
        }, {
            name: '03',
            id: '00_02',
            pid: '00'
        }, {
            name: '04',
            id: '00_01_01',
            pid: '00_01'
        }, {
            name: '05',
            id: '00_01_02',
            pid: '00_01'
        }, {
            name: '06',
            id: '00_02_01',
            pid: '00_02'
        }, {
            name: '07',
            id: '00_02_02',
            pid: '00_02'
        }],
        defaultValue: "00_01"
    });


    lui.initCheckBox({
        group: "g1"
    });
    lui.initCheckBox({
        group: "g2"
    });
    /*websocket -----------start**/
    var dropcontact = lui.initDropDownList({
        warpid: "drop_contact",
        width: 200,
        nameField: 'name',
        idField: 'id',
        data: [{
            name: "群发",
            id: ""
        }, {
            name: '张三',
            id: '01'
        }, {
            name: '李四',
            id: '02'
        }, {
            name: '王五',
            id: '03'
        }, {
            name: '央吉卓玛',
            id: '04'
        }]
    });
    var drop_my = lui.initDropDownList({
        warpid: "drop_my",
        width: 200,
        nameField: 'name',
        idField: 'id',
        data: [{
            name: "群发",
            id: ""
        }, {
            name: '张三',
            id: '01'
        }, {
            name: '李四',
            id: '02'
        }, {
            name: '王五',
            id: '03'
        }, {
            name: '央吉卓玛',
            id: '04'
        }]
    });

    $("#btnsend").click(function () {
        var c = dropcontact.getValue().value;
        var f = drop_my.getValue().value;
        sendData(c, $("#web_input").val(), f)

    });
    //w:向谁发，d 发送内容
    function sendData(w, d, f) {
        initWebSocket();
        if (webSocket.OPEN && webSocket.readyState == 1) {
            var s = "<custom_separator>";
            webSocket.send(w + s + d + s + f);
        }
        if (webSocket.readyState == 2 || webSocket.readyState == 3) {
            $("#div_receive").append("WebSocket closed");
        }
    }

    function initWebSocket() {

        var url = "ws://localhost:39435/ws";
        // var url = "ws://localhost:5000/ws";
        if (!webSocket) {
            webSocket = new WebSocket(url);
            //Open connection  handler.
            webSocket.onopen = function () {
                $("#div_receive").append("WebSocket opened" + "<br>");

            };

            //Message data handler.
            webSocket.onmessage = function (e) {
                $("#div_receive").append(e.data + "<br>");
            };

            //Close event handler.
            webSocket.onclose = function () {
                $("#div_receive").append("WebSocket closed." + "<br>");
            };

            //Error event handler.
            webSocket.onerror = function (e) {
                $("#div_receive").append(e.message + "<br>");
            }
        }
    }

    /*****websockt end***********/
    lui.initWordSpeak({
        auto: true,
        loop: 3,
        interval: 5000,
        callback: function () {
            console.log("播放完毕");
        }
    });

    /********弹层提示开始************/
    lui.toast({showTime: 10000});
});
var lui = new Lui();

function getg1(g) {
    lui.checkBox.getValue(g);
}

function setg1(g, val) {
    lui.checkBox.setValue(g, val);
}