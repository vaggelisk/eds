<template>
  <v-app dark>

    <Navigate/>

    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light"> MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Dashboard/>
    </v-content>

    <v-content>
      <canvas id="planet-chart"></canvas>
    </v-content>

    <v-content>
      <CommitChart/>
    </v-content>

    <v-content>
      <HelloWorld/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld  from './components/HelloWorld'
import Dashboard   from './components/Dashboard'
import Navigate    from './components/Navigate'
import planetChartData from './chart-data.js'
import Chart       from 'chart.js'
import CommitChart from './components/CommitChart'
// import axios       from 'axios'


export default {
  name: 'App',

  components: {
    HelloWorld,
    Dashboard,
    Navigate,
    CommitChart
  },
  data() {
      return {
          planetChartData: planetChartData,
      }
  },
  methods: {
      createChart(chartId, chartData) {
          const ctx = document.getElementById(chartId);
          const myChart = new Chart(ctx, {
              type: chartData.type,
              data: chartData.data,
              options: chartData.options,
          });
      },
  },
  mounted() {
      this.createChart('planet-chart', this.planetChartData);
  }
}


// const getBreeds = () => {
//     try {
//         // return axios.get('https://dog.ceo/api/breeds/list/all')
//         return axios.get('http://localhost:8092/GetEDSWebData/20')
//     } catch (error) {
//         console.error(error)
//     }
// };
//
// const countBreeds = async () => {
//     const breeds = getBreeds()
//         .then(response => {
//             if (response.data) {
//                 console.log(
//                     `Got ${Object.entries(response.data).length} breeds`
//                 );
//                 console.log(response.data);
//             }
//             else {
//                 console.log("hfhdjfhjfh")
//             }
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }
//
// countBreeds()

</script>
