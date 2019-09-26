<template>
  <div>
    <nav class="nav">
      <div class="nav__icon">SK telink</div>
      <div class="nav__list">
        <ul>
          <li>
            <i class="fas fa-list"></i>
            <span>List</span>
          </li>
          <li>
            <i class="fas fa-shoe-prints"></i>
            <span>On-site Inspection</span>
          </li>
          <li>
            <i class="far fa-building"></i>
            <span>Office Inspection</span>
          </li>
        </ul>
      </div>
      <div class="nav__login">
        <i class="fas fa-sign-in-alt"></i>
        <span>Login</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 50px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid #d444b5;
  border-image: linear-gradient(to right, #d444b5, #9a8ff3);
  border-image-slice: 1;
  z-index: 100;
}

.nav__list ul {
  display: flex;
}

.nav__list li {
  margin-left: 40px;
  cursor: pointer;
}

.nav__list span {
  padding-left: 5px;
}

.nav__login span {
  padding-left: 5px;
}

.nav__list span {
  color: #593d90;
  font-weight: 700;
  font-size: 18px;
}

.nav__icon,
.nav__login span {
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 20px;
}

.nav__login {
  cursor: pointer;
}

.nav i {
  /* color: linear-gradient(to right, #6478fb, #8763fb); */
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}
</style>