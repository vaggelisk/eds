<template>
        <canvas id="doughnut-chart"></canvas>
</template>

<script>
    import Chart       from 'chart.js'

    export default {
        name: "DoughnutChart",
        methods: {
            createChart(chartId) {
                const ctx = document.getElementById(chartId);
                const myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['January', 'February', 'March', ],
                        datasets: [
                            {
                                label: 'Doughnut Kati',
                                backgroundColor: [ 'blue', 'orange', 'grey'],
                                data: [40, 20, 12, ]
                            }
                        ]
                    }
                });
            }
        },

        mounted () {
            this.createChart('doughnut-chart')


        }
    }
</script>

<style scoped>

</style>