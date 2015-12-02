$(function () {
    // Create the chart
    $('#housing-prices-chart').highcharts({

        title: {
            text: 'Median Price of Homes Sold'
        },

        data: {
            googleSpreadsheetKey: '11XKvR53uCh5OjGt07loyCX2-jJMgjxpbbMAtwEDE738'
        },

        credits: {
          enabled: false
        }

    });
});
