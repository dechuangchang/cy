// http://amazeui.org/css/table

var classDataDay = [];
var classDataWeeks = [];
var classDataMonth = [];

$(function () {
    var oMyChartAll = echarts.init(document.getElementById('class-all-echarts'));

    var oMyChartItem = echarts.init(document.getElementById('class-item-echarts'));

    oMyChartAll.setOption(myChartAll());
    oMyChartItem.setOption(myChartItem());


    function myChartItem() {
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        for (var i = 0; i < 10; i++) {
            xAxisData.push(2018 + i);
            data1.push(10-(Math.random()*20));
            data2.push(10-(Math.random()*20));
            data3.push(10-(Math.random()*20));
            data4.push(10-(Math.random()*20));
            data5.push(10-(Math.random()*20));
            data6.push(10-(Math.random()*20));
            data7.push(10-(Math.random()*20));
            data8.push(10-(Math.random()*20));
        }
        option = {
            
            legend: {
                data: ['食品烟酒', '衣着','居住','生活用品及服务','交通和通讯','教育文化和娱乐','医疗保健','其他用品和服务'],
                align: 'left'
            },
            // toolbox: {
            //     // y: 'bottom',
            //     feature: {
            //         magicType: {
            //             type: ['stack', 'tiled']
            //         },
            //         dataView: {},
            //         saveAsImage: {
            //             pixelRatio: 2
            //         }
            //     }
            // },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: '食品烟酒',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: '衣着',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '居住',
                type: 'bar',
                data: data3,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '生活用品及服务',
                type: 'bar',
                data: data4,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '交通和通讯',
                type: 'bar',
                data: data5,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '教育文化和娱乐',
                type: 'bar',
                data: data6,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '医疗保健',
                type: 'bar',
                data: data7,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '其他用品和服务',
                type: 'bar',
                data: data8,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        return option
    }

    function myChartAll() {
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        for (var i = 0; i < 10; i++) {
            xAxisData.push(2018 + i);
            data1.push(10-(Math.random()*20));
            data2.push(10-(Math.random()*20));
            data3.push(10-(Math.random()*20));
            data4.push(10-(Math.random()*20));
            data5.push(10-(Math.random()*20));
            data6.push(10-(Math.random()*20));
            data7.push(10-(Math.random()*20));
            data8.push(10-(Math.random()*20));
        }
        option = {
            
            legend: {
                data: ['食品烟酒', '衣着','居住','生活用品及服务','交通和通讯','教育文化和娱乐','医疗保健','其他用品和服务'],
                align: 'left'
            },
            // toolbox: {
            //     // y: 'bottom',
            //     feature: {
            //         magicType: {
            //             type: ['stack', 'tiled']
            //         },
            //         dataView: {},
            //         saveAsImage: {
            //             pixelRatio: 2
            //         }
            //     }
            // },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: '食品烟酒',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: '衣着',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '居住',
                type: 'bar',
                data: data3,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '生活用品及服务',
                type: 'bar',
                data: data4,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '交通和通讯',
                type: 'bar',
                data: data5,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '教育文化和娱乐',
                type: 'bar',
                data: data6,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '医疗保健',
                type: 'bar',
                data: data7,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }, {
                name: '其他用品和服务',
                type: 'bar',
                data: data8,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        return option
    }
    //日周年按钮点击
    $('.buts .data-but').on('click', function () {
        // $(this).attr('key') 获取按钮类型
        
        oMyChartAll.setOption(myChartAll());
        oMyChartItem.setOption(myChartItem());
        for (var i = 0; i < $('.buts .data-but').length; i++) {
            $('.buts .data-but').eq(i).removeClass('am-btn-primary');
            $(this).addClass('am-btn-primary');
        }
        //设置按钮状态
    })

    $(function() {
        $('#doc-datepicker-start').datepicker().
          on('changeDate.datepicker.amui', function(event) {
            console.log(event.date);
          });
      });
      $(function() {
        $('#doc-datepicker-end').datepicker().
          on('changeDate.datepicker.amui', function(event) {
            console.log(event.date);
          });
      });
})

