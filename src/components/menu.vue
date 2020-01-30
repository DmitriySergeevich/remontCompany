<template>
  <div class="menu">
    <MenuButton @showMenu="show" class="button-menu" />
    <ul>
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/work">Наши работы</router-link>
      </li>
      <li>
        <router-link to="/price">Стоимость</router-link>
      </li>
      <li>
        <router-link to="/about">Контакты</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuButton from "./menu-button";
export default {
  methods: {
    show() {
      this.$emit("showMenu");
    }
  },
  components: {
    MenuButton
  }
};
</script>

<style>
.menu {
  width: 130px;
  height: 250px;
  margin: 20px;
  padding: 20px;
  background-color: rgba(0, 204, 255, 0.342);
  border-radius: 10px;
  position: fixed;
}

li {
  padding: 18px 0;
  width: 120px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.button-menu {
  left: -24px;
  top: -24px;
}
</style>