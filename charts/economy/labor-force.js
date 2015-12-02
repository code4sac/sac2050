$(function () {
    // Create the chart
    $('#labor-force-chart').highcharts({

        title: {
            text: 'Size of Labor Force'
        },

        data: {
            googleSpreadsheetKey: '1J-nDpDmbpGSzLauRm8uHSfsaiC8FXyQyb0CdEkZodzs'
        },

        credits: {
          enabled: false
        }

    });
});
