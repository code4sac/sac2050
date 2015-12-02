$(function () {
    // Create the chart
    $('#google-chart').highcharts({

        title: {
            text: 'Highcharts data from Google Spreadsheets'
        },

        data: {
            googleSpreadsheetKey: '0AoIaUO7wH1HwdENPcGVEVkxfUDJkMmFBcXMzOVVPdHc'
        },

        credits: {
          enabled: false
        }

    });
});
