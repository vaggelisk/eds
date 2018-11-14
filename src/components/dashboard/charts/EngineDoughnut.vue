<template>
    <canvas id="engine-dashboard-chart"></canvas>
</template>

<script>
    import Chart             from 'chart.js'
    import axios             from 'axios'

    export default {
        name: "EngineDoughnut",
        data: function() {
            return {
                doughnutChartData: {
                    type: 'doughnut',
                    data: {
                        labels: ['State',],
                        datasets: [
                            {
                                label: 'Compression Pressure',
                                backgroundColor: ['green',],
                                data: [40, ],
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            createChart2(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myChart2 = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                });
            }
        },
        mounted () {
            axios
                .get('http://localhost:8092/GetEDSWebData/20')
                .then((response) => {
                        this.doughnutChartData = {
                            type: 'doughnut',
                            data: {
                                labels: [response.data.EngineKPI.Value.toString() + '%' ,],
                                datasets: [
                                    {
                                        label: 'Engine Pressure',
                                        backgroundColor: ['green', 'black'],
                                        data: [response.data.EngineKPI.Value, 100 - response.data.EngineKPI.Value],
                                    }
                                ]
                            }
                        };
                        this.createChart2('engine-dashboard-chart', this.doughnutChartData);
                    }
                );

        }

    }
</script>

<style scoped>

</style>