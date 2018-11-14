<template>
    <v-responsive>

        <v-card-title primary-title>
            <v-divider class="mx-3" vertical></v-divider>
            <div>
                <div class="headline">{{compressionPressureData.percent}}</div>
                <span class="grey--text">Measured [{{compressionPressureData.units}}] </span>
            </div>
        </v-card-title>
            <div>
                <div class="headline">{{compressionPressureData.reference}}</div>
                <span class="grey--text">Reference </span>
            </div>
    </v-responsive>

</template>

<script>
    // import Chart             from 'chart.js'
    import axios             from 'axios'

    export default {
        name: "CompressionDots",
        props: {
            // Required string
            lorem: {
                type: String,
                required: true
            },
        },
        data: function () {
            return {
                compressionPressureData: {
                    percent: 0,
                    units: '',
                    reference: 0,
                },
                dotsChartData: {
                    type: 'doughnut',
                    data: {
                        labels: ['State',],
                        datasets: [
                            {
                                label: 'Compression Pressure',
                                backgroundColor: ['green',],
                                data: [40,],
                            }
                        ]
                    }
                }
            }
        },
    //     methods: {
    //         createChart(chartId, chartData) {
    //             const ctx = document.getElementById(chartId);
    //             const myDoughnutChart = new Chart(ctx, {
    //                 type: chartData.type,
    //                 data: chartData.data,
    //             });
    //             myDoughnutChart.datasets[0].data[0] = 180;
    //         },
            mounted() {
                axios
                    .get('http://localhost:8092/GetEDSWebData/21')
                    .then((response) => {
                        this.compressionPressureData.percent = response.data.Card.Value.toFixed(2);
                        this.compressionPressureData.units = response.data.Card.Unit;
                        this.compressionPressureData.reference = response.data.reference;
                        // this.doughnutChartData = {
                        //     type: 'doughnut',
                        //     data: {
                        //         labels: ['State',],
                        //         datasets: [
                        //             {
                        //                 label: 'Compression Pressure',
                        //                 backgroundColor: ['blue',],
                        //                 data: [response.data.EngineKPI.Value,],
                        //             }
                        //         ]
                        //     }
                        // };
                        // this.createChart('doughnut-chart', this.doughnutChartData);
                        }
                    );
        }
    }
</script>

<style scoped>

</style>