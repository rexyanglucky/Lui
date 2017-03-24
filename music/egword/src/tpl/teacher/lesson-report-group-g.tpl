<div class="card">
    <div class="card-header">选择奖励小组</div>
    <div class="card-content">
        <div class="card-content-inner">
            <div class="list-block">
                <ul>
                    {{each $data as v i}}
                    <li class="item-content b-grouplist-item" data-groupindex="{{v.GroupIndex}}" data-classgroupid="{{v.ClassGroupID}}">
                        <div class="item-media"></div>
                        <div class="item-inner">
                            <div class="item-title">
                                <span class="seq">{{v.Ranking}}.</span>
                                <span>{{v.GroupIndex}}组</span>
                            </div>
                            <div class="item-after"><span class="word-num">奖学币：<span>{{v.Currency}}</span></span></div>
                        </div>
                    </li>
              
                     {{/each}}
                </ul>
            </div>
        </div>
    </div>
    <div class="card-footer"></div>
</div>