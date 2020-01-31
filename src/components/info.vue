<template>
  <div class="info">
    <div class="info_content">
      <h3>Ремонт и отделка квартир,</h3>
      <h3>частных домов и офисов</h3>
      <h3>в Рязани и Рязанской области</h3>
      <h4>тел. 46-46-46</h4>
      <h4>тел. 46-46-45</h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info {
  width: 300px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.514);
  display: flex;
  justify-content: center;

  &_content {
    * {
      margin: 15px 0px 15px 10px;
    }
    h3,
    h4 {
      background: linear-gradient(
        180deg,
        rgb(235, 232, 232) 33%,
        rgb(171, 174, 177) 66%,
        rgb(112, 113, 114)
      );
       background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h4{
        margin-left: 20px; 
        font-size: 17px;
    }
    h3{
        font-size: 18px;
    }
  }
}
</style>