<template>
  <div class="login-modal">
    <div class="login__head">
      <div class="top__text">Login</div>
      <i class="fas fa-times"></i>
    </div>
    <!-- <div class="login__modal-back">
    </div>-->
    <div class="login__phone">
      <input type="text" class="phone__input" placeholder="Phone Number (except (-))" />
      <button>OK</button>
    </div>
    <div class="login__password">
      <input type="text" class="password__input" placeholder="Certification Number" />
      <button>OK</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login-modal {
  width: 400px;
  height: 180px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #593d90;
  border-image: linear-gradient(to right, #d444b5, #9a8ff3);
  border-image-slice: 1;
  margin: auto;
  margin-top: 30vh;
  position: relative;
  z-index: 200;
}

.login__head {
  height: 50px;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  font-size: 25px;
  font-weight: 800;
}

.login-modal button {
  width: 80px;
  height: 30px;
  color: #593d90;
  border: 1px solid #593d90;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
}

.login-modal button:hover {
  border: none;
  outline: none;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  color: white;
}

.login__phone,
.login__password {
  margin: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-modal input {
  height: 35px;
  width: 270px;
  padding: 5px;
  border-bottom: 1px solid #593d90;
}

.login-modal input:focus {
  outline: none;
}

/* .login__modal-back {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0px;
  left: 0px;
  z-index: -1;
} */
</style>