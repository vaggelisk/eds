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
import axios from 'axios';




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
          jokes: [],
          loading: false,
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
      getJokes: function () {
          this.loading = true;
          // axios.get("http://localhost:8092/GetEDSWebData/21")
          let url="http://localhost:8092/GetEDSWebData/21";
          axios.get(url, {
              method: 'GET',
              mode: 'no-cors',
              headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
              }})
              .then((response)  =>  {
                  this.loading = false;
                  this.jokes = response;
                  console.log(response)
              },
                  (error)  =>  {
                  this.loading = false;
              })
      }
  },
  mounted() {
      this.createChart('planet-chart', this.planetChartData);
      this.getJokes();
  }
}
</script>
