<div class="btns">
        <div class="addbtn editMesg" style="margin-right:10px;" id="editBtn">编辑</div>
        <div class="addbtn saveVal" style="margin-right:10px;" id="storeBtn">储值</div>
        <div class="addbtn" style="margin-right:30px;" id="froBtn">冻结账号</div>
    </div>
    <div class="contetn-show">
        <div>
            <div class="response-div">
                <span>机构名称 :</span><span>{{OrgName}}</span>
            </div>
        </div>
        <div>
            <div class="response-div mt20">
                <span>合同类型 :</span><span>{{CoType}}</span>
            </div>
            
            <div class="response-div">
                <span>储值余额 :</span><span>{{CurrentValue}}元</span>
            </div>
        </div>
        <div>
            <div class="response-div mt20">
                <span>到期时间 :</span><span>{{ExpireTime | dateFormat: "yyyy-MM-dd" }}</span>
            </div>
            <div class="response-div">
                <span>签约渠道 :</span><span>{{ChannelId}}</span>
            </div>
        </div>
        <div>
            <div class="response-div mt20">
                <span>所在区域 :</span><span>{{ProvinceId}}</span>
            </div>
            <div class="response-div">
                <span>区域等级 :</span><span>{{AreaLeval}}</span>
            </div>
            <div class="response-div">
                <span>教研评级 :</span><span>{{TeachType | TeachTypeTran}}</span>
            </div>
        </div>
        <div>
            <div class="response-div">
                <span>生源量/年 :</span><span>{{Students}}人</span>
            </div>
            <div class="response-div mt20">
                <span>校区数量 :</span><span>{{Schools}}个</span>
            </div>
        </div>
        <div>
            <div class="response-div">
                <span>销售额/年 :</span><span>{{Sales}}元</span>
            </div>
            <div class="response-div mt20">
                <span>教师数量 :</span><span>{{Teachers}}人</span>
            </div>
        </div>
        <div>
            <div class="response-div">
                <span>机构联系人 :</span><span>{{LinkMan}}</span>
            </div>
            <div class="response-div mt20">
                <span>电话 :</span><span>{{LinkManTel}}</span>
            </div>
        </div>
    </div>