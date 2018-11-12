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
                        <v-card color="indigo" dark>
                            <v-card-title primary class="title">Performance Parameters</v-card-title>
                            <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
                <v-card color="green lighten-2" dark>
                    <v-card-title primary class="title">Engine KPI</v-card-title>
                    <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2>
                <v-card color="blue lighten-2" dark>
                    <v-card-title primary class="title">Compression Pressure</v-card-title>
                    <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
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
                        <CommitChart/>
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
    import CommitChart from './CommitChart'
    import DoughnutChart from './dashboard/charts/DoughnutChart'

    export default {
        name: "Dashboard",
        components: {
            CommitChart,
            DoughnutChart,
        },
        data: () => ({
            lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
        })
    }
</script>

<style scoped>

</style>