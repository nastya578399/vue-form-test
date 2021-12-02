<template>
  <div class="card center">
    <div class="button_container" @click="$emit('close')">
      <span class="button_container__item button_container--top"></span>
      <span class="button_container__item button_container--bottom"></span>
    </div>
    <h1>Успешная отправка заявки</h1>
    <img src="../img/success_img.png" alt="">
  </div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style scoped>
.button_container {
  display: flex;
  position: relative;
  top: 30px;
  left: 320px;
  height: 27px;
  width: 35px;
  cursor: pointer;
}

.button_container .button_container--top {
  transform: translateY(-11px) translateX(0) rotate(45deg);
  border-radius: 5px;
  color: #444d55;;
}

.button_container .button_container--bottom {
  transform: translateY(-11px) translateX(0) rotate(-45deg);
  border-radius: 5px;
  color: #444d55;;
}

.button_container .button_container__item {
  background: #444d55;;
  border: none;
  height: 5px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
}

.button_container .button_container__item .button_container {
  background: #444d55;;
  border: none;
  height: 5px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
}

.button_container .button_container__item:nth-of-type(3) {
  top: 22px;
}

</style>
