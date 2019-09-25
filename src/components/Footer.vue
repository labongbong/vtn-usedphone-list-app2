<template>
  <div class="footer">
    <div class="footer__info">Copyrightⓒ 2019 — All rights reserved by SK telink</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  position: fixed;
  width: 100vw;
  height: 50px;
  bottom: 0px;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  z-index: 100;
}

.footer__info {
  position: relative;
  width: 100%;
  height: 20px;
  color: white;
  text-align: center;
  top: 20px;
  font-size: 14px;
}
</style>