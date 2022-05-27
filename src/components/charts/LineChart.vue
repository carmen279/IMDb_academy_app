<script>
import { defineComponent, h } from "vue";

import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default defineComponent({
  name: "LineChart",
  components: {
    Line,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
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
          label: "Medium rating",
          backgroundColor: "#00d376",
          pointBorderColor: "white",
          pointRadius: 7,
          borderColor: "#00d376",
          data: [
            6.174474053295932, 6.168230563002681, 6.167828947368421,
            6.183098591549296, 6.132238065716057, 6.117608173076923,
            6.127882352941176, 6.099372146118721, 6.094387755102041,
            6.005057015369361, 5.940486208508649, 5.840332733812949,
            5.899234234234234, 5.899555950266429, 5.942726440988106,
            5.903277931671283, 5.95162620247366, 6.006681922196797,
            6.054545454545455, 6.049612403100776, 6.014667270258035,
            6.069290996085254, 5.987606837606838, 5.973239436619719,
            6.02720196640721, 6.074790251697963, 5.967882352941176,
            5.9448064392487545, 5.934396355353075, 5.964769749157619,
            5.950428015564203, 6.0006743355811185, 5.9890656874745005,
            5.953995859213251, 5.960970636215334, 5.905667060212514,
            6.048309912647171, 6.047171145685998, 5.984039986211651,
            5.98860103626943, 5.996616425715165, 6.077011165187518,
            6.153291104378958, 6.11734395750332, 6.189408099688474,
            6.197695951765719, 6.154186228482003, 6.199083426861205,
            6.181983012087553, 6.1818618881118885, 6.185673959068454,
            6.222765489587375, 6.233320987654321, 6.2225619149188285,
            6.245467673850255, 6.223709327548807, 6.220580886945659,
            6.224661489446436, 6.144084084084084, 6.149752049387714,
            6.172515385622627, 6.329691146190804, 6.635633423180593,
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
      h(Line, {
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
