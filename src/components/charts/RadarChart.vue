<script>
import { defineComponent, h } from "vue";
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
);

export default defineComponent({
  name: "RadarChart",
  components: {
    Radar,
  },
  props: {
    chartId: {
      type: String,
      default: "radar-chart",
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
    cssClasses: {
      default: "",
      type: String,
    },
  },
  setup(props) {
    const chartData = {
      labels: [
        "Miles Murphy",
        "Dominic Monaghan",
        "Hugo Weaving",
        "Orlando Bloom",
        "Elijah Wood",
        "John Rhys-Davies",
        "Miranda Nolan",
        "Alan Lee",
        "Leonardo DiCaprio",
        "Rick Miller",
      ],
      datasets: [
        {
          label: "Mean rating",
          backgroundColor: "#da193c",
          borderColor: "#da193c",
          pointBackgroundColor: "#da193c",
          pointRadius: 7,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#00d376",
          data: [
            5.923378903203155, 5.923378903203155, 5.314063047373594,
            5.278580580554232, 5.229783229895652, 5.208921969420433,
            4.999213840068944, 4.927481526957733, 4.916488445856731,
            4.856030240086647,
          ],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          titleColor: "black",
          titleFont: {
            size: 16,
          },
          bodyFont: {
            size: 16,
          },
          labelTextColor: "black",
          backgroundColor: "white",
          callbacks: {
            labelTextColor: function (context) {
              return "black";
            },
          },
        },
      },
      scales: {
        r: {
          suggestedMin: 4,
          suggestedMax: 7,
          grid: {
            color: "gray",
          },
          angleLines: {
            color: "white",
          },
          pointLabels: {
            color: "white",
            font: {
              size: 18,
            },
          },
          ticks: {
            color: "white",
            backdropColor: "black",
            font: {
              size: 14,
            },
          },
        },
      },
    };

    return () =>
      h(Radar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      });
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

.barchart {
  height: 800px;
  background-color: #081010;
  backdrop-filter: blur(4px);
  color: white;
}
.figure {
  min-width: 320px;
  max-width: 1000px;
  margin: 1em auto;
  color: white;
}
</style>
