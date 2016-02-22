$(function () {
    // Create the chart
    $('#crime-chart').highcharts({

		chart: {
			type: 'area'
		},
        title: {
            text: "Crime"
        },
		subtitle: {
			text: "City of Sacramento"
		},

        data: {
            googleSpreadsheetKey: '1u8pnJPzavHDtGCMUPsnPNjsScLZO8hA46Yta4lu3UXQ'
        },

        yAxis: {
            title: {
                text: 'Incidents per 100,000 people'
            },
			min: 0
        },

        tooltip: {
            valuePrefix: ''
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#ffffff',
                lineWidth: 0,
                marker: {
					enabled: false,
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },

        credits: {
          enabled: false
        }

    });
});
