<template>
  <div class="service">
    <div class="service_photo">
      <img :src="service.path" alt />
    </div>
    <div class="service_description">
      <div class="service_description_whiteBlock">
        <h1>{{service.name}}</h1>
        <p>
          от {{service.price}} р/м
          <sup>
            <small>2</small>
          </sup>
        </p>
        <ul>
          <li v-for="desc in service.description" :key="desc">{{desc}}</li>
        </ul>
      </div>
    </div>
    <router-link :to="{name: 'services', params: {id: service.name}}">
      <a>{{service.name}}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["service"]
};
</script>