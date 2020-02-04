<template>
  <div id="app">
    <Head :menuItem="menuItem" />
    <div class="content">
      <div class="main">
        <router-view :primers="primers" :servicesItem="services" />
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>

import Head from "./components/header.vue";
import Foot from "./components/footer.vue";
import { menuItem, primers, services } from "./assets/menuItem.js";

export default {
  name: "app",
  components: {
    Head,
    Foot
  },
  data() {
    return {
      show: false,
      menuItem: menuItem,
      primers: primers,
      services: services
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
