<template>
  <div class="contacts">
    <div class="contacts_block1"></div>
    <div class="contacts_block2"></div>
    <iframe
      class="contacts_map"
      src="https://yandex.ru/map-widget/v1/-/CKQY5L-0"
      frameborder="1"
      allowfullscreen="true"
    ></iframe>
    <Info
    class = "contacts_info"/>
  </div>
</template>

<script>
import Info from "@/components/info.vue";
export default {
  components: {
    Info
  }
};
</script>