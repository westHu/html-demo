// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 40, label: '按时完成', formatted: '82%' },
        {value: 30, label: '延迟完成', formatted: '10%' },
        {value: 20, label: '超时未完成', formatted: '5%' },
        {value: 10, label: '直接忽略', formatted: '3%' }
    ],
    backgroundColor: false,
    labelColor: '#fff',
    colors: [
        '#4acacb','#6a8bc0','#5ab6df','#fe8676'
    ],
    formatter: function (x, data) { return data.formatted; }
});


$(function() {

    var d1 = [
        [11.10, 2],
        [11.11, 4],
        [11.12, 5],
        [11.13, 2],
        [11.14, 7],
        [11.15, 8],
        [11.16, 4],
        [11.17, 1],
        [11.18, 5],
        [11.19, 1],
        [11.20, 8],
        [11.21, 7],
        [11.22, 9],
        [11.23, 5],
        [11.24, 7],
        [11.25, 9],
        [11.26, 2]

    ];
	var d1_1 = [
        [11.10, 4],
        [11.11, 5],
        [11.12, 7],
        [11.13, 3],
        [11.14, 9],
        [11.15, 8],
        [11.16, 10],
        [11.17, 8],
        [11.18, 8],
        [11.19, 9],
        [11.20, 12],
        [11.21, 6],
        [11.22, 5],
        [11.23, 4],
        [11.24, 4],
        [11.25, 5],
        [11.26, 2],

    ];
	var d1_2 = [
        [11.10, 5],
        [11.11, 6],
        [11.12, 7],
        [11.13, 5],
        [11.14, 9],
        [11.15, 8],
        [11.16, 10],
        [11.17, 12],
        [11.18, 10],
        [11.19, 9],
        [11.20, 5],
        [11.21, 5],
        [11.22, 4],
        [11.23, 14],
        [11.24, 4],
        [11.25, 5],
        [11.26, 6],

    ];
    var d2 = [
        [11.10, 9],
        [11.11, 8],
        [11.12, 11],
        [11.13, 13],
        [11.14, 14],
        [11.15, 18],
        [11.16, 20],
        [11.17, 2],
        [11.18, 1],
        [11.19, 5],
        [11.20, 8],
        [11.21, 7],
        [11.22, 8],
        [11.23, 14],
        [11.24, 13],
        [11.25, 5],
        [11.26, 11],
    ];

    var data = ([{
        label: "1#巡检小组",
        data: d1,
        lines: {
            show: true,
            fill: true,
            fillColor: {
                colors: ["rgba(255,255,255,.4)", "rgba(183,236,240,.4)"]
            }
        }
    },
	{
        label: "2#巡检小组",
        data: d1_1,
        lines: {
            show: true,
            fill: true,
            fillColor: {
                colors: ["rgba(255,255,255,.2)", "rgba(183,236,240,.2)"]
            }
        }
    },
	{
        label: "3#巡检小组",
        data: d1_2,
        lines: {
            show: true,
            fill: true,
            fillColor: {
                colors: ["rgba(255,255,255,.3)", "rgba(183,236,240,.3)"]
            }
        }
    },
        {
            label: "4#巡检小组",
            data: d2,
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: ["rgba(255,255,255,.0)", "rgba(253,96,91,.7)"]
                }
            }
        }
    ]);

    var options = {
        grid: {
            backgroundColor:
            {
                colors: ["#ffffff", "#f4f4f6"]
            },
            hoverable: true,
            clickable: true,
            tickColor: "#eeeeee",
            borderWidth: 1,
            borderColor: "#eeeeee"
        },
        // Tooltip
        tooltip: true,
        tooltipOpts: {
            content: "%s X: %x Y: %y",
            shifts: {
                x: -60,
                y: 25
            },
            defaultTheme: false
        },
        legend: {
            labelBoxBorderColor: "#000000",
            container: $("#main-chart-legend"), //remove to show in the chart
            noColumns: 0
        },
        series: {
            stack: true,
            shadowSize: 0,
            highlightColor: 'rgba(000,000,000,.2)'
        },
//        lines: {
//            show: true,
//            fill: true
//
//        },
        points: {
            show: true,
            radius: 3,
            symbol: "circle"
        },
        colors: ["#5abcdf", "#ff8673"]
    };
    var plot = $.plot($("#main-chart #main-chart-container"), data, options);
});