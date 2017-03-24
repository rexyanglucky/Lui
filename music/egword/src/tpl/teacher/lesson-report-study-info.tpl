<div class="card">
    <div class="head-before"></div>
    <div class="card-header">
        <span>{{studentOne.UserName}}</span>
        <span>课次：<span>{{studentOne.CurrentNumber}}/{{studentOne.BookNumber}}</span></span>
    </div>
    <div class="card-content">
        <div class="card-content-inner">
            {{if studentOne.LeftNumber == 0}}
            <div class="lesson-circle over">已结课</div>
            {{else if studentOne.LeftNumber == 1}}
            <div class="lesson-circle normal">剩1次</div>
            {{else}}

            {{/if}}

            <div class="content-block-title">
                本次课程
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                新学单词：
                                {{if studentOne.NewWord<studentAll.SourceWordNum}}
                                <span class="word-num">
                                    {{studentOne.NewWord}}
                                    {{else}}
                                    <span>
                                        {{studentOne.NewWord}}
                                        {{/if}}

                                    </span>
                                    <span class="item-remark">（目标值：<span>{{studentAll.SourceWordNum}}</span>）</span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                奖励学分：<span>{{studentOne.Credits}}</span>
                                <span class="item-remark">（班级排名：<span>{{studentOne.StudentOrder}}</span>）</span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                单元小测：<span>{{studentOne.UnitFullScore}}个100分</span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                拼写错误率：<span>{{studentOne.SpellFix}}%</span>；
                                词义错误率：<span>{{studentOne.NatureFix}}%</span>；
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="split"></div>
            <div class="content-block-title">
                累计成果
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                单词学习进度：<span>{{studentAll.NewWord}}/{{studentAll.DestNumber}}</span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                累计学分：
                                <!--(总课次-剩余课次) * 单课目标量-->
                                {{if studentAll.Credits<(studentAll.BookNumber-studentAll.LeftNumber)*studentAll.SourceWordNum}}
                                <span class="word-num">
                                    {{studentAll.Credits}}
                                    {{else}}
                                    <span>
                                        {{studentAll.Credits}}
                                        {{/if}}
                                    </span>
                                    <span class="item-remark">
                                        （参考值：<span>
                                            {{if (studentAll.BookNumber-studentAll.LeftNumber)*studentAll.SourceWordNum >= studentAll.DestNumber}}
                                            {{studentAll.DestNumber}}/{{studentAll.DestNumber}}
                                            {{else}}
                                            {{(studentAll.BookNumber-studentAll.LeftNumber)*studentAll.SourceWordNum}}/{{studentAll.DestNumber}}
                                            {{/if}}
                                        </span>）
                                    </span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                单元小测：<span>{{studentAll.UnitFullScore}}个100分</span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                拼写错误率：<span>{{studentAll.SpellFix}}%</span>；
                                词义错误率：<span>{{studentAll.NatureFix}}%</span>；
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>

                    <!--<li class="item-content">
                        <div class="item-inner">
                            <div class="item-title">
                                单元过关：

                                {{if studentAll.MyPassUnitCount<studentAll.AddSourceUnitCount}}
                                <span class="word-num">
                                    {{studentAll.MyPassUnitCount}}
                                {{else}}
                                    <span>
                                 {{studentAll.MyPassUnitCount}}
                                {{/if}}
                                </span>
                                <span class="item-remark">（参考值：<span>{{studentAll.AddSourceUnitCount}}/{{studentAll.UnitCount}}</span>）</span>
                            </div>
                            <div class="item-after"></div>
                        </div>
                    </li>-->
                </ul>
            </div>
        </div>
    </div>
</div>