$(function () {
    // Create the chart
    $('#poverty-chart').highcharts({

        title: {
            text: 'Poverty Rate (%)'
        },

        data: {
            googleSpreadsheetKey: '1zJpvL25KiduvaDFWaYWi7hFjNClArypibfTiUXgJ9rE'
        },

        yAxis: {
            title: {
                text: '% of Population'
            },
			labels: {
				format: '{value} %'
			}
        },
		
		tooltip: {
			valueSuffix: '%'
		},

        credits: {
          enabled: false
        }

    });
});
