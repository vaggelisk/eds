<template>
        <!--<div>{{ doughnutChartData.data.datasets[0].data[0] }}</div>-->
        <canvas id="doughnut-chart"></canvas>
</template>

<script>
    import Chart             from 'chart.js'
    import axios             from 'axios'
    // import data              from  './doughnut-chart.js'


    export default {
        name: "DoughnutChart",


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
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myDoughnutChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                });
            },
            getDoughnutChartApiData: function (x) {
                try {
                    console.log(x);
                    axios.get('http://localhost:8092/GetEDSWebData/20')
                        .then(
                            function (response, y = x) {
                                console.log(response.data.Card.Value);

                                let helper = [];
                                helper.push(response.data.EngineKPI.Value);
                                console.log(helper);
                                console.log("jdhfdjh");

                        });
                } catch (error) {
                    console.error(error)
                }
            }
        },

        mounted () {
            axios
                .get('http://localhost:8092/GetEDSWebData/20')
                .then(response => (
                    this.doughnutChartData = {
                        type: 'doughnut',
                        data: {
                            labels: ['State',],
                            datasets: [
                                {
                                    label: 'Compression Pressure',
                                    backgroundColor: ['green',],
                                    data: [response.data.EngineKPI.Value, ],
                                }
                            ]
                        }
                    }
                ));
            this.createChart('doughnut-chart' , this.doughnutChartData);
        }
    }
</script>

<style scoped>

</style>