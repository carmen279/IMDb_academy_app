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
        <h3>Num of elements per genre</h3>
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
      <div class="description">
        <h2>Time for a little of history</h2>
        <p>
          Wondering what were the best years for multimedia? Just check it on
          the graph
        </p>
        <p>
          Seems like the golden decade is gonna be... <b><i>The 2020s</i></b>
        </p>
      </div>
      <div class="chart">
        <h3>Ratings per year</h3>
        <LineChart />
      </div>
      <div class="suggestions">
        <h2>Some of the best rated from the best decade:</h2>
        <div class="suggestion-container">
          <FilmCard
            v-for="suggestion of getSuggestions"
            :key="suggestion.id"
            :film="suggestion"
            @click="navigateToFilm(`${suggestion.id}`)"
          />
        </div>
      </div>
      <div class="chart">
        <h3>Runtime media by decade</h3>
        <BarRuntimeChart />
      </div>
      <div class="description">
        <h3>How did the duration of the multimedia changed over time?</h3>
        <p>Also calculated!</p>
        <p>
          Seems like the longest films where made during
          <b><i>1967</i></b>
        </p>
      </div>
      <div class="suggestions">
        <h2>Do you have some time? The longest films in history:</h2>
        <div class="suggestion-container">
          <FilmCard
            v-for="suggestion of getLongest"
            :key="suggestion.id"
            :film="suggestion"
            @click="navigateToFilm(`${suggestion.id}`)"
          />
        </div>
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
import BubbleChart from "@/components/charts/BubbleChart";
import BarChart from "@/components/charts/BarChart";
import BarRuntimeChart from "@/components/charts/BarRuntimeChart";
import ItemChart from "@/components/charts/ItemChart";
import RadarChart from "@/components/charts/RadarChart";
import LineChart from "@/components/charts/LineChart";
import FilmCard from "@/components/FilmCard";
export default {
  components: {
    BarChart,
    BarRuntimeChart,
    BubbleChart,
    ItemChart,
    RadarChart,
    LineChart,
    FilmCard,
  },
  computed: {
    getSuggestions() {
      return [
        {
          id: "tt2380307",
          source: {
            tconst: "tt2380307",
            primaryTitle: "Coco",
            startYear: 2017,
            runtimeMinutes: 105,
            genres: ["Adventure", "Animation", "Comedy"],
            averageRating: 8.4,
          },
        },
        {
          id: "tt4154796",
          source: {
            tconst: "tt4154796",
            primaryTitle: "Avengers: Endgame",
            startYear: 2019,
            runtimeMinutes: 181,
            genres: ["Action", "Adventure", "Drama"],
            averageRating: 8.4,
          },
        },

        {
          id: "tt4154756",
          source: {
            tconst: "tt4154756",
            primaryTitle: "Avengers: Infinity War",
            startYear: 2018,
            runtimeMinutes: 149,
            genres: ["Action", "Adventure", "Sci-Fi"],
            averageRating: 8.4,
          },
        },
        {
          id: "tt7286456",
          source: {
            tconst: "tt7286456",
            primaryTitle: "Joker",
            startYear: 2019,
            runtimeMinutes: 122,
            genres: ["Crime", "Drama", "Thriller"],
            averageRating: 8.4,
          },
        },
        {
          id: "tt1345836",
          source: {
            tconst: "tt1345836",
            primaryTitle: "The Dark Knight Rises",
            startYear: 2012,
            runtimeMinutes: 164,
            genres: ["Action", "Crime", "Drama"],
            averageRating: 8.4,
          },
        },
        {
          id: "tt1853728",
          source: {
            tconst: "tt1853728",
            primaryTitle: "Django Unchained",
            startYear: 2012,
            runtimeMinutes: 165,
            genres: ["Drama", "Western"],
            averageRating: 8.4,
          },
        },
        {
          id: "tt6751668",
          source: {
            tconst: "tt6751668",
            primaryTitle: "Parasite",
            startYear: 2019,
            runtimeMinutes: 132,
            genres: ["Comedy", "Drama", "Thriller"],
            averageRating: 8.5,
          },
        },
        {
          id: "tt1675434",
          source: {
            tconst: "tt1675434",
            primaryTitle: "The Intouchables",
            startYear: 2011,
            runtimeMinutes: 112,
            genres: ["Biography", "Comedy", "Drama"],
            averageRating: 8.5,
          },
        },
        {
          id: "tt2582802",
          source: {
            tconst: "tt2582802",
            primaryTitle: "Whiplash",
            startYear: 2014,
            runtimeMinutes: 106,
            genres: ["Drama", "Music"],
            averageRating: 8.5,
          },
        },
        {
          id: "tt0816692",
          source: {
            tconst: "tt2582802",
            primaryTitle: "Interstellar",
            startYear: 2014,
            runtimeMinutes: 169,
            genres: ["Adventure", "Drama", "Sci-Fi"],
            averageRating: 8.6,
          },
        },
      ];
    },
    getLongest() {
      return [
        {
          id: "tt12361974",
          source: {
            tconst: "tt12361974",
            primaryTitle: "Zack Snyder's Justice League",
            startYear: 2021,
            runtimeMinutes: 242,
            genres: ["Action", "Adventure", "Fantasy"],
            averageRating: 8.0,
          },
        },
        {
          id: "tt0116477",
          source: {
            tconst: "tt0116477",
            primaryTitle: "Hamlet",
            startYear: 1996,
            runtimeMinutes: 242,
            genres: ["Drama"],
            averageRating: 7.8,
          },
        },
        {
          id: "tt0059245",
          source: {
            tconst: "tt0059245",
            primaryTitle: "The Greatest Story Ever Told",
            startYear: 1965,
            runtimeMinutes: 260,
            genres: ["Biography", "Drama", "History"],
            averageRating: 6.5,
          },
        },
        {
          id: "tt0107007",
          source: {
            tconst: "tt0107007",
            primaryTitle: "Gettysburg",
            startYear: 1993,
            runtimeMinutes: 271,
            genres: ["Drama", "History", "War"],
            averageRating: 7.6,
          },
        },
        {
          id: "tt0425637",
          source: {
            tconst: "tt0425637",
            primaryTitle: "Red Cliff",
            startYear: 2008,
            runtimeMinutes: 288,
            genres: ["Action", "Adventure", "Drama"],
            averageRating: 7.3,
          },
        },
        {
          id: "tt0074084",
          source: {
            tconst: "tt0074084",
            primaryTitle: "1900",
            startYear: 1976,
            runtimeMinutes: 317,
            genres: ["Drama", "History"],
            averageRating: 7.7,
          },
        },
        {
          id: "tt1954470",
          source: {
            tconst: "tt1954470",
            primaryTitle: "Gangs of Wasseypur",
            startYear: 2012,
            runtimeMinutes: 321,
            genres: ["Action", "Comedy", "Crime"],
            averageRating: 8.2,
          },
        },
        {
          id: "tt0346336",
          source: {
            tconst: "tt0346336",
            primaryTitle: "The Best of Youth",
            startYear: 2003,
            runtimeMinutes: 366,
            genres: ["Drama", "Romance"],
            averageRating: 8.5,
          },
        },
        {
          id: "tt0111341",
          source: {
            tconst: "tt0111341",
            primaryTitle: "Satantango",
            startYear: 1994,
            runtimeMinutes: 439,
            genres: ["Drama"],
            averageRating: 8.3,
          },
        },
        {
          id: "tt5275892",
          source: {
            tconst: "tt2582802",
            primaryTitle: "O.J.: Made in America",
            startYear: 2016,
            runtimeMinutes: 467,
            genres: ["Biography", "Crime", "Documentary"],
            averageRating: 8.9,
          },
        },
      ];
    },
  },
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
  width: 40%;
  min-width: 800px;
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
  width: 50%;
  min-width: 800px;
  margin: 20px;
}
.charts-container {
  display: flex;
  flex-flow: wrap;
}

.suggestion-container {
  display: flex;
  flex-flow: wrap;
}
</style>
