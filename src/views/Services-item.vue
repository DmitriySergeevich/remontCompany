<template>
  <div class="serv">
    <h1>FDGDGDFG</h1>

    <h2>{{service.name}}</h2>
    <img :src="'./.' + service.path" alt="???" />
  </div>
</template>

<script>
export default {
  props: ["servicesItem"],
  data() {
    return {
      service: Object
    };
  },

  mounted() {
    this.service = this.servicesItem.find(i => i.name == this.$attrs.id);
  }
};
</script>