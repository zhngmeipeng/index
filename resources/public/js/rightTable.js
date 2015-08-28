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

    var servertable=' <table cellspacing="0" >';
    var st = "";

    $.getJSON(
        "../json/cc.json",
        function(data) {
            $.each(data, function(k, v) {
                st+='<tr><td rowspan="2" class="first-td"><input type="checkbox"/></td><td class="second-td">服务器名称</td>' +
                    '<td class="third-td">'+ v.sername+'</td><td class="forth-td">代码</td><td class="five-td">'+ v.code+'</td>' +
                    '<td class="forth-td">IP</td><td class="five-td">'+ v.ip+'</td><td class="forth-td">位置</td>' +
                    '<td class="six-td">'+ v.position+'</td><td class="forth-td">网络</td><td class="five-td">v.internate</td></tr>' +
                    '<tr><td class="second-td">服务器状态</td><td colspan="9" class="last-td">'+v.status+'</td></tr>';

            });
            var sert=servertable+st+'</table>'
            $("#serverTable").html(sert);
        });

    var statable='<table cellspacing="0" >';
    var statt = '';

    $.getJSON(
        "../json/dd.json",
        function(data) {
            $.each(data, function(k, v) {
                statt+='<tr><td rowspan="4" class="first-machine-td"><input type="checkbox"/></td><td class="machine-first">台站名称</td>' +
                    '<td class="machine-second">'+ v.staname+'</td><td class="machine-first">台站代码</td><td class="machine-second">'+ v.stacode+'</td>' +
                    '<td class="machine-first">测点编码</td><td class="machine-second">'+ v.testcod+'</td></tr>' +
                    '<tr><td class="machine-first">仪器名称</td>' +
                    '<td class="machine-second">'+ v.mname+'</td> <td class="machine-first">仪器编号</td><td class="machine-second">'+ v.mcode+'</td>' +
                    '<td class="machine-first">所属学科</td><td class="machine-second">'+ v.ssub+'</td></tr>' +
                    '<tr><td class="machine-first">所在位置</td><td class="machine-second">v.pos</td><td class="machine-first">管理员</td>' +
                    '<td class="machine-second">'+ v.admin+'</td><td class="machine-first">联系电话</td><td class="machine-second">v.tel</td></tr>' +
                    '<tr><td class="machine-first">仪器状态</td><td colspan="5" class="border-th">'+ v.mstatus+'</td></tr>' +
                    '<tr><tr class="machine-last-tr"><td colspan="7" class="machine-last-td"></td> </tr>'

            });
            var status=statable+statt+'</table>';
            console.log(status)
            $("#machineTable").html(status);
        });
};

}