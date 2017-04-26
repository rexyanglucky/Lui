module.exports={
      //指定时间，自定义转换为字符串
    ctime:(function(){Date.prototype.toCustomRegString = function (format) {
        format = format || "yyyy-MM-dd HH:mm:ss";
        // format="yyyyMMdd HH:mm:ss";
        var yf = "y", Mf = "M", df = "d", Hf = "H", mf = "m", sf = "s";
        var yreg = /(y)/g, Mreg = /(M)/g, dreg = /(d)/g, Hreg = /(H)/g, mreg = /(m)/g, sreg = /(s)/g;
        var t = this;
        // var fareg=/y+(y.{1})M+(M.{1})d+(d.{1})H+(H.{1})m+(m.{1})s+/;
        // var fareg = /y*(y.{1})M*(M.{1})d*(d.{1})H*(H.{1})m*(m.{1})s*/;
        var fareg = /(?:y*(y[^yMdHms]{0,1}))*(?:M*(M[^yMdHms]{0,1}))*(?:d*(d[^yMdHms]{0,1}))*(?:H*(H[^yMdHms]{0,1}))*(?:m*(m[^yMdHms]{0,1}))*s*/;
        var a = undefined, yl = 0, Ml = 0, dl = 0, Hl = 0, ml = 0, sl = 0,
            ysplit = undefined, Msplit = undefined, dsplit = undefined, Hsplit = undefined,
            msplit = undefined;
        a = format.match(yreg);
        yl = a ? a.length : 0;
        a = format.match(Mreg);
        Ml = a ? a.length : 0;
        a = format.match(dreg);
        dl = a ? a.length : 0;
        a = format.match(Hreg);
        Hl = a ? a.length : 0;
        a = format.match(mreg);
        ml = a ? a.length : 0;
        a = format.match(sreg);
        sl = a ? a.length : 0;

        //split
        a = format.match(fareg);
        // console.log(a);
        for (var k = 1; k < a.length; k++) {
            if (a[k]) {
                if (a[k].indexOf(yf) > -1) {
                    ysplit = a[k].replace(yf, "");
                }
                else if (a[k].indexOf(Mf) > -1) {
                    Msplit = a[k].replace(Mf, "");
                }
                else if (a[k].indexOf(df) > -1) {
                    dsplit = a[k].replace(df, "");
                }
                else if (a[k].indexOf(Hf) > -1) {
                    Hsplit = a[k].replace(Hf, "");
                }
                else if (a[k].indexOf(mf) > -1) {
                    msplit = a[k].replace(mf, "");
                }
            }
        }
        var ystr = Mstr = dstr = Hstr = mstr = sstr = "";
        var yt = t.getFullYear().toString();
        var Mt = ((t.getMonth() + 1 < 10 && Ml >= 2) ? "0" + (t.getMonth() + 1) : t.getMonth() + 1).toString();
        var dt = ((t.getDate() < 10 && dl >= 2) ? "0" + t.getDate() : t.getDate()).toString();
        var Ht = ((t.getHours() < 10 && Hl >= 2) ? "0" + t.getHours() : t.getHours()).toString();
        var mt = ((t.getMinutes() < 10 && ml >= 2) ? "0" + t.getMinutes() : t.getMinutes()).toString();
        var st = ((t.getSeconds() < 10 && sl >= 2) ? "0" + t.getSeconds() : t.getSeconds()).toString();
        var ystr = (yl == 0 ? "" : yt.substring(yt.length - yl, yt.length)) + (ysplit ? ysplit : "");
        // var Mstr = (Ml == 0 ? "" : Mt.substring(Mt.length - Ml, Mt.length)) + (Msplit ? Msplit : "");
        var Mstr = (Ml == 0 ? "" : Mt) + (Msplit ? Msplit : "");
        // var dstr = (dl == 0 ? "" : dt.substring(dt.length - dl, dt.length)) + (dsplit ? dsplit : "");
        var dstr = (dl == 0 ? "" : dt) + (dsplit ? dsplit : "");
        // var Hstr = (Hl == 0 ? "" : Ht.substring(Ht.length - Hl, Ht.length)) + (Hsplit ? Hsplit : "");
        var Hstr = (Hl == 0 ? "" : Ht) + (Hsplit ? Hsplit : "");
        // var mstr = (ml == 0 ? "" : mt.substring(mt.length - ml, mt.length)) + (msplit ? msplit : "");
        var mstr = (ml == 0 ? "" : mt) + (msplit ? msplit : "");
        // var sstr = sl == 0 ? "" : st.substring(st.length - sl, st.length);
        var sstr = sl == 0 ? "" : st;
        return ystr + Mstr + dstr + Hstr + mstr + sstr;
    }})(),
}