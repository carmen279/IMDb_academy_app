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
  <router-view :key="$route.fullPath" />
  <footer>
    <div class="footer__div" ref="footer">
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

export default defineComponent({
  methods: {},
});
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  a {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
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
    background: #ffffff;
    display: block;
    height: 2.5px;
    width: 22px;
    position: relative;
    transition: background 0.2s ease-out;
  }

  .navicon:before,
  .navicon:after {
    background: #ffffff;
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

  .switch-button {
    background-color: rgba(95, 133, 134, 0.91);
    border-radius: 30px;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    color: #132425;
    position: relative;
    padding-right: 120px;

    &:before {
      content: "Dani's API";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
    }

    &-checkbox {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(120px);
        transition: transform 300ms linear;
      }

      & + .switch-button-label {
        position: relative;
        padding: 15px 10px;
        display: block;
        user-select: none;
        pointer-events: none;

        &:before {
          content: "";
          background-color: #82b9a1;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 30px;
          transform: translateX(0);
          transition: transform 300ms;
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
  }
}
</style>
