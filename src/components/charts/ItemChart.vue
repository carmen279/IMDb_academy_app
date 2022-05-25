<template>
  <figure class="highcharts-figure">
    <div class="itemchart" id="itemchart"></div>
  </figure>
</template>

<script>
import { defineComponent } from "vue";
import Highcharts from "highcharts";
import ItemSeries from "highcharts/modules/item-series";

ItemSeries(Highcharts);

export default defineComponent({
  data() {
    return {
      selected: true,
    };
  },
  methods: {
    createChart() {
      Highcharts.chart("itemchart", {
        chart: {
          type: "item",
          backgroundColor: "transparent",
          color: "white",
        },

        title: {
          text: "",
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
        series: [
          {
            name: "Important actors representation",
            keys: ["name", "y", "color", "label"],
            data: [
              ["Action", 19, "#00d376", "Action"],
              ["Drama", 18, "#da193c", "Drama"],
              ["Adventure", 15, "#003f24", "Adventure"],
              ["Crime", 8, "#d59100", "Crime"],
              ["Sci-Fi", 8, "#de4964", "Sci-Fi"],
              ["Comedy", 7, "#7fa693", "Comedy"],
              ["Thriller", 5, "#eca2a2", "Thriller"],
              ["Fantasy", 4, "#ac72d2", "Fantasy"],
              ["Mystery", 3, "#2d5246", "Mystery"],
              ["Romance", 3, "#f5cb7b", "Romance"],
              ["Biography", 2, "#774343", "Biography"],
              ["Horror", 2, "#ff9200", "Horror"],
              ["History", 1, "#3d284d", "History"],
              ["Family", 1, "#00854a", "Family"],
              ["Others", 3, "#5d2483", "Others"],
            ],
            dataLabels: {
              enabled: true,
              format: "{point.label}",
              style: {
                color: "white",
                textOutline: "none",
                fontWeight: "normal",
                fontFamily: "Avenir, Helvetica, Arial, sans-serif",
                fontSize: "18px",
              },
            },

            // Circular options
            center: ["50%", "88%"],
            size: "170%",
            startAngle: -100,
            endAngle: 100,
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
