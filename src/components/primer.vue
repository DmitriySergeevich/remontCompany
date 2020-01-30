<template>
  <div class="primer">
    <div class="primer_photo">
      <img :src="primer.path" alt="error" />
    </div>
    <div class="primer_description">
      <h2>{{primer.name}}</h2>
      <p>{{primer.price}}</p>
      <div class="primer_description_goToDesc">Подробнее</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["primer"]
};
</script>

<style lang="scss">
.primer {
display: flex;
    width: 80%;
    height: 250px;
    margin: 15px;
  &_photo {
    background-color: rgba(139, 135, 135, 0.753);
    display: flex;
    align-items: center;
    padding-left: 30px;
    width: 100%;
    img {
      width: 70%;
      height: 80%;
    }
  }
  &_description {
    width: 350px;
    height: 90%;
    background-color: white;
    position: relative;
    top: 23px;
    left: -40px;

    &_goToDesc{
        width: 350px;
    }
  }
}
</style>