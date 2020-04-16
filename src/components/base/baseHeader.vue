<template>
  <div id="id-base-header" class="header">
    <b-container class="dg-custom-container">
      <b-row class="header__gird">
        <b-col class="header__gird--left">
          <img src="@/assets/images/banner/logo.png" alt="" class="header__logo">
          <a>풀이를 뽐내자</a>
        </b-col>
        <b-col class="header__gird--right">
          <img src="@/assets/icons/imgBaseIcons/login.png" alt="" class="header__login-icon">
          <a>로그인</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "baseHeader"
  }
</script>

<style scoped>

</style>
