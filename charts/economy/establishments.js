$(function () {
    // Create the chart
    $('#establishments-chart').highcharts({

        title: {
            text: 'Number of Establishments'
        },

        data: {
            googleSpreadsheetKey: '1R01nGwSNpzKp8SKoRFdKGkJESy1o34342ZS1csuyVWg'
        },

        credits: {
          enabled: false
        }

    });
});
