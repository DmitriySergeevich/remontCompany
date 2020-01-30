<template>
  <div class="main" @click="showMenu"></div>
</template>

<script>
export default {
  methods: {
    showMenu() {
      this.$emit("showMenu");
    }
  }
};
</script>

<style scoped>
.main {
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
  /* left: -24px;
  top: -24px; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
}
</style>