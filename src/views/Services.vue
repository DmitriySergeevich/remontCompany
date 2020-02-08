<template>
  <div class="services">
    <div class="services_block1">
      <div class="services_block1_bgcolor">
        <Service
          class="services_block1_bgcolor_item"
          v-for="service in servicesItem"
          :key="service"
          :service="service"
        />
      </div>
    </div>
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