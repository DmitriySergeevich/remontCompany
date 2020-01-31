<template>
  <div class="service">
    <div class="service_photo">
      <img :src="service.path" alt />
    </div>
    <div class="service_description">
      <div class="service_description_whiteBlock"></div>
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
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style lang="scss">
.service {
  width: 900px;
  height: 350px;
  border: 2px solid;
  margin: 10px;
  margin-bottom: 80px;
  display: flex;
  &_photo {
    img {
      height: 350px;
      width: 420px;
      position: relative;
      left: 40px;
      top: 20px;
    }
  }
  &_description {
    width: 400px;
    position: relative;
    left: 50px;
    top: 10px;
    padding-top: 30px;

    &_whiteBlock {
      width: 400px;
      height: 290px;
      background-color: white;
      position: absolute;
      z-index: -1;
      top: 20px;
      left: -10px;
    }

    p {
      text-align: right;
      transform: rotateZ(3deg);
      font-weight: 900;
      width: 380px;
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

    h1 {
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 33%,
        rgb(61, 82, 104) 66%,
        rgb(76, 91, 114)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ul {
      padding: 25px;

      li {
        padding: 5px 0;
        font-weight: 600;
      }
    }
  }
}
</style>