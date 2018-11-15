<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
                <v-card color="purple" dark height="200px">
                    <v-card-title primary class="title">Notification</v-card-title>
                    <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
                <v-layout row wrap>

                    <v-flex d-flex>
                        <v-card  dark>
                            <v-card-title primary class="title">Performance Parameters</v-card-title>
                            <v-responsive contain>
                                <PerformanceBar />
                            </v-responsive>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
                <v-card dark>
                    <v-card-title primary class="title">Engine KPI</v-card-title>
                    <v-responsive contain>
                        <EngineDoughnut />
                    </v-responsive>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2>
                <v-card dark>
                    <v-card-title primary class="title">Compression Pressure</v-card-title>
                    <!-- the above if is for loading data before make the card  -->
                    <!-- otherwise make th card without data                    -->
                        <v-responsive v-if="childDataLoaded" contain>
                            <CompressionDots v-bind:childdata="childdata"
                                             v-bind:compressionPressureData="compressionPressureData"   />
                        </v-responsive>

                </v-card>
            </v-flex>
        </v-layout>


        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
                <v-card dark height="400px">
                    <v-card-title primary class="title">Subsystems State</v-card-title>
                    <v-responsive contain>
                        <DoughnutChart />
                    </v-responsive>
                </v-card>
            </v-flex>

            <v-flex d-flex xs12 sm6 md6 child-flex>
                <v-card dark>
                    <v-card-title primary class="title">Engine State</v-card-title>
                    <v-responsive contain>
                        <CommitChart  />
                    </v-responsive>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2>
                <v-layout row wrap>
                    <v-flex
                            v-for="n in 2"
                            :key="n"
                            d-flex
                            xs12
                    >
                        <v-card dark>
                            <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>


        <v-layout row wrap>

            <v-flex
                    v-for="n in 6"
                    :key="n"
                    d-flex
                    xs12 sm6 md2
            >
                <v-card
                        color="red lighten-2"
                        dark height="200"
                >
                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
            </v-flex>



        </v-layout>
    </v-container>
</template>

<script>
    import axios           from 'axios'
    import CommitChart     from './CommitChart'
    import DoughnutChart   from './dashboard/charts/DoughnutChart'
    import PerformanceBar  from './dashboard/charts/PerformanceBar'
    import EngineDoughnut  from './dashboard/charts/EngineDoughnut'
    import CompressionDots from './dashboard/charts/CompressionDots'

    export default {
        name: "Dashboard",
        components: {
            CommitChart,
            DoughnutChart,
            PerformanceBar,
            EngineDoughnut,
            CompressionDots,
        },
        data: function () {
            return {
                childDataLoaded: false,
                childdata : [],
                compressionPressureData: {},
                lorem: `Lorem ipsum dolor l at clita quando. Te sit `,
                // messages: []
                // compressionPressureData: {Value: Number, Unit: "dff", reference: 43},
            }
        },
        mounted() {
            axios
                .get('http://localhost:8092/GetEDSWebData/20')
                .then((response) => {
                    this.childdata.push(response.data.Card.Value);
                    this.compressionPressureData = response.data.Card;
                    // eslint-disable-next-line
                    console.log(this.childdata);
                    // eslint-disable-next-line
                    console.log(this.compressionPressureData);
                    this.childDataLoaded = true;
                    console.log(response.data);
                    // this.messages.push(response.data.Card.Value);
                    // this.compressionPressureDataVag = response;
                    // eslint-disable-next-line
                    // console.log(this.compressionPressureData.Value);
                    this.vag = response.data.Card.Value.toFixed(2).toString();
                })
        }
    }
</script>

<style scoped>

</style>