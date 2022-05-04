<template>
  <header>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <div></div>
    <nav class="header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/insights">Insights</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <router-view />
  <footer>
    <div class="footer__div">
      <p>
        Author: Carmen Rendueles Martínez (
        <a href="https://github.com/carmen279">Github</a>
        )
      </p>
      <p>May 2022</p>
    </div>
    <div class="footer__div">
      <p>Winter 2022 Academy Batch</p>
      <p>Empathy.co</p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
footer {
  background-color: #82b9a1;
  padding: 20px 50px;
  font-size: 24px;
  a {
    color: #174130;
  }
}
.footer__div {
  display: flex;
  justify-content: space-between;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #081010;
  height: 60px;
  padding-right: 30px;

  a {
    font-size: 24px;
    font-weight: bold;
    color: #82b9a1;
    padding: 30px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a:hover {
    transform: scale(1.1);
    background-color: #42b983;
    color: #ffffff;
    transition: all 1s;
  }

  nav {
    max-height: 0;
    transition: max-height 0.2s ease-out;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 20px;
    user-select: none;
  }

  .navicon {
    background: #82b9a1;
    display: block;
    height: 2.5px;
    width: 22px;
    position: relative;
    transition: background 0.2s ease-out;
  }

  .navicon:before,
  .navicon:after {
    background: #82b9a1;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
  }

  .menu-icon .navicon:before {
    top: 6px;
  }

  .menu-icon .navicon:after {
    top: -6px;
  }

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .header__nav {
    max-height: 240px;
    overflow: auto;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media (min-width: 48em) {
    .header__nav {
      clear: none;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }
}
</style>
