// http://amazeui.org/css/table

var classDataDay = [];
var classDataWeeks = [];
var classDataMonth = [];

$(function () {
    getData()

    // 设置dom
    function createAllClassDom(data) {
        var arrDom = []
        for (var i = 0; i < data.length; i++) {
            var yesterdayType = data[i].yesterday > 0 ? 'add' : 'minus';
            var todayType = data[i].today > 0 ? 'add' : 'minus';
            var yesterday = data[i].yesterday > 0 ? '+' + data[i].yesterday : data[i].yesterday;
            var today = data[i].today > 0 ? '+' + data[i].today : data[i].today;

            var dom = "<tr class='class-item'>" +
                "<td>" + data[i].name + "</td>" +
                "<td class=" + todayType + ">" + today + "</td>" +
                "<td class=" + yesterdayType + ">" + yesterday + "%</td>" +
                "</tr>"
            arrDom.push(dom)
        }
        $('#class-all-tbody').html(arrDom)
    }

    // 设置dom
    function createItemClassDom(data) {
        var arrDom = []
        for (var i = 0; i < data.length; i++) {
            var yesterdayType = data[i].yesterday > 0 ? 'add' : 'minus';
            var todayType = data[i].today > 0 ? 'add' : 'minus';
            var yesterday = data[i].yesterday > 0 ? '+' + data[i].yesterday : data[i].yesterday;
            var today = data[i].today > 0 ? '+' + data[i].today : data[i].today;

            var dom = "<tr class='class-item'>" +
                "<td>" + data[i].name + "</td>" +
                "<td class=" + todayType + ">" + today + "</td>" +
                "<td class=" + yesterdayType + ">" + yesterday + "%</td>" +
                "</tr>"
            arrDom.push(dom)
        }
        $('#class-item-tbody').html(arrDom)
    }

    function setHeaderDom(type){
        var PAGE = {
            classDataDay : ['今日指数','昨日指数'],
            classDataWeeks :['上周指数','上上周指数'] ,
            classDataMonth :['上月指数','上上月指数'] ,
        }
        var dom = '<tr>'+
            '<th class="align-left">分类名称</th>'+
            '<th class="align-right">'+PAGE[type][0]+'</th>'+
            '<th class="align-right">'+PAGE[type][1]+'</th>'+
        '</tr>'
        $('#class-item-thead').html(dom)
        $('#class-all-thead').html(dom)
    }
    
    //获取数据
    function getData() {
        var date = new Date();
        var timer = date.getTime().toString();
        $.ajax({
            url: './index.json?' + timer,
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                classDataDay = response.classDataDay;
                classDataWeeks = response.classDataWeeks;
                classDataMonth = response.classDataMonth;
                createAllClassDom(classDataDay)//默认日数据
                createItemClassDom(classDataDay)
            },
        })
    }

    //日周年按钮点击
    $('.buts .data-but').on('click',function(){
        var PAGE = {
            classDataDay : classDataDay,
            classDataWeeks : classDataWeeks,
            classDataMonth : classDataMonth,
        }//日周年数据配置

        createAllClassDom(PAGE[$(this).attr('key')])
        createItemClassDom(PAGE[$(this).attr('key')])
        setHeaderDom($(this).attr('key'))
        //切换数据
        for(var i = 0; i<$('.buts .data-but').length ; i++){
            $('.buts .data-but').eq(i).removeClass('am-btn-primary');
            $(this).addClass('am-btn-primary');
        }
        //设置按钮状态
    })
})

