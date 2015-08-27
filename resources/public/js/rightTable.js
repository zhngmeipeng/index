/**
 * Created by Administrator on 2015/8/27 0027.
 */
function showTable(){
window.onload=function(){
    var table='<table cellspacing="0" style="width:100% "><tr class="theme-tr2" >' +
        '<td style="width: 8%;" class="show-border">选择</td>' +
        '<td style="width: 40%;" class="show-border">事件内容</td>' +
        '<td style="width: 25%;" class="show-border">事件类型</td><td class="show-border">时间</td></tr>'
    var tt = "";
    $.getJSON(
        "../json/bb.json",
        function(data) {

            $.each(data, function(k, v) {
                tt+='<tr style="text-align: center" class="theme-tr3"><td class="show-border"><input type="checkbox"></td>';
                $.each(v,function(kk, vv) {
                    tt+="<td class='show-border'>"+vv+"</td>";
                });
                tt+='</tr>'
            });
            var ss=table+tt+"</table>"
            $("#divmessage").html(ss);
        });
}
}