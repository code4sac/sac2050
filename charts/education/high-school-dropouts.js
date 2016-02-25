$(function () {
    // Create the chart
    $('#high-school-dropouts-chart').highcharts({

        title: {
            text: "Sacramento County"
        },

        chart: {
            type: 'column'
        },

        data: {
            googleSpreadsheetKey: '1E3iqUHYhPo4XMbaeT6DBx0KUeh0BaUq2EPeWXHhWWtk'
        },

        xAxis: {
            title: {
                text: 'School Year'
            }
        },

        yAxis: {
            title: {
                text: 'Number of Dropouts'
            }
        },

        credits: {
          enabled: false
        }

    });
});
