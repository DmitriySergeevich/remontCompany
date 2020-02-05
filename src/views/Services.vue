<template>
  <div class="services">
    <div class="services_bgcolor"></div>
    <div class="services_block1">
    <Service
      class="services_item"
      v-for="service in servicesItem"
      :key="service"
      :service="service"
    /></div>
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