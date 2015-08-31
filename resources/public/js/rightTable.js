/**
 * Created by Administrator on 2015/8/27 0027.
 */
function showTable(){
    $(document).ready(function(){
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
            $("#feedbackTable2").html(r2ss);
        });

    var r3table='<table cellspacing="0"  class="feedbackTable2-table" ><tr class="aa" style=" background-color: rgb(204,204,204);">' +
        '<td width="5%">选择</td> <td width="16%">台站名称</td> <td width="13%">台站代码</td> <td width="13%">仪器状态</td> <td width="13%">供电系统</td>' +
        '<td width="13%">通讯系统</td><td width="13%">避雷系统</td><td width="14%">巡查时间</td></tr><tr class="table2-last"><td colspan="8"></td></tr>'

    var r3tt = '';

    $.getJSON(
        "../json/ii.json",
        function(data) {
            $.each(data, function (k, v) {
                r3tt +='<tr class="theme-tr"><td class="border-th"><input type="checkbox"/></td><td class="border-th">'+ v.name+'</td><td class="border-th">'+ v.code+'</td><td class="border-th">'+ v.sname+'</td>' +
                    '<td class="border-th">'+ v.scode+'</td><td class="border-th">'+ v.position+'</td><td class="border-th">'+ v.addr+'</td><td class="border-th">'+ v.close+'</td></tr><tr class="table2-last"><td colspan="8"></td></tr>'
            });
            var r3ss = r3table + r3tt + '</table>';
            $("#feedbackTable3").html(r3ss);
        });

    var r4table='<table cellspacing="0" class="feedbackTable2-table" style="font-size: 10px"><tr class="aa" style=" background-color: rgb(204,204,204);">' +
      '<td style="width: 6%;">选择</td><td style="width: 8%;">台站名称</td><td style="width: 8%;">台站代码</td><td style="width: 8%;">测点编码</td>' +
        '<td style="width: 8%;">仪器名称</td> <td style="width: 8%;">仪器型号</td><td style="width: 8%;">所属学科</td><td style="width: 15%;">标定开始时间</td>' +
        '<td style="width: 15%;">标定结束时间</td><td style="width: 8%;">标定内容</td><td style="width: 8%;">标定结果</td>' +
        '</tr><tr class="table2-last"><td colspan="12"></td></tr>'

    var r4tt = '';

    $.getJSON(
        "../json/jj.json",
        function(data) {
            $.each(data, function (k, v) {
                r4tt +='<tr class="theme-tr"><td class="border-th"><input type="checkbox"/></td><td class="border-th">'+ v.name+'</td><td class="border-th">'+ v.code+'</td><td class="border-th">'+ v.sname+'</td>' +
                    '<td class="border-th">'+ v.scode+'</td><td class="border-th">'+ v.position+'</td><td class="border-th">'+ v.addr+'</td><td class="border-th">'+ v.close+'</td>' +
                    '<td class="border-th">'+ v.tx+'</td><td class="border-th">'+ v.people+'</td><td class="border-th">'+ v.pnumber+'</td></tr><tr class="blank-tr"><td colspan="11"></td></tr>';
            });
            var r4ss = r4table + r4tt + '</table>';
            $("#feedbackTable4").html(r4ss);
        });



        var r5table='<table cellspacing="0"  width="100%">';
        $.getJSON(
            "../json/hh.json",
            function(data) {
                $.each(data, function (k, v) {
                     r5table+=' <tr class="table5-ele"><td colspan="2" class="table5-first">故障开始时间</td>' +
                        '<td colspan="3" class="table5-second">'+ v.name+'</td><td class="table5-three">故障结束时间</td><td class="table5-four">'+ v.code+'</td>' +
                        '</tr><tr class="table5-ten"><td rowspan="5" class="table5-five"><input type="checkbox"></td><td class="table5-six">台站名称</td><td class="table5-nine">'+ v.sname+'</td>' +
                        '<td class="table5-six">台站代码</td><td class="table5-six">'+ v.scode+'</td><td class="table5-eight">测点代码</td><td class="table5-seven">'+ v.position+'</td>' +
                        '</tr><tr class="table5-ten"><td class="table-twe">仪器名称</td><td class="table-twe">'+ v.addr+'</td><td class="table-twe">仪器型号</td> <td class="table-twe">'+ v.close+'</td><td class="table-twe">所属学科</td><td class="table-twe">'+ v.tx+'</td></tr><tr class="table5-ten">' +
                        '<td class="table-twe">仪器名称</td><td colspan="4" class="table-twe">'+ v.people+'</td></tr><tr class="table5-ten"><td class="table-twe">保修时间</td><td class="table-twe">'+ v.pnumber+'</td><td class="table-twe">送修时间</td><td class="table-twe">'+ v.num+'</td><td class="table-twe">维修人员</td>' +
                        '<td class="table-twe">'+ v.ss+'</td> </tr><tr class="table5-ten"><td class="table-twe">维修内容</td><td colspan="3" class="table-twe">'+ v.kk+'</td><td class="table-twe">维修结果</td><td class="table-twe">'+ v.cc+'</td></tr><tr><td colspan="7" class="blank-tr"></td></tr>'

                });
                var r5ss = r5table +'</table>';
                $("#feedbackTable5").html(r5ss);
            });


        var ss=document.getElementsByName('square');
    for(var i=0;i<ss.length;i++){
        showTable(i);
    }
        function showTable(i){
            ss[i].onclick=function(){
                $("div[name^='table']").css('display','none');
                $('#table'+i).css('display','block');
                $("div[name^='square']").css('background','url("../img/white-square.png")');
                $('#square'+i).css('background','url("../img/day-report.png")');

            }
        }

});

}