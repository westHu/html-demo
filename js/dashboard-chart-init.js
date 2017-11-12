// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 40, label: '江河蓄水', formatted: 'approx. 27%' },
        {value: 30, label: '民用水', formatted: 'approx. 40%' },
        {value: 20, label: '直接利用', formatted: 'approx. 10%' },
        {value: 10, label: '工业用水', formatted: 'at most 23%' }
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
        [0, 501],
        [1, 620],
        [2, 437],
        [3, 361],
        [4, 549],
        [5, 618],
        [6, 570],
        [7, 758],
        [8, 658],
        [9, 538],
        [10, 488]

    ];
	var d1_1 = [
        [0, 292],
        [1, 310],
        [2, 357],
        [3, 211],
        [4, 429],
        [5, 568],
        [6, 330],
        [7, 208],
        [8, 418],
        [9, 208],
        [10, 198]

    ];
	var d1_2 = [
        [0, 401],
        [1, 690],
        [2, 417],
        [3, 311],
        [4, 509],
        [5, 698],
        [6, 500],
        [7, 658],
        [8, 608],
        [9, 508],
        [10, 408]

    ];
    var d2 = [
        [0, 401],
        [1, 520],
        [2, 337],
        [3, 261],
        [4, 449],
        [5, 518],
        [6, 470],
        [7, 658],
        [8, 558],
        [9, 438],
        [10, 388]
    ];

    var data = ([{
        label: "姚江流域",
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
        label: "甬江流域",
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
        label: "白溪流域",
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
            label: "奉化江流域",
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