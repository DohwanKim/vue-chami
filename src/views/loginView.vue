<template>
  <div id="login-view">
    <header>
      <div id="id-title-header" class="header">
        <b-container class="dg-custom-container">
          <b-row class="header__gird">
            <b-col class="header__gird--left">
              <img src="@/assets/images/banner/logo.png" alt="" class="header__logo">
              풀이를 뽐내자
            </b-col>
            <b-col class="header__gird--right-vertical">
              <div>
                <img src="@/assets/icons/imgBaseIcons/home.png" alt="" class="header__login-icon">
                <a>메인으로</a>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </header>

    <section id="login-section" class="login"
     :style="{'background-image': 'url(' + require('@/assets/images/login-background.jpg') + ')'}"
    >
      <b-container class="dg-custom-container login__container-grid">
        <b-row class="login__row-grid">
          <b-col class="login__col-grid">
            <h1>LOGIN</h1>
            <button class="google">
              Google로 로그인 <img src="@/assets/icons/imgBaseIcons/login-google.png" alt="">
            </button>
            <button class="naver">
              Naver로 로그인 <img src="@/assets/icons/imgBaseIcons/login-naver.png" alt="">
            </button>
            <button class="kakao">
              Kakao로 로그인 <img src="@/assets/icons/imgBaseIcons/login-kakao.png" alt="">
            </button>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <footer>
      <base-footer/>
    </footer>
  </div>
</template>

<script>
  import baseFooter from "@/components/base/baseFooter.vue";

  export default {
    name: "loginView",

    components: {
      baseFooter: baseFooter,
    },
  }
</script>

<style scoped>

</style>
