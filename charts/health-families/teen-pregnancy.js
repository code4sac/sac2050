$(function () {
    // Create the chart
    $('#teen-pregnancy-chart').highcharts({
      
        title: {
            text: "Births by Mother's Age by ZIP Code, 2008-2012"
        },

        data: {
            googleSpreadsheetKey: '1nqYo2BQy9O_TqBOaG4vlvAXLlM50pPIpj6XGVzwrsSU'
        },

        credits: {
          enabled: false
        }

    });
});
