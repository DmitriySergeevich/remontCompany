<template>
  <div class="home">
    <div class="home_logo"></div>
    <div class="home_blok1"></div>
    <Info class="home_info" />
    <div class="home_label">
      <div class="home_label_text">Our service</div>
    </div>
    <div class="home_bggray"></div>
    <div class="home_block2"></div>
    <div class="home_block3"></div>
    <div class="home_block4"></div>

    <Primer v-for="primer in primers" :key="primer" :primer="primer" class="home_primer" />
  </div>
</template>

<script>
import Primer from "@/components/primer.vue";
import Info from "@/components/info.vue";
export default {
  components: {
    Primer,
    Info
  },
  props: ["primers"]
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;

  &_logo {
    background-image: url(/src/home-bg.png);
    background-size: 100% 120%;
    width: 100%;
    height: 100%;
  }

  &_blok1 {
    position: absolute;
    width: 90%;
    height: 1520px;
    border: 2px solid;
    top: 140px;
    left: 65px;
  }
  &_block2 {
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px solid;
    left: 100px;
    top: 800px;
  }
  &_block3 {
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px solid;
    left: 700px;
    top: 1100px;
  }
  &_block4 {
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px solid;
    left: 100px;
    top: 1400px;
  }
  &_info {
    position: absolute;
    left: 70px;
    top: 200px;
  }
  &_label {
    background-color: #cbcbcb;
    width: 89%;
    position: relative;
    left: 63px;
    font-size: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 130px;

    &_text {
      text-transform: uppercase;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 33%,
        rgb(61, 82, 104) 66%,
        rgb(76, 91, 114)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &_bggray {
    background-color: #cbcbcb;
    position: relative;
    width: 91%;
    height: 890px;
    left: 70px;
    z-index: -1;
    top: 35px;
  }

  &_primer {
    position: relative;
    top: -905px;
    margin: 60px 0;
    width: 1000px;
    height: 320px;
  }
}
</style>