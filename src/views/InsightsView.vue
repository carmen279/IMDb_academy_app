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
          id: "tt0111161",
          source: {
            tconst: "tt0111161",
            titleType: "movie",
            primaryTitle: "The Shawshank Redemption",
            originalTitle: "The Shawshank Redemption",
            isAdult: false,
            startYear: 1994,
            endYear: 0,
            runtimeMinutes: 142,
            genres: ["Drama"],
            averageRating: 9.3,
            numVotes: 2569780,
            directors: [{ nconst: "nm0001104" }],
            principals: [
              { name: { nconst: "nm0290358" }, characters: "\\N" },
              {
                name: { nconst: "nm0000209" },
                characters: '["Andy Dufresne"]',
              },
              {
                name: { nconst: "nm0000151" },
                characters: "[\"Ellis Boyd 'Red' Redding\"]",
              },
              {
                name: { nconst: "nm0348409" },
                characters: '["Warden Norton"]',
              },
              { name: { nconst: "nm0006669" }, characters: '["Heywood"]' },
              { name: { nconst: "nm0001104" }, characters: "\\N" },
              { name: { nconst: "nm0000175" }, characters: "\\N" },
              { name: { nconst: "nm0555550" }, characters: "\\N" },
              { name: { nconst: "nm0002353" }, characters: "\\N" },
              { name: { nconst: "nm0005683" }, characters: "\\N" },
            ],
          },
          score: 271.61798,
        },
        {
          id: "tt0468569",
          source: {
            tconst: "tt0468569",
            titleType: "movie",
            primaryTitle: "The Dark Knight",
            originalTitle: "The Dark Knight",
            isAdult: false,
            startYear: 2008,
            endYear: 0,
            runtimeMinutes: 152,
            genres: ["Action", "Crime", "Drama"],
            averageRating: 9.1,
            numVotes: 2535286,
            directors: [{ nconst: "nm0634240" }],
            principals: [
              { name: { nconst: "nm0746273" }, characters: "\\N" },
              { name: { nconst: "nm0000288" }, characters: '["Bruce Wayne"]' },
              { name: { nconst: "nm0005132" }, characters: '["Joker"]' },
              { name: { nconst: "nm0001173" }, characters: '["Harvey Dent"]' },
              { name: { nconst: "nm0000323" }, characters: '["Alfred"]' },
              { name: { nconst: "nm0634240" }, characters: "\\N" },
              { name: { nconst: "nm0634300" }, characters: "\\N" },
              { name: { nconst: "nm0275286" }, characters: "\\N" },
              { name: { nconst: "nm0004170" }, characters: "\\N" },
              { name: { nconst: "nm0650038" }, characters: "\\N" },
            ],
          },
          score: 266.01926,
        },
        {
          id: "tt1375666",
          source: {
            tconst: "tt1375666",
            titleType: "movie",
            primaryTitle: "Inception",
            originalTitle: "Inception",
            isAdult: false,
            startYear: 2010,
            endYear: 0,
            runtimeMinutes: 148,
            genres: ["Action", "Adventure", "Sci-Fi"],
            averageRating: 8.8,
            numVotes: 2255432,
            directors: [{ nconst: "nm0634240" }],
            principals: [
              { name: { nconst: "nm0245596" }, characters: "\\N" },
              { name: { nconst: "nm0000138" }, characters: '["Cobb"]' },
              { name: { nconst: "nm0330687" }, characters: '["Arthur"]' },
              { name: { nconst: "nm0680983" }, characters: '["Ariadne"]' },
              { name: { nconst: "nm0913822" }, characters: '["Saito"]' },
              { name: { nconst: "nm0634240" }, characters: "\\N" },
              { name: { nconst: "nm0858799" }, characters: "\\N" },
              { name: { nconst: "nm0001877" }, characters: "\\N" },
              { name: { nconst: "nm0002892" }, characters: "\\N" },
              { name: { nconst: "nm0809059" }, characters: "\\N" },
            ],
          },
          score: 234.0817,
        },
        {
          id: "tt0137523",
          source: {
            tconst: "tt0137523",
            titleType: "movie",
            primaryTitle: "Fight Club",
            originalTitle: "Fight Club",
            isAdult: false,
            startYear: 1999,
            endYear: 0,
            runtimeMinutes: 139,
            genres: ["Drama"],
            averageRating: 8.8,
            numVotes: 2022165,
            directors: [{ nconst: "nm0000399" }],
            principals: [
              { name: { nconst: "nm0513165" }, characters: "\\N" },
              { name: { nconst: "nm0000093" }, characters: '["Tyler Durden"]' },
              { name: { nconst: "nm0001570" }, characters: '["Narrator"]' },
              {
                name: { nconst: "nm0001533" },
                characters: '["Robert Paulsen"]',
              },
              {
                name: { nconst: "nm0340260" },
                characters: '["Richard Chesler (Regional Manager)"]',
              },
              { name: { nconst: "nm0000399" }, characters: "\\N" },
              { name: { nconst: "nm0657333" }, characters: "\\N" },
              { name: { nconst: "nm0880243" }, characters: "\\N" },
              { name: { nconst: "nm0068501" }, characters: "\\N" },
              { name: { nconst: "nm0149556" }, characters: "\\N" },
            ],
          },
          score: 209.97533,
        },
        {
          id: "tt0944947",
          source: {
            tconst: "tt0944947",
            titleType: "tvSeries",
            primaryTitle: "Game of Thrones",
            originalTitle: "Game of Thrones",
            isAdult: false,
            startYear: 2011,
            endYear: 2019,
            runtimeMinutes: 57,
            genres: ["Action", "Adventure", "Drama"],
            averageRating: 9.3,
            numVotes: 1971008,
            directors: [
              { nconst: "nm0851930" },
              { nconst: "nm0551076" },
              { nconst: "nm0887700" },
              { nconst: "nm0533713" },
              { nconst: "nm0755261" },
              { nconst: "nm0617042" },
              { nconst: "nm0687964" },
              { nconst: "nm0007008" },
              { nconst: "nm0336241" },
              { nconst: "nm0002399" },
              { nconst: "nm0070474" },
              { nconst: "nm0638354" },
              { nconst: "nm0806252" },
              { nconst: "nm1047532" },
              { nconst: "nm1888967" },
              { nconst: "nm0764601" },
              { nconst: "nm1125275" },
              { nconst: "nm0590889" },
              { nconst: "nm0787687" },
            ],
            principals: [
              {
                name: { nconst: "nm0322513" },
                characters: '["Jorah Mormont"]',
              },
              {
                name: { nconst: "nm3592338" },
                characters: '["Daenerys Targaryen"]',
              },
              {
                name: { nconst: "nm0227759" },
                characters: '["Tyrion Lannister"]',
              },
              { name: { nconst: "nm3229685" }, characters: '["Jon Snow"]' },
              {
                name: { nconst: "nm0372176" },
                characters: '["Cersei Lannister"]',
              },
              { name: { nconst: "nm1125275" }, characters: "\\N" },
              { name: { nconst: "nm1888967" }, characters: "\\N" },
              { name: { nconst: "nm3849842" }, characters: '["Sansa Stark"]' },
              { name: { nconst: "nm3586035" }, characters: '["Arya Stark"]' },
              {
                name: { nconst: "nm0182666" },
                characters: '["Jaime Lannister"]',
              },
            ],
          },
          score: 208.56259,
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

.suggestion-container {
  display: flex;
  flex-flow: wrap;
}
</style>
