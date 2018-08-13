$(function () {
    var oMyChartItem = echarts.init(document.getElementById('echarts-box'));
    myChart(oMyChartItem)
    $('#your-slider').flexslider({
        playAfterPaused: 100,
        slideshowSpeed: 3000, //控制滚动时间
        before: function (slider) {
            if (slider._pausedTimer) {
                window.clearTimeout(slider._pausedTimer);
                slider._pausedTimer = null;
            }
        },
        after: function (slider) {
            var pauseTime = slider.vars.playAfterPaused;
            if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
                if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                    slider._pausedTimer = window.setTimeout(function () {
                        slider.play();
                    }, pauseTime);
                }
            }
        }
        // 设置其他参数
    });
    particlesJS.load('particles-js', './particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
})


function myChart(myChart) {
    myChart.showLoading();
    $.get('./index.json', function (data) {
        myChart.hideLoading();

        var base = -data.reduce(function (min, val) {
            return Math.floor(Math.min(min, val.l));
        }, Infinity);
        myChart.setOption(option = {
            title: {
                text: 'Confidence Band',
                subtext: 'Example in MetricsGraphics.js',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#ccc',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        shadowBlur: 0,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        textStyle: {
                            color: '#222'
                        }
                    }
                },
                formatter: function (params) {
                    return params[2].name + '<br />' + params[2].value;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: data.map(function (item) {
                    return item.date;
                }),
                axisLabel: {
                    formatter: function (value, idx) {
                        var date = new Date(value);
                        return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                    }
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false
            },
            yAxis: {
                axisLabel: {
                    formatter: function (val) {
                        return (val - base) * 100 + '%';
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return ((params.value - base) * 100).toFixed(1) + '%';
                        }
                    }
                },
                splitNumber: 3,
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'L',
                type: 'line',
                data: data.map(function (item) {
                    return item.l + base;
                }),
                lineStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                stack: 'confidence-band',
                symbol: 'none'
            }, {
                name: 'U',
                type: 'line',
                data: data.map(function (item) {
                    return item.u - item.l;
                }),
                lineStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#ccc'
                    }
                },
                stack: 'confidence-band',
                symbol: 'none'
            }, {
                type: 'line',
                data: data.map(function (item) {
                    return item.value + base;
                }),
                hoverAnimation: false,
                symbolSize: 6,
                itemStyle: {
                    normal: {
                        color: '#c23531'
                    }
                },
                showSymbol: false
            }]
        });
    });
}