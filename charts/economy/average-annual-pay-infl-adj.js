$(function () {
    // Create the chart
    $('#average-annual-pay-infl-adj-chart').highcharts({

        title: {
            text: "Average Annual Pay (Today's Dollars)"
        },

        data: {
            googleSpreadsheetKey: '1jdAwvcWBAb_HQV3y0OJw_W3UXa-dQGuYRzibEaL5v10'
        },

        yAxis: {
            title: {
                text: '2014 Dollars'
            }
        },

        tooltip: {
            valuePrefix: '$'
        },

        credits: {
          enabled: false
        }

    });
});
