$(function () {
    $('#unemployment-chart').highcharts({
        credits: {
          enabled: false
        },
        title: {
            text: 'Unemployment Rate',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Bureau of Labor Statistics',
            x: -20
        },
        xAxis: {
            categories: ['Jan 2006', 'Feb 2006', 'Mar 2006', 'Apr 2006', 'May 2006', 'Jun 2006', 'Jul 2006', 'Aug 2006', 'Sep 2006', 'Oct 2006', 'Nov 2006', 'Dec 2006', 'Jan 2007', 'Feb 2007', 'Mar 2007', 'Apr 2007', 'May 2007', 'Jun 2007', 'Jul 2007', 'Aug 2007', 'Sep 2007', 'Oct 2007', 'Nov 2007', 'Dec 2007', 'Jan 2008', 'Feb 2008', 'Mar 2008', 'Apr 2008', 'May 2008', 'Jun 2008', 'Jul 2008', 'Aug 2008', 'Sep 2008', 'Oct 2008', 'Nov 2008', 'Dec 2008', 'Jan 2009', 'Feb 2009', 'Mar 2009', 'Apr 2009', 'May 2009', 'Jun 2009', 'Jul 2009', 'Aug 2009', 'Sep 2009', 'Oct 2009', 'Nov 2009', 'Dec 2009', 'Jan 2010', 'Feb 2010', 'Mar 2010', 'Apr 2010', 'May 2010', 'Jun 2010', 'Jul 2010', 'Aug 2010', 'Sep 2010', 'Oct 2010', 'Nov 2010', 'Dec 2010', 'Jan 2011', 'Feb 2011', 'Mar 2011', 'Apr 2011', 'May 2011', 'Jun 2011', 'Jul 2011', 'Aug 2011', 'Sep 2011', 'Oct 2011', 'Nov 2011', 'Dec 2011', 'Jan 2012', 'Feb 2012', 'Mar 2012', 'Apr 2012', 'May 2012', 'Jun 2012', 'Jul 2012', 'Aug 2012', 'Sep 2012', 'Oct 2012', 'Nov 2012', 'Dec 2012', 'Jan 2013', 'Feb 2013', 'Mar 2013', 'Apr 2013', 'May 2013', 'Jun 2013', 'Jul 2013', 'Aug 2013', 'Sep 2013', 'Oct 2013', 'Nov 2013', 'Dec 2013', 'Jan 2014', 'Feb 2014', 'Mar 2014', 'Apr 2014', 'May 2014', 'Jun 2014', 'Jul 2014', 'Aug 2014', 'Sep 2014', 'Oct 2014', 'Nov 2014', 'Dec 2014', 'Jan 2015', 'Feb 2015', 'Mar 2015', 'Apr 2015', 'May 2015', 'Jun 2015', 'Jul 2015', 'Aug 2015', 'Sep 2015', 'Oct 2015', 'Nov 2015']
        },
        yAxis: {
            title: {
                text: 'Unemployment Rate (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Sacramento Area',
            data: [4.9, 5.0, 5.0, 4.8, 4.3, 4.7, 4.9, 4.6, 4.4, 4.3, 4.7, 4.6, 5.4, 5.4, 5.3, 5.0, 4.7, 5.2, 5.5, 5.3, 5.3, 5.4, 5.6, 5.8, 6.5, 6.3, 6.5, 6.0, 6.3, 6.9, 7.3, 7.5, 7.4, 7.8, 8.2, 8.6, 9.9, 10.2, 10.5, 9.9, 10.2, 11.0, 11.3, 11.2, 11.3, 11.6, 11.7, 11.7, 12.8, 12.7, 12.7, 12.1, 11.8, 12.3, 12.6, 12.3, 12.1, 12.1, 12.6, 12.4, 12.8, 12.5, 12.4, 11.7, 11.5, 12.2, 12.2, 11.8, 11.4, 11.3, 11.1, 10.9, 11.4, 11.2, 11.1, 10.3, 10.2, 10.6, 10.8, 10.3, 9.6, 9.6, 9.4, 9.4, 10.0, 9.5, 9.1, 8.4, 8.3, 8.9, 9.0, 8.6, 8.2, 8.3, 8.1, 7.7, 8.1, 8.1, 8.1, 6.9, 6.8, 7.0, 7.5, 7.2, 6.6, 6.6, 6.7, 6.3, 6.7, 6.3, 5.9, 5.5, 5.6, 5.6, 6.0, 5.7, 5.1, 5.5, 5.5]
        }]
    });
});
