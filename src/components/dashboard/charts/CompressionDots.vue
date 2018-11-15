<template>
    <v-responsive>
        <div v-if='loading'>Loading...</div>
        <v-card-title primary-title>
            <v-divider class="mx-3" vertical></v-divider>
            <div>
                <div class="headline">{{compressionPressureDataC.Value.toFixed(2)}}</div>
                <span class="grey--text">Measured [{{compressionPressureData.Unit}}] </span>
            </div>
        </v-card-title>
            <div>
                <div class="headline">{{compressionPressureDataC.Ref.toFixed(2)}}</div>
                <span class="grey--text"> Reference </span>
            </div>
    </v-responsive>

</template>

<script>
    // import Chart             from 'chart.js'

    export default {
        name: "CompressionDots",
        props: ['childCompressionDataLoaded', 'compressionPressureData'],
        data: function () {
            return {
                loading: true,
                compressionPressureDataC: this.compressionPressureData,
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

            mounted() {
                this.loading = false;



                // this.createChart('doughnut-chart', this.doughnutChartData);

        }
    }
</script>

<style scoped>

</style>