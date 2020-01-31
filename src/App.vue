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
        <router-view :primers="primers" :servicesItem="services" />
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
        { name: "Контакты", path: "/contact" }
      ],
      primers: [
        {
          name: "Разработка дизайн проекта",
          price: "2000",
          path: "./src/dizain.png",
          description: ""
        },
        {
          name: "Отделка и ремонт квартир, офисов и загородных домов",
          price: "4000",
          path: "./src/remont.png",
          description: ""
        }
      ],
      services: [
        {
          name: "Эконом-вариант",
          price: "4000",
          description: [
            "обновление стен и потолков",
            "частичный ремонт пола",
            "сантехника, электрооборудование",
            "финишная отделка помещений"
          ],
          path:"./src/economrem.png"
        },
        {
          name: "Евро ремонт",
          price: "5000",
          description: [
            "отделка и ремонт из экологичных материалов",
            "реконструкция помещений",
            "сантехника, электрооборудование",
            "декоративная отделка"
          ],
          path:"./src/evroremont.png"
        },
        {
          name: "Дизайн решение",
          price: "6000",
          description: [
            "изготовление эскизов",
            "бесплатный выезд, замеры",
            "составление сметы",
            "фотоотчет по этапам работы"
          ],
          path:"./src/designremont.png"
        }
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
* {
  margin: 0;
  padding: 0;
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
</style>
