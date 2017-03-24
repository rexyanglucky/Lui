module.exports = {
    checkNum: function (event) {

        var keynum = event.keyCode;
        if ((keynum >= 48 && keynum <= 57)) {
            document.execCommand("Cut", false, true);
            var nT = $(event.currentTarget).val();
            //第一个不能输入0
            if ((nT == "") && keynum == 48)
                return false;

            else if (nT.length > 2) {
                return false;
            } else
                return true;
        } else
            return false;
    },
    matchNum: function (t) {
        t.value = t.value.trimtext('.');
    },
    checkFloat: function (event) {
        //var score = this.totalSore;
        var keynum = event.keyCode;
        //console.log(keynum);
        if ((keynum >= 48 && keynum <= 57) || (keynum == 46)) {
            document.execCommand("Cut", false, true);
            var nT = $(event.currentTarget).val();
            //第一个字符不能为小数点，不能重复输入小数点
            if ((nT == "" || nT.indexOf(".") > -1) && keynum == 46)
                return false;
                //小数点后保留一位
            else if (nT.length > 2 && nT.indexOf(".") == nT.length - 2) {
                return false;
            }
                //0后面只能输入小数点
            else if (nT == "0" && keynum != 46)
                return false;
                //三位数后只能输入小数点
            else if (nT.length == 3 && nT.indexOf(".") < 0 && keynum != 46)
                return false;
            else if (nT.length > 4) {
                return false;
            } else
                return true;
        } else
            return false;
    },
    numGradeTran: function (t) { //数字年级转换
       
        switch (t) {
            case 1:
                return "一年级";
            case 2:
                return "二年级";
            case 3:
                return "三年级";
            case 4:
                return "四年级";
            case 5:
                return "五年级";
            case 6:
                return "六年级";
            case 7:
                return "七年级";
            case 8:
                return "八年级";
            case 9:
                return "九年级";
            case 10:
                return "高一";
            case 11:
                return "高二";
            case 12:
                return "高三";
            default:
                return t;


        }

        return t;
    }, IsMobile: function(t) {
        return (/^1[3|4|5|7|8]\d{9}$/.test(t));//校验手机的格式
    },
    convertTime:function(s){
        if(s<60){
            return (s*1).toFixed(2);
        }
        var h=parseInt(s/3600);
        var m=parseInt((s-h*3600)/60);
        var s=parseInt(s-h*3600-m*60);
        var r=h>0?h:"";
        r+=h>0&&(m>0||s>0)?":":"";
        r+=m>0?((m<10&&h>0)?"0"+m:m):"";
        r+=(m>0||h>0)&&s>0?":":"";
        r+=s>0?(s>9?s:"0"+s):"";
        return r;
    }
}