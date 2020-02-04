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