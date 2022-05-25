<script>
import { defineComponent, h } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "BarChart",
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    width: {
      type: Number,
      default: 400,
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
        "Documentary",
        "Biography",
        "History",
        "Music",
        "Film-Noir",
        "Short",
        "Animation",
        "Sport",
        "War",
        "Drama",
        "Family",
        "Musical",
        "Romance",
        "Crime",
        "News",
        "Fantasy",
        "Talk-Show",
        "Mystery",
        "Adventure",
        "Comedy",
        "Reality-TV",
        "Game-Show",
        "Western",
        "Action",
        "Sci-Fi",
        "Thriller",
        "Adult",
        "Horror",
      ],

      datasets: [
        {
          label: "Mean rating",
          backgroundColor: ["#00d376", "#7fa693", "#2d5246", "#b2d5c0"],
          data: [
            7.09, 6.93, 6.92, 6.84, 6.8, 6.73, 6.67, 6.64, 6.61, 6.5, 6.43,
            6.38, 6.35, 6.35, 6.33, 6.33, 6.33, 6.31, 6.29, 6.28, 6.27, 6.19,
            6.11, 6.08, 5.89, 5.83, 5.62, 5.45,
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
        y: {
          ticks: {
            color: "white",
            font: {
              size: 18,
            },
          },
        },
        x: {
          ticks: {
            color: "white",
            font: {
              size: 16,
            },
          },
        },
      },
    };

    return () =>
      h(Bar, {
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
