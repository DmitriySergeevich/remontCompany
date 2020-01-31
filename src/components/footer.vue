<template>
  <div class="footer">
    <div class="footer_container">
      <div class="footer_info">
        <div class="footer_info_adr">Наш адрес г.Рязань ул.Пушкина д.11</div>
        <div class="footer_info_e-mail">e-mail house@mail.com</div>
      </div>
      <div class="footer_conect">
        <a href>
          <img src="/src/inst.png" alt="inst" />
        </a>
        <a href="#">
          <img src="/src/vk.png" alt="vk" />
        </a>
        <a href="#">
          <img src="/src/facebook.png" alt="facebook" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 1715px;
  left: 0;
  display: flex;
  justify-content: center;

  &_container {
    width: 88%;
    display: flex;
    justify-content: center;
  }
  &_info {
    width: 75%;
    padding-top: 5px;
    &_e-mail {
      width: 50%;
      padding-left: 17px;
    }
  }
  &_conect {
    display: flex;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      margin: 0 15px;
    }
  }
}
</style>