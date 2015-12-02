$(function () {
    // Create the chart
    $('#health-insurance-chart').highcharts({

        title: {
            text: 'Health Insurance Type and Uninsured'
        },

        subtitle: {
            text: 'Sacramento County'
        },

        data: {
            googleSpreadsheetKey: '1fAFzSGAxvbmhg3533so9EWEPmnDxeVwIQ8MTGvKZkzU'
        },

        chart: {
            type: 'column'
        },

        yAxis: {
            min: 0,
            title: {
                text: 'Type of Insurance'
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },

        credits: {
          enabled: false
        }

    });
});
