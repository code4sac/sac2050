$(function () {
    // Create the chart
    $('#air-quality-ozone-chart').highcharts({

        title: {
            text: "Air Quality (Ozone)"
        },

        data: {
            googleSpreadsheetKey: '1T1ldutJMQfNWdEwImYY2ew3ZxypYP-LKoPOG3hunng0'
        },

        yAxis: {
            title: {
                text: 'Air Quality (Ozone)'
            },
            plotLines: [{
                value: .07,
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
