<template>
  <div class="header">
    <div class="header_main">
      <div class="header_main_label">
        <h1>
          <router-link to="/">HOUSE</router-link>
        </h1>
      </div>
      <div class="header_main_menu">
        <router-link v-for="item in menuItem" :key="item" :to="item.path">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["menuItem"]
};
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &_main {
    width: 90%;
    height: 100%;
    display: block;

    &_label {
      width: 100%;
      font-size: 2em;
      height: 80px;
      font-family: "Source Sans Pro", sans-serif;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 33%,
        rgb(61, 82, 104) 66%,
        rgb(76, 91, 114)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      h1 {
        margin: 0;
        padding: 0;
        padding-top: 6px;
        padding-left: 30px;
      }
    }
    &_menu {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.829);
      display: flex;
      justify-content: center;
      height: 110px;

      a {
        margin: 10px;
        text-decoration: none;
        color: white;
        font-size: 30px;
        font-family: Verdana;
        font-stretch: expanded;
        padding: 10px 15px;
      }
    }
  }
}
</style>