var Lui = require("../../LUI/js/lui.js");
var util=require("../lib/util.js");
var lui = new Lui();
var AudioPlay=function () {
    var nextUnitId=1;
    var curUnit=unit_id;
    var curBookId=book_id;
    this.wordList=[];
    this.curWordIndex=0;
    this.totalTime=0;
    this.pauseTimeObj={tick:0};
  this.allSource=(function (audio) {
      var s=undefined;
      if(audio.allSource){
          s=audio.allSource;
      }
      else{
          $.ajax({
              url: '/Experience/Index/GetWord',
              type: "post",
              data: {BookID:curBookId,UnitID:curUnit},
              async:false,
              success: function (data) {
                  if(typeof(data)=="string"){
                      data=JSON.parse(data);
                  }
                  s = data.Data;
                  nextUnitId=data.Data.M.NextUnitID;

                  audio.wordList=data.Data.N;
              },
              error: function () {

              }
          })
      }
      return s;

  })(this);
};
AudioPlay.prototype.init=function () {

    this.bindEvent();
    this.nextUnit();

};
AudioPlay.prototype.nextUnit=function () {
    var shtml="";
    shtml+='<i class="lui_wordspeak" id="audio-word'+0+'" data-src="http://localhost:14217/egword/sm.mp3"></i>';
    for(var k=1;k<this.wordList.length;k++)
    {
         var c=this.wordList[k].f_audio;
        shtml+='<i class="lui_wordspeak" id="audio-word'+k+'" data-src='+c+'></i>';
    }
    $("body").append('<div style="display: none" id="audio-list-hidden"></div>');
    $("#audio-list-hidden").html(shtml);
    var athis=this;
    lui.initWordSpeak1({ auto: false, loop: 2, interval: 2000, callback: function () {
        athis.pauseTimeObj={tick:0};
        setTimeout(function () {
            athis.next();
        },2000);

    } });
    lui.wordspeak1.audioControl.onloadedmetadata=function(){
        // if(athis.pauseTimeObj.tick==0)
        // {
            athis.getAudioInfo();
            if (athis.showtimer) {
                window.clearInterval(athis.showtimer);
            }
            athis.initAudioInfo();

        // }
    };
    athis.play();
};
AudioPlay.prototype.getAllSource=function (curBookId,curUnit,callback) {
    $.ajax({
        url: '/Experience/Index/GetWord',
        type: "post",
        data: {BookID:curBookId,UnitID:curUnit},
        async:false,
        success: function (data) {
            if(typeof(data)=="string"){
                data=JSON.parse(data);
            }
            s = data.Data;
            nextUnitId=data.Data.M.NextUnitID;

            audio.wordList=data.Data.N;
            if(callback){
            callback();
            }
        },
        error: function () {

        }
    })
};
AudioPlay.prototype.play = function () {
    $("#audio-word" + this.curWordIndex).attr("data-play", 0);
    lui.wordspeak1.play($("#audio-word"+this.curWordIndex));

};
AudioPlay.prototype.getAudioInfo=function (){
    this.totalTime=lui.wordspeak1.audioControl.duration.toFixed(2);
    console.log(this.totalTime);
};
AudioPlay.prototype.next=function () {
    
    var athis = this;
    athis.pause();
    if(athis.curWordIndex<this.wordList.length-1)
    {
        athis.curWordIndex++;
    }
    else{
        athis.curWordIndex=0;
    }

    console.log(athis.curWordIndex);
    athis.play();
};
AudioPlay.prototype.prev=function () {
    var athis = this;
    athis.pause();
    if(athis.curWordIndex>0)
    {
        athis.curWordIndex--;
    }
    else{
        athis.curWordIndex=this.wordList.length-1;
    }

    console.log(athis.curWordIndex);
    athis.play();
};
AudioPlay.prototype.pause=function(){
    var athis=this;
    window.clearInterval(athis.showtimer);
    // if (lui.wordspeak1.audioControl.played){
    lui.wordspeak1.audioControl.pause();

    // }
};
//
AudioPlay.prototype.pauseToPlay=function(){
    var athis=this;
    lui.wordspeak1.audioControl.play();
    athis.showAudioInfo();

};
AudioPlay.prototype.setPlayTime=function (curtime) {
    lui.wordspeak1.audioControl.currentTime=curtime;
}
AudioPlay.prototype.bindEvent=function () {
    var athis=this;
    $(".music-event").on("click",".start",function(){
        athis.pause();
        $(this).removeClass("start").addClass("stop");
    });
    $(".music-event").on("click",".stop",function(){
        athis.pauseToPlay();
        $(this).removeClass("stop").addClass("start");
    });
    $(".music-event").on("click",".pre",function(){
        athis.prev();
        $(".stop").removeClass("stop").addClass("start");
    });
    $(".music-event").on("click",".next",function(){
        athis.next();
        $(".stop").removeClass("stop").addClass("start");
    });
    $(".progress").on("click",function(){

        var p=$(this);
        var w=event.offsetX;
        var p1=athis.totalTime* w/p.width();
        console.log(p1);
        athis.progesstime=p1;
        $(".dot").animate({left:(w/p.width())*100+"%"},10);
        athis.setPlayTime(p1);
    });
};
AudioPlay.prototype.initAudioInfo=function(){
    var athis=this;
    $(".totl-time").html(util.convertTime(athis.totalTime));
    $(".current-time").html(util.convertTime(0));
    $(".dot").css({left:0});
    athis.progesstime=0;
    athis.showAudioInfo();
};
AudioPlay.prototype.showAudioInfo=function(){
    var athis=this;
    athis.showtimer=setInterval(function () {
        if( athis.progesstime<=athis.totalTime){
            athis.progesstime= athis.progesstime+0.01;
            $(".current-time").html(util.convertTime(athis.progesstime));
            $(".dot").css({left:(athis.progesstime/athis.totalTime)*100+"%"});
            athis.pauseTimeObj={tick: athis.progesstime};
        }
        else{clearInterval(athis.showtimer); athis.pauseTimeObj={tick:0};}

    },10)
};

$(function(){
    var p=new AudioPlay();
    p.init();

})