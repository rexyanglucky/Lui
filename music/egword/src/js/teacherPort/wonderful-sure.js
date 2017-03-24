

var classindex;
var classid;

var temp_pic_count = 0;
var islate = 0;

$(function () {

    classindex = $("#hidden-classindex").text();
    classid = $("#hidden-classid").text();

    $(".b-tab").click(function () {

        $.router.load("/teacher/myclass/CourseReport?classindex=" + classindex + "&classid=" + classid, true);
    });

    GetSplendidPic();

    $("#btn-submit").click(SetPic);

    $("#b-upfile").on("change", function (e) {

        var file = e.target.files[0];
        //console.log(file);
        //var supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
        //$("#b-message").html('文件格式只支持：jpg、jpeg 和 png' + "当前类型：" + file.type+"文件名称："+file.name+"文件大小"+file.size/1024+"KB");
        if (file) {
            if (typeof FileReader === 'undefined') {

            }
            else {
                var oReader = new FileReader();
                oReader.onload = function (e) {
                    var img = '<div class="img"><img src="' + e.target.result + '" alt="" class="b-upimg"><span class="close b-delimg"></span></div>';
                    $("#b-piclist").prepend(img);

                    temp_pic_count++;

                    $("#b-show-btnsubmit").show();

                    $(".b-delimg").off("click");
                    $(".b-delimg").on("click", function () {
                        $(this).parent().remove();

                        temp_pic_count--;

                        if (temp_pic_count == 0) {
                            $("#b-show-btnsubmit").hide();
                        }

                    });


                };
                oReader.readAsDataURL(file);

            }

            $("#b-message").html('课堂精彩瞬间照片请下课后一小时内完成上传，逾期将无法上传！');

        }

    });


});

function GetSplendidPic() {
    $.ajax({
        type: "get",
        url: "/teacher/myclass/GetSplendidPic",
        cache: false,
        data: {
            classindex: classindex
        },
        dataType: "JSON",
        success: function (data) {

            data = JSON.parse(data);

            var m = data.result;
            islate = data.islate;

            var str = "";
            for (var i = 0; i < m.length; i++) {
                str += '<div class="img" ><img src="' + m[i].PicUrl + '" alt=""></div>';
            }

            $("#b-piclist").html(str);

            $("#b-show-btnsubmit").hide();

            if (islate) {

                 $("#b-message").html("已逾期，不支持上传照片");
                //上传按钮不可用
                $("#b-showupimg").hide();


            }
        }
    });
}

function SetPic() {
    $.showPreloader('努力上传中...');

    var picArr = [];
    $(".b-upimg").each(function (i, v) {

        var src = $(v).prop("src");

        picArr.push(src);

    });
    if (picArr.length > 9 || picArr.length == 0) {
        $("#b-message").html("上传失败");
        return;
    }
    var picarrstr = JSON.stringify(picArr);
    
    $.ajax({
        type: "post",
        url: "/teacher/myclass/SetSplendidPic",
        cache: false,
        data: {
            classindex: classindex,
            remark: "",
            picid: 0,//0 add,>0 del
            picarr: picarrstr
        },
        dataType: "JSON",
        success: function (data) {
            $.hidePreloader();
            data = JSON.parse(data);

            if (data.result == -1) {
                //上传失败
                $("#b-message").html("已逾期，不支持上传照片");
            }
            else if (data.result == 0) {
                $("#b-message").html("上传失败");
            }
            else if (data.result == -2) {
                 $("#b-message").html("图片仅支持 .jpg .gif .bmp .png 格式");
                
            }
            else {
                $("#b-message").html("上传成功");
                //$.showPreloader('上传成功');
                $(".b-delimg").remove();

                $(".b-upimg").removeClass("b-upimg");

                temp_pic_count = 0;
                $("#b-show-btnsubmit").hide();

            }
            setTimeout(function () {
                $("#b-message").html("课堂精彩瞬间照片请下课后一小时内完成上传，逾期将无法上传！");
            }, 6000);

        }
    });

}