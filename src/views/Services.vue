<template>
  <div class="services">
    <div class="services_bgcolor"></div>
    <div class="services_block1"></div>
    <Service
      class="services_item"
      v-for="service in servicesItem"
      :key="service"
      :service="service"
    />
  </div>
</template>

<script>
import Service from "@/components/service.vue";
export default {
  components: {
    Service
  },
  props: ["servicesItem"]
};
</script>

<style lang="scss">
.services {
  &_bgcolor {
    background-color: #cbcbcb;
    position: absolute;
    width: 90%;
    height: 1455px;
    left: 61px;
    z-index: -1;
    top: 222px;
  }

  &_item {
    position: relative;
    top: 140px;
    left: 170px;
  }

  &_item:nth-child(odd) {
    left: -180px;
  }

  &_item:first-child .service_photo img {
    top: -20px;
  }

  &_block1 {
    position: absolute;
    width: 89.8%;
    height: 1520px;
    border: 2px solid;
    top: 76px;
    left: 60px;
    z-index: -1;
  }
}
</style>