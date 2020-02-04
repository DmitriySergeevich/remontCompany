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
