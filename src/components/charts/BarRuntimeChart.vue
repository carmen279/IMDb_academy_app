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
        "1960",
        "1961",
        "1962",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],

      datasets: [
        {
          label: "Mean rating",
          backgroundColor: ["#00d376", "#7fa693", "#2d5246", "#b2d5c0"],
          data: [
            92.55410549211528, 92.02959830866807, 93.11227154046998,
            93.62072829131652, 94.44265593561369, 93.74695407685098,
            92.35663338088445, 95.30361757105943, 94.5901762279715,
            91.97921390778534, 92.5649514213746, 90.29047113000354, 90.1875,
            89.89345991561181, 90.53909612625539, 89.32139166379608,
            90.12262521588947, 91.63751763046544, 90.13340263340264,
            90.35063630274615, 91.68571428571428, 91.23533378287256,
            92.375927174646, 91.21530479896239, 90.83916990920882,
            92.18617363344052, 91.01413881748071, 94.33938066937755,
            92.32152756390515, 92.6571170084439, 92.15403498005523,
            92.63540983606558, 93.20961145194273, 93.93595706618963,
            92.58363939899833, 91.94595469255664, 93.15057915057915,
            92.11595935445308, 91.10895392639814, 91.89606741573034,
            90.99376461418551, 90.9062727052555, 90.97022050466015,
            90.2776613579212, 91.36525154292127, 89.23576290884941,
            89.41448752629996, 88.96267079870404, 88.46802325581395,
            87.48863035430989, 87.48028813394335, 88.7379860601614,
            91.55201427842937, 88.47001204335608, 88.42085731596485,
            89.39484915378955, 89.28493131183714, 90.08919763806877,
            91.11757278148018, 94.29820143884892, 92.76004633342244,
            90.70782489973547, 93.2354211663067,
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
