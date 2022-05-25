<template>
  <figure class="highcharts-figure">
    <div class="bubble" id="bubble"></div>
  </figure>
</template>

<script>
import { defineComponent } from "vue";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);

export default defineComponent({
  data() {
    return {
      selected: true,
    };
  },
  methods: {
    createChart() {
      Highcharts.chart("bubble", {
        chart: {
          type: "packedbubble",
          height: "90%",
          backgroundColor: "transparent",
          color: "white",
        },
        title: {
          text: "",
          style: {
            color: "white",
            fontFamily: "Avenir, Helvetica, Arial, sans-serif",
            fontSize: "24px",
          },
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          headerFormat:
            '<span style="font-size: 16px; font-weight: bolder ;">{point.key}</span><br/>',
          style: {
            fontSize: 16,
          },
        },
        plotOptions: {
          packedbubble: {
            minSize: "45%",
            maxSize: "150%",
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02,
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}",
              style: {
                color: "white",
                textOutline: "none",
                fontWeight: "normal",
                fontFamily: "Avenir, Helvetica, Arial, sans-serif",
                fontSize: "20px",
              },
            },
          },
        },
        series: [
          {
            name: "Genres", // Coffee series
            color: "#00d376",
            data: [
              {
                // name property is used for the datalabel
                // value property is used for the volume of the bubble
                value: 312177,
                name: "Documentary",
              },
              {
                value: 351225,
                name: "Short",
              },
              {
                value: 217634,
                name: "Animation",
              },
              {
                value: 832575,
                name: "Comedy",
              },
              {
                value: 349092,
                name: "Romance",
              },
              {
                value: 46874,
                name: "Sport",
              },
              {
                value: 9868,
                name: "News",
              },
              {
                value: 1338571,
                name: "Drama",
              },
              {
                value: 144364,
                name: "Fantasy",
              },
              {
                value: 224381,
                name: "Horror",
              },
              {
                value: 100616,
                name: "Biography",
              },
              {
                value: 84670,
                name: "Music",
              },
              {
                value: 71150,
                name: "War",
              },
              {
                value: 332246,
                name: "Crime",
              },
              {
                value: 59133,
                name: "Western",
              },
              {
                value: 179679,
                name: "Family",
              },
              {
                value: 318574,
                name: "Adventure",
              },
              {
                value: 408556,
                name: "Action",
              },
              {
                value: 96947,
                name: "History",
              },
              {
                value: 159786,
                name: "Mystery",
              },
              {
                value: 116407,
                name: "Sci-Fi",
              },
              {
                value: 52137,
                name: "Musical",
              },
              {
                value: 271966,
                name: "Thriller",
              },
              {
                value: 14871,
                name: "Film-Noir",
              },
              {
                value: 10967,
                name: "Game-Show",
              },
              {
                value: 12104,
                name: "Talk-Show",
              },
              {
                value: 32006,
                name: "Reality-TV",
              },
              {
                value: 297,
                name: "Adult",
              },
            ],
          },
        ],
      });
    },
  },
  mounted() {
    this.createChart();
  },
});
</script>

<style scoped>
body {
  background-color: #e0e0e0;
  font: 14px Arial;
  padding: 15px;
}
select,
input {
  font: 14px Arial;
}
h3 {
  font-size: 16px;
  margin: 15px 0 4px 0;
  padding: 0;
}

.bubble {
  color: white;
}
.highcharts-figure {
  min-width: 320px;
  max-width: 1000px;
  margin: 1em auto;
  color: white;
}
</style>
