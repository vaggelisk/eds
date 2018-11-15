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
        props: ['childDataLoaded', 'compressionPressureData']
            // compressionPressureData: {
            //     type: Object,
            // },

        ,
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


                // eslint-disable-next-line
                // console.log(this.compressionPressureDataC.Value)
                // axios
                //     .get('http://localhost:8092/GetEDSWebData/21')
                //     .then((response) => {
                //         this.compressionPressureData.percent = response.data.Card.Value.toFixed(2);
                //         this.compressionPressureData.units = response.data.Card.Unit;
                //         this.compressionPressureData.reference = response.data.reference;
                //         // this.doughnutChartData = {
                //         //     type: 'doughnut',
                //         //     data: {
                //         //         labels: ['State',],
                //         //         datasets: [
                //         //             {
                //         //                 label: 'Compression Pressure',
                //         //                 backgroundColor: ['blue',],
                //         //                 data: [response.data.EngineKPI.Value,],
                //         //             }
                //         //         ]
                //         //     }
                //         // };
                //         // this.createChart('doughnut-chart', this.doughnutChartData);
                //         }
                //     );
        }
    }
</script>

<style scoped>

</style>