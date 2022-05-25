<template>
  <h1>Data speaks for itself...</h1>
  <div class="insights">
    <div class="charts-container">
      <div class="description">
        <h2>Let's talk about actors</h2>
        <p>A comparison of the 10 best rated actors was made.</p>
        <p>And the winner is...</p>
        <p>IT'S A TIE!</p>
        <p>
          <b><i>Miles Murphy</i></b> and <b><i>Dominic Monaghan</i></b> are the
          best rated actors
        </p>
      </div>
      <div class="chart">
        <h3>Top ten best actors</h3>
        <RadarChart />
      </div>
      <div class="chart">
        <h3>Genres for best actors</h3>
        <ItemChart />
      </div>
      <div class="description">
        <h3>In what genres can you find the best actors?</h3>
        <p>
          Well, here is a distribution of the genres where the 1000 best actors
          appear.
        </p>
        <p>
          Seems like <b><i>Action</i></b
          >, <b><i>Drama</i></b> and <b><i>Adventure</i></b> hoard most of them!
        </p>
      </div>
      <div class="description">
        <h2>But, what are the best and most popular genres?</h2>
        <p>The media of the ratings of every genre was checked and...</p>
        <p><i>* drumroll *</i></p>
        <p>
          <b><i>Documentary</i></b> is the best rated!
        </p>
        <p>Surprised?</p>
      </div>
      <div class="chart">
        <h3>Media of ratings for genres</h3>
        <BarChart />
      </div>
      <div class="chart">
        <h2>Num of elements per genre</h2>
        <BubbleChart />
      </div>
      <div class="description">
        <h3>And what about the amount of elements for each genre?</h3>
        <p>Just check it on the bubbles!</p>
        <p>
          The most usual genre is <b><i>Drama</i></b> followed by
          <b><i>Comedy</i></b>
        </p>
        <p>People wants only to laugh or cry... How weird we humans are</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin-top: 100px;
  font-size: 48px;
  text-shadow: 0 0 15px #1d3536, 0 0 20px #265254, 0 0 25px #1d3536;
}
</style>
<script>
import BubbleChart from "@/components/BubbleChart";
import BarChart from "@/components/BarChart";
import ItemChart from "@/components/ItemChart";
import RadarChart from "@/components/RadarChart";
export default {
  components: { BarChart, BubbleChart, ItemChart, RadarChart },
};
</script>

<style scoped>
h2 {
  font-size: 36px;
}
h3 {
  font-size: 28px;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
p {
  font-size: 28px;
}
.insights {
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  color: white;
  border-radius: 25px;
  margin: 40px 40px;
  padding: 10px 80px;
}
.chart {
  width: 850px;
  margin: 20px;
}
.charts-container {
  display: flex;
  flex-flow: wrap;
}
</style>
