<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Clock />
      </div>
    </div>
    <h1 class="col-12 display-1 fw-bold mt-5">【後台管理系統】</h1>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="login-box">
        <h2>請輸入您的帳號及密碼</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>帳號:</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>密碼:</label>
          </div>
          <RouterLink href="#" to="/home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            登入
          </RouterLink>
        </form>
      </div>
    </div>
    <img class="mt-5" src="@/assets/images/logo_3.png" alt="logo" />
    <footer class="fs-3 text-center ">{{ footer }}</footer>
    <router-view />
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue';

export default {
  data() {
    return {
      footer: '【iM-System-檳榔連鎖管理軟體】  版權所有',
    };
  },
  components: {
    Clock,
  },
};
</script>
<style  lang="scss">
.login-box {
  width: 70%;
  padding: 40px;
  background: rgb(17, 17, 17);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }
  .user-box {
    position: relative;
    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }
    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }
  }
  form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }
  a span {
    position: absolute;
    display: block;
    &:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #03e9f4);
      animation: btn-anim1 1s linear infinite;
    }
    &:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #03e9f4);
      animation: btn-anim2 1s linear infinite;
      animation-delay: 0.25s;
    }
    &:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #03e9f4);
      animation: btn-anim3 1s linear infinite;
      animation-delay: 0.5s;
    }
    &:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #03e9f4);
      animation: btn-anim4 1s linear infinite;
      animation-delay: 0.75s;
    }
  }
  a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
