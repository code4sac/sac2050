$(function () {
    // Create the chart
    $('#average-annual-pay-chart').highcharts({

        title: {
            text: 'Average Annual Pay'
        },

        data: {
            googleSpreadsheetKey: '1SeSBpyoT_d0zat1xpDzrLQ8HYYbv-4ljXaksvnPPY8k'
        },

        yAxis: {
            title: {
                text: 'Dollars'
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
