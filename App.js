Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    _atTheStartAddedChart: null,
    _stateChart: null,
    items: [
        {
            xtype: 'container',
            itemId: 'parent',
            //layout: 'column',
            //layout:{
            //    type: 'hbox'
            //},
            items:[
                {
                    xtype: 'container',
                    itemId: 'child1'
                },
                {
                    xtype: 'container',
                    itemId: 'child2'
                }
            ]
        }
    ],
    launch: function() {
        
        this._createAtTheStartAddedChart();
        this._createStateChart();
    },

    _createAtTheStartAddedChart: function () {

    var series = [
        {
            type: 'pie',
            name: 'Features',
            data: [
                {
                    name: 'At the Start',
                    y: 20,
                    color: '#0CDBE8'
                },
                {
                    name: 'Added During Release',
                    y: 30,
                    color: '#FFE11A'
                }
            ]
        }
    ];
    var div = Ext.ComponentQuery.query('#child1')[0];
    this._createChart(series,div);
},

    _createStateChart: function () {
        var me = this;
    
        var series = [
            {
                type: 'pie',
                name: 'Features',
                data: [
                    {
                        name: 'Not Completed in Time',
                        y: 10,
                        color: '#FFE11A'
                    },
                    {
                        name: 'Completed in Time',
                        y: 15,
                        color: '#98C000'
                    },
                    {
                        name: 'Removed from Release',
                        y: 20,
                        color: '#EA2E49'
                    },
                    {
                        name: 'Completely Removed',
                        y: 5,
                        color: '#3D4C53'
                    }
                ]
            }
        ];
        var div = Ext.ComponentQuery.query('#child2')[0];
        this._createChart(series,div);
},

    _createChart: function (series,div) {
        div.add({
            xtype: 'rallychart',
            chartConfig: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Release Features'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: false,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                }
            },
            chartData: {
                series: series
            }
        });
    }
});