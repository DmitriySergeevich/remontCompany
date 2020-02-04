<template>
  <div class="primer">
    <div class="primer_photo">
      <img :src="primer.path" alt="error" />
    </div>
    <div class="primer_description">
      <h3>{{primer.name}}</h3>
      <p>
        от {{primer.price}} р/м
        <sup>
          <small>2</small>
        </sup>
      </p>
      <div class="primer_description_goToDesc">
        <span>Подробнее</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["primer"]
};
</script>