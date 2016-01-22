$(function () {
    // Create the chart
    $('#air-quality-pm25-chart').highcharts({

        title: {
            text: "Air Quality (Particulate Matter)"
        },

        data: {
            googleSpreadsheetKey: '1wuVwW1LheXoul799yVHJB7cnXCrr3asom7HAGCowIVs'
        },

        yAxis: {
            title: {
                text: 'micrograms per cubic meter'
            },
            plotLines: [{
                value: 12,
                color: 'green',
				dashStyle: 'ShortDot',
                width: 2,
                label: {
                    text: 'California Standard'
                }}],
			min: 0
        },

        tooltip: {
            valuePrefix: ''
        },

        credits: {
          enabled: false
        }

    });
});
