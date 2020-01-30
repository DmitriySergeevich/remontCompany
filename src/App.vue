<template>
  <div id="app">
    <Head :menuItem="menuItem" />
    <div class="content">
      <!-- <transition name="slide-fade">
        <Menu v-if="show" @showMenu="showMenu" />
        <MenuButton @showMenu="showMenu" />
         <div class="button" v-else @click="showMenu">&gt;&gt;</div>
      </transition>-->
      <div class="main">
        <router-view 
        :primers="primers"/>
      </div>
    </div>

    <Foot />
  </div>
</template>

<script>
import Head from "./components/header.vue";
import Foot from "./components/footer.vue";
// import Menu from "./components/menu.vue";
// import MenuButton from "./components/menu-button.vue";

export default {
  name: "app",
  components: {
    Head,
    Foot
    // Menu,
    // MenuButton
  },
  data() {
    return {
      show: false,
      menuItem: [
        { name: "Наши услуги", path: "/services" },
        { name: "Портфолио", path: "/work" },
        { name: "Цены", path: "/price" },
        { name: "О компании", path: "/about" },
        { name: "Контакты", path: "/contacts" }
      ],
      primers: [
        { name: "Разработка дизайн проекта", price: "от 2000 р/м", path: "./src/dizain.png", description: "" },
        { name: "Отделка и ремонт квартир, офисов и загородных домов", price: "от 4000 р/м", path: "./src/remont.png", description: "" }
      ]
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

.content {
  display: flex;
  height: 500px;
}
.main {
  display: flex;
  justify-content: center;
  width: 100%;
}

.button {
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  position: fixed;
}
</style>
