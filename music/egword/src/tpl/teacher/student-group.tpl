{{if isgroup}}

<!--分组排列情况-->
<div class="list-block cards-list">
    <ul>
{{each list as v i}}

        <li class="card">
            <div class="card-header">{{v.GroupIndexId}}组</div>
            <div class="card-content">
                <div class="card-content-inner">
                    {{each v.StudentInfoList as d j}}
                    <div class="stu sel">
                        <luicheck class="lui_checkbox" data-name="g1" data-val="{{d.StudentID}}" data-groupindexid="{{v.GroupIndexId}}" data-text="" data-checked="1"></luicheck>
                        <span class="check-name">{{d.UserName}}</span>
                        <span class="info">{{(d.BookNumber - d.LeftNumber)}}/{{d.BookNumber}}</span>
                    </div>
                    {{/each}}
                </div>
            </div>
        </li>
{{/each}}

    </ul>
</div>

{{else}}

<!--未分组排列情况-->
<div class="list-block cards-list">
    <ul>
        {{each list as v i}}
        <li class="card">
            <div class="card-content">
                <div class="card-content-inner">
                    {{each v.StudentInfoList as d j}}
                    <div class="stu sel">
                        <luicheck class="lui_checkbox" data-name="g1" data-val="{{d.StudentID}}" data-groupindexid="{{v.GroupIndexId}}" data-text="" data-checked="1"></luicheck>
                        <span class="check-name">{{d.UserName}}</span>
                        <span class="info">{{(d.BookNumber - d.LeftNumber)}}/{{d.BookNumber}}</span>
                    </div>
                    {{/each}}
                </div>
            </div>

        </li>
          {{/each}}
    </ul>
</div>
{{/if}}