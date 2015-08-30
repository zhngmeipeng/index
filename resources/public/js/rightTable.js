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
                tt+='<tr style="text-align: center" class="theme-tr3"><td class="show-border"><input type="checkbox"></td>' +
                    '<td class="show-border">'+ v.productid+'</td><td class="show-border">'+ v.productname+'</td><td class="show-border">'+ v.unitcost+'</td>';
/*                $.each(v,function(kk, vv) {
                    tt+="<td class='show-border'>"+vv+"</td>";
                });*/
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
                    '<td class="machine-first">测点编码</td><td class="machine-second">'+ v.testcode+'</td></tr>' +
                    '<tr><td class="machine-first">仪器名称</td>' +
                    '<td class="machine-second">'+ v.mname+'</td> <td class="machine-first">仪器编号</td><td class="machine-second">'+ v.mcode+'</td>' +
                    '<td class="machine-first">所属学科</td><td class="machine-second">'+ v.ssub+'</td></tr>' +
                    '<tr><td class="machine-first">所在位置</td><td class="machine-second">v.pos</td><td class="machine-first">管理员</td>' +
                    '<td class="machine-second">'+ v.admin+'</td><td class="machine-first">联系电话</td><td class="machine-second">'+v.tel+'</td></tr>' +
                    '<tr><td class="machine-first">仪器状态</td><td colspan="5" class="border-th">'+ v.mstatus+'</td></tr>' +
                    '<tr><tr class="machine-last-tr"><td colspan="7" class="machine-last-td"></td> </tr>'

            });
            var status=statable+statt+'</table>';
            $("#machineTable").html(status);
        });
};

    var mtable=' <table cellspacing="0" width="730px"><tr><td style="width: 10%;" class="machine-first-row">选择</td><td  style="width: 30%;" class="machine-first-row">反馈时间</td>' +
        ' <td  style="width: 60%;" class="machine-first-row">反馈内容</td> </tr><tr><td colspan="3" class="feedback-last-td"></td></tr>';
    var mtt = '';

    $.getJSON(
        "../json/ee.json",
        function(data) {
            $.each(data, function (k, v) {
                mtt +='<tr><td  class="text-position"><input type="checkbox"></td><td  class="text-position">'+ v.fbtime+'</td> <td  class="text-position">'+v.content+'</td><tr><td colspan="3" class="feedback-last-td"></td></tr>';
            });
            var mss = mtable + mtt + '</table>';
            $("#feedbackTable").html(mss);
        });

    var rtable=' <table cellspacing="0" width="700px"><tr class="theme-tr" style=" background-color: rgb(241,241,241);">' +
        ' <td class="theme-td">任务名称</td> <td class="theme-td">任务状态</td><td class="theme-td">检查时间</td><td class="o-td">操作</td></tr> <tr class="blank-tr">' +
        '<td colspan="4"></td></tr>'
    var rtt = '';

    $.getJSON(
        "../json/ff.json",
        function(data) {
            $.each(data, function (k, v) {
                rtt +='<tr class="theme-tr"><td class="border-th">'+ v.name+'</td><td class="border-th">'+ v.status+'</td><td class="border-th">'+ v.time+'</td>' +
                    '<td class="border-th"><a href="###">刷新</a>&nbsp;<a href="###">设置</a></td></tr> <tr class="blank-tr"><td colspan="4"></td></tr>';
            });
            var rss = rtable + rtt + '</table>';
            $("#reportId").html(rss);
        });

    var r2table='<table cellspacing="0" class="feedbackTable2-table"><tr class="aa" style=" background-color: rgb(241,241,241);">' +
        '<td style="width: 5%">选择</td><td style="width: 10%">台网名称</td><td style="width: 10%">台网代码</td><td style="width: 10%">台站名称</td> <td style="width: 10%">台站名称</td>' +
        '<td style="width: 5%">位置</td><td style="width: 10%">数采地址</td><td style="width: 5%">网关</td><td style="width: 9%">通讯类型</td><td style="width:7%">联系人</td>' +
        '<td style="width:7%">联系人电话</td><td style="width: 9%">穿越阀值</td></tr><tr class="table2-last"><td colspan="12"></td></tr>'

    var r2tt = '';

    $.getJSON(
        "../json/gg.json",
        function(data) {
            $.each(data, function (k, v) {
                r2tt +='<tr class="theme-tr"><td class="border-th"><input type="checkbox"/></td><td class="border-th">'+ v.name+'</td><td class="border-th">'+ v.code+'</td><td class="border-th">'+ v.sname+'</td>' +
                    '<td class="border-th">'+ v.scode+'</td><td class="border-th">'+ v.position+'</td><td class="border-th">'+ v.addr+'</td><td class="border-th">'+ v.close+'</td>' +
                    '<td class="border-th">'+ v.tx+'</td><td class="border-th">'+ v.people+'</td><td class="border-th">'+ v.pnumber+'</td><td class="border-th">'+ v.num+'</td></tr><tr class="blank-tr"><td colspan="12"></td></tr>';
            });
            var r2ss = r2table + r2tt + '</table>';
            console.log(r2ss)
            $("#feedbackTable2").html(r2ss);
        });
}