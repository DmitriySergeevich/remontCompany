<template>
  <div class="serv">
    <h1>FDGDGDFG</h1>

    <h2>{{s}}</h2>
  </div>
</template>

<script>
export default {
  props:["service"],

data(){
  return{
    s: this.$router.params
  }}
};
</script>