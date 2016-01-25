$(function () {
    // Create the chart
    $('#energy-chart').highcharts({

		chart: {
			type: 'area'
		},
        title: {
            text: "Renewable Energy Use"
        },
		subtitle: {
			text: "Sacramento Municipal Utility District (SMUD)"
		},

        data: {
            googleSpreadsheetKey: '1DAv9hlexTuFjtYxtHOIJwK67Pi-Et50km1G0BE1WE6M'
        },

        yAxis: {
            title: {
                text: '% of Energy Use'
            },
            plotLines: [{
                value: 33,
                color: 'green',
				dashStyle: 'ShortDot',
                width: 2,
                label: {
                    text: 'Goal for 2020 (State of California)'
                }}],
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
