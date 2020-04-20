<template>
  <div id="id-first-welcome-view">
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

    <section id="id-first-welcome-section" class="f-w"
             :style="{'background-image': 'url(' + require('@/assets/images/login-background.jpg') + ')'}"
    >
      <b-container class="dg-custom-container">
        <b-row class="f-w__row-grid">
          <b-col class="f-w__col-grid">
            <b-row class="no-gutters">
              <b-col class="text-center">
                <h1>어서오세요</h1>
              </b-col>
            </b-row>
            <b-row class="no-gutters f-w__select" id="id-f-w-select">
              <b-col class="active" @click="selectIdentityEvent(0)" id="select-0">
                <p>학생</p>
              </b-col>
              <b-col @click="selectIdentityEvent(1)" id="select-1">
                <p>교사</p>
              </b-col>
              <b-col @click="selectIdentityEvent(2)" id="select-2">
                <p>없음</p>
              </b-col>
            </b-row>
            <b-row class="no-gutters f-w__form">
              <b-col cols="3" class="f-w__form--label">
                <p>학교/학원</p>
              </b-col>
              <b-col cols="6" class="f-w__form--input">
                <label for="school"/><input type="text" id="school"/>
              </b-col>
              <b-col cols="3"/>

              <b-col cols="3" class="f-w__form--label">
                <p>이름/닉네임</p>
              </b-col>
              <b-col cols="6" class="f-w__form--input">
                <label for="name"/><input type="text" id="name"/>
              </b-col>
              <b-col cols="3" class="f-w__form--button">
                <button>중복확인</button>
              </b-col>

              <b-col cols="3" class="f-w__form--label">
                <p>이메일</p>
              </b-col>
              <b-col cols="6" class="f-w__form--email">
                <p>kimdonggle@naver.com</p>
              </b-col>
              <b-col cols="3" class="f-w__form--button"/>
            </b-row>
            <b-row class="no-gutters f-w__terms1">
              <b-col cols="12" class="f-w__terms--text">
                <div>
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                </div>
              </b-col>
              <b-col cols="12" class="f-w__terms--check">
                <b-form-checkbox
                    id="termsAgree-1"
                    v-model="status"
                    name="termsAgree-1"
                    value="yes"
                    unchecked-value="no"
                >
                  이용약관에 동의합니다
                </b-form-checkbox>
              </b-col>
            </b-row>
            <b-row class="no-gutters f-w__terms2">
              <b-col cols="12" class="f-w__terms--text">
                <div>
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                  sdfslkfjsldkfjklsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkfsdlkfjsdjlkf
                </div>
              </b-col>
              <b-col cols="12" class="f-w__terms--check">
                <b-form-checkbox
                    id="termsAgree-2"
                    v-model="termsAgree2"
                    name="termsAgree-2"
                    value="yes"
                    unchecked-value="no"
                >
                  개인정보취급방침에 동의합니다.
                </b-form-checkbox>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="dg-custom-container">
        <b-row class="no-gutters f-w__submit">
          <b-col>
            <button>뽐 시작하기</button>
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
    name: "firstWelcomeView",

    components: {
      baseFooter: baseFooter,
      selectIdentity: 0,
      termsAgree1: 'no',
      termsAgree2: 'no',
    },

    methods: {
      selectClear(id) {
        let selectButtons = document.querySelector("#id-f-w-select").children;

        for(let i = 0; i < selectButtons.length; i++) {
          selectButtons[i].classList.remove('active');
        }

        selectButtons[id].classList.add('active');
      },

      // 0 - student, 1 - teacher, 2 - none
      selectIdentityEvent(identityNum) {
        this.selectIdentity = identityNum;
        this.selectClear(identityNum);
      },
    }
  }
</script>

<style scoped>

</style>
