/*! <DEBUG:undefined> */
function anonymous($data,$filename) {'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,CreateTime=$data.CreateTime,MasterRequir=$data.MasterRequir,ResultLevel=$data.ResultLevel,Vocabulary=$data.Vocabulary,CiHuiOne=$data.CiHuiOne,CiHuiTwo=$data.CiHuiTwo,BGrade=$data.BGrade,AnswerResult=$data.AnswerResult,CorrectRate=$data.CorrectRate,UseTime=$data.UseTime,floor=$data.floor,AbilityResult=$data.AbilityResult,MentionScore=$data.MentionScore,Course=$data.Course,$out='';$out+=' <div class="main-pops"> <div class="report-wrap"> <div class="header "> <div class="name tc">测评报告书</div> <div class="split mt10"></div> <div class="ovh mt15"> <div class="fr "> <span>测试时间：</span> <span>';
$out+=$escape(CreateTime);
$out+='</span> </div> </div> </div> <dl> <dd class="mt40"> <div class="head">【考纲对词汇量掌握要求】</div> <div class="mt35 ml20"> ';
$out+=$escape(MasterRequir);
$out+=' </div> </dd> <dd class="mt30"> <div class="head">【测试结果】</div> <div class="report-result mt45 "> <div class="tc"> <span class="f24">词汇量等级：</span> <span class="red-dark f32 fb">';
$out+=$escape(ResultLevel);
$out+='</span> <div class="mt35">你当前的词汇量约：<span class="col-ff8716">';
$out+=$escape(Vocabulary);
$out+='</span>个，<span class="col-ff8716">';
$out+=$escape(CiHuiOne);
$out+='</span>';
$out+=$escape(CiHuiTwo);
$out+='</div> </div> <div class="info mt20"> <span>【测试学段】</span><span>';
$out+=$escape(BGrade == "x" ? "小学" : BGrade == "c" ? "初中" : "高中");
$out+='</span> <span class="ml60">【测试卷题数】</span><span>';
$out+=$escape($helpers.getJsonLength(AnswerResult) *40);
$out+='</span> <br> <span>【作答正确率】</span><span>';
$out+=$escape(CorrectRate);
$out+='%</span> <span class="ml30">【测试用时】</span><span>';
$out+=$escape(UseTime / 60 | floor);
$out+='分钟';
$out+=$escape(UseTime % 60);
$out+='秒</span> </div> </div> </dd> <dd class="mt45"> <p class="head">【测评分析】</p> <p class="tc col-ff8716 f18"> 应试能力 </p> <table class="table-result wp100 mt10"> <tr> <td class="wp20 tl pl25">听说能力</td> <td class="wp60 tl pl35">体现学生在英语考试中，关于“听力和口语”方面的应试能力。</td> ';
if(AbilityResult[0]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[0]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[0]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[0]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> <tr> <td class="wp20 tl pl25">阅读能力</td> <td class="wp60 tl pl35">体现学生在英语考试中，关于“英译汉、阅读理解”方面的应试能力。</td> ';
if(AbilityResult[2]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[2]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[2]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[2]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> <tr> <td class="wp20 tl pl25">写作能力</td> <td class="wp60 tl pl35">体现学生在英语考试中，关于“书面表达、写作”方面的应试能力。</td> ';
if(AbilityResult[1]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[1]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[1]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[1]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> <tr> <td class="wp20 tl pl25">翻译能力</td> <td class="wp60 tl pl35">体现学生在英语考试中，关于“汉译英、完型填空”方面的应试能力。</td> ';
if(AbilityResult[3]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[3]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[3]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[3]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> </table> <p class="tc col-ff8716 f18 mt35"> 识词能力 </p> <table class="table-result wp100 mt10"> <tr> <td class="wp40 tl pl25">拼读能力</td> <td class="wp40 tl pl35">看到单词都能正确读出来，体现学生“见词能读”的识词能力。</td> ';
if(AbilityResult[4]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[4]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[4]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[4]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> <tr> <td class="tl pl25">词形识记能力</td> <td class="tl pl35">听到单词都能正确写出来，体现学生“听词能写”的识词能力。</td> ';
if(AbilityResult[5]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[5]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[5]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[5]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> <tr> <td class="tl pl25">词义识记能力</td> <td class="tl pl35">见到单词都能准确表达中文词义，体现学生“见词识义”的识词能力。</td> ';
if(AbilityResult[6]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[6]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[6]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[6]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> <tr> <td class="tl pl25">词义词形的辨析能力</td> <td class="tl pl35">掌握单词词义与拼写规则之间的要领，体现学生“辨别词义和词形”的能力。</td> ';
if(AbilityResult[7]=="优秀"){
$out+=' <td class="wp20 col-best tc">【优秀】</td> ';
}else if(AbilityResult[7]=="良好"){
$out+=' <td class="wp20 col-good tc">【良好】</td> ';
}else if(AbilityResult[7]=="及格"){
$out+=' <td class="wp20 col-pass tc">【合格】</td> ';
}else if(AbilityResult[7]=="不及格"){
$out+=' <td class="wp20 col-bad tc">【不合格】</td> ';
}
$out+=' </tr> </table> </dd> <dd class="mt50"> <p class="head">【提分方案】</p> <div class="ml10"> <p class="lh200 mt20"> 1、';
$out+=$escape(MentionScore[0]);
$out+=' </p> <p class="lh200 mt10"> 2、';
$out+=$escape(MentionScore[1]);
$out+=' </p> </div> </dd> <dd class="mt45"> <p class="head">【课程推荐】</p> <div class="synchronization mt45"> <div style="height:1rem;border-bottom:0.025rem solid #ffa754;"> <div class="tabs-btn" style="margin-left:20px;">';
$out+=$escape(Course.BookSetName);
$out+='</div> <span class="ml30 red">￥</span> <span class="red" style="font-size:0.6rem;font-weight:600;">';
$out+=$escape(Course.Money);
$out+='元</span> </div> <div class=" mt35 tc"> <div class="tabs mr10 w160"> <span class="">课次</span><span class="span">|</span><span class="">';
$out+=$escape(Course.AllTimes);
$out+='</span> </div> <div class="tabs mr10 w230"> <span class="">学习词汇量</span><span class="span">|</span> <span class="">';
$out+=$escape(Course.WordCount);
$out+='</span> </div> <div class="tabs w210"> <span class="">有效期</span><span class="span">|</span><span class=""> ';
$out+=$escape($helpers. GetBigW (Course.UseMoth ));
$out+='个月 </span> </div> </div> <p class="wordWrap mt40">';
$out+=$escape(Course.Remark);
$out+='</p> </div> </dd> </dl> <div class="footer mt100 mb40"> <p class="line"></p> <div class="kouhao"> ';
if(BGrade=="x"){
$out+=' <span class="timing">20小时</span><span class="ml5">拿下小学</span><span class="timing ml5">6年</span><span class="ml5">单词</span> ';
}else if(BGrade=="c"){
$out+=' <span class="timing">30小时</span><span class="ml5">拿下初中</span><span class="timing ml5">3年</span><span class="ml5">单词</span> ';
}else if(BGrade=="g"){
$out+=' <span class="timing">50小时</span><span class="ml5">拿下高中</span><span class="timing ml5">3年</span><span class="ml5">单词</span> </div> </div> </div> </div>';
return new String($out);}