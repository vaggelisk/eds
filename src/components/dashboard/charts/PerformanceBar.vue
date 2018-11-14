<template>
    <canvas id="performance-dashboard-chart"></canvas>
</template>

<script>
    export default {
        name: "PerformanceBar",
        methods: {
            createChart2(chartId) {
                const ctx = document.getElementById(chartId);
                const myChart2 = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June',
                            'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                            {
                                label: 'GitHub Commits',
                                backgroundColor: 'grey',
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                            }
                        ]
                    }
                });
            }
        },
        mounted () {
            this.createChart2('performance-dashboard-chart')
        }

    }
</script>

<style scoped>

</style>