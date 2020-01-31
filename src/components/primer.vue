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

<style lang="scss">
.primer {
  display: flex;
  width: 778px;
  height: 250px;

  &_photo {
    background-color: rgba(139, 135, 135, 0.753);
    display: flex;
    align-items: center;
    padding-left: 30px;
    width: 50%;

    img {
      width: 80%;
      height: 80%;
    }
  }
  &_description {
    width: 300px;
    height: 80%;
    background-color: white;
    position: relative;
    top: 23px;
    left: -40px;
    padding: 10px;

    h3 {
      text-align: center;
      margin-top: 10px;
      font-size: 20px;
    }

    p{
      margin-top: 10px;
      text-align: right;
      transform: rotateZ(3deg);
      font-weight: 900;
    }

    &_goToDesc {
      width: 140px;
      padding-top: 10px;
      height: 25px;
      background-color: #b6adad;
      text-align: center;
      position: absolute;
      left: 165px;
      top: 210px;
      span {
        background: linear-gradient(
          180deg,
          rgb(0, 0, 0) 33%,
          rgb(61, 82, 104) 66%,
          rgb(76, 91, 114)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      font-size: 19px;
      background: linear-gradient(
        180deg,
        rgb(223, 223, 167) 33%,
        rgb(205, 221, 125) 66%,
        rgb(173, 173, 78)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>