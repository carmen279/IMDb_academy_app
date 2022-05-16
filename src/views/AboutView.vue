<template>
  <div class="about">
    <h1>About this web</h1>
    <section>
      <h2>Introduction</h2>
      <p>First of all: Welcome!</p>
      <p>
        This is a IMDb webpage created as a project during the Academy program
        at Empathy.co.
      </p>
      <p>
        This frontend was created by Carmen (<a
          href="https://github.com/carmen279"
          >Github</a
        >).
      </p>
      <p>
        It uses Marcos' (<a href="https://github.com/carmen279">Github</a>) and
        Daniel's (<a href="https://github.com/carmen279">Github</a>) search
        APIs.
      </p>
      <p>
        It shows as well some Insights that are courtesy of our Data fellows:
        Enrique (<a href="https://github.com/carmen279">Github</a>), Rodrigo (<a
          href="https://github.com/carmen279"
          >Github</a
        >) and Pablo (<a href="https://github.com/carmen279">Github</a>)
      </p>
    </section>
    <section>
      <h2>About the Home page</h2>
      <p>
        This is the main page of the web. In here you can find all the films,
        series, videoGames and so on that you can think of!
      </p>
      <p>
        If you have one in mind you can search for it but if you are looking
        only for ideas you can scroll almost indefinitely and filter by genres
        and types to facilitate finding what you are looking for.
      </p>
      <p>
        By clicking on an option that you may find interesting you will be able
        to see more detail about it and some more recommendations similar to it
        will be given to you, in that way, your investigation process can be
        improved!
      </p>
    </section>
    <section>
      <h2>About the Insights page</h2>
      <p>
        This little part of the web is here to show you some statistic
        curiosities analized from the contents of the IMDb database used for the
        application. Curious about which genres have best reviews? Find it out
        here!
      </p>
    </section>
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin-top: 100px;
  font-size: 48px;
  text-shadow: 0 0 15px #1d3536, 0 0 20px #265254, 0 0 25px #1d3536;
}
h2 {
  font-size: 36px;
  color: #42b983;
  background-color: white;
  border-radius: 30px 0px 30px 0px;
  padding: 10px;
  margin: 0px 0px 10px 0px;
}
section {
  border: solid 1px white;
  margin: 0px 80px 30px 80px;
  border-radius: 30px 0px 30px 0px;
  backdrop-filter: blur(6px);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.2) 10%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 0.9) 80%,
    rgba(0, 0, 0, 1) 100%
  );
}

p {
  font-size: 26px;
}
a {
  font-size: 24px;
  color: #82b9a1;
  padding: 5px;
  text-decoration: none;
}
</style>
