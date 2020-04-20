<template>
  <div id="id-my-page-view">
    <header>
      <div id="id-title-header" class="header">
        <b-container class="dg-custom-container">
          <b-row class="header__gird">
            <b-col class="header__gird--left">
              <img src="@/assets/images/banner/logo.png" alt="" class="header__logo">
            </b-col>
            <b-col class="header__grid--center">
              <h1>마이페이지</h1>
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

    <section id="my-page-section" class="my-page">
      <b-container class="dg-custom-container my-page__tabs border-top-0">
        <b-row>
          <b-col class="active" @click="tabEvent(0)" id="id-my-page-tab-1">
            <p>내 작성글</p>
          </b-col>
          <b-col class="border-left" @click="tabEvent(1)" id="id-my-page-tab-2">
            <p>내 정보</p>
          </b-col>
        </b-row>
      </b-container>
      <transition name="fade" mode="out-in">
        <b-container class="dg-custom-container" v-if="myPageTabStatus === 0" key="tabs1">
          <b-row class="my-page__filter-area mobile-in-grid-p">
            <b-col class="my-page__filter-area--left">
              <b-dropdown id="my-page-dropdown-left" text="2020년" variant="primary" class="my-page__filter">
                <b-dropdown-item href="#">2020</b-dropdown-item>
                <b-dropdown-item href="#">2019</b-dropdown-item>
              </b-dropdown>
            </b-col>
            <b-col class="my-page__filter-area--right">
              <b-dropdown id="my-page-dropdown-right" text="전체" variant="primary" class="my-page__filter">
                <b-dropdown-item href="#">1</b-dropdown-item>
                <b-dropdown-item href="#">2</b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
          <b-row class="my-page__items mobile-in-grid-p">
            <!-- items -->
            <b-col class="my-page__items--each shadow" cols="12" v-for="n in 7" v-bind:key="n.index">
              <b-row class="no-gutters">
                <b-col class="my-page__items--title border-bottom border-right">
                  <div>
                    <h3>수학 2020년 대비 6월 (가형) 6번</h3>
                  </div>
                  <div>
                    <h6>2020년 4월 15일 17시 07분 등록</h6>
                  </div>
                </b-col>
                <b-col cols="4">
                  <div style="height: 55%" class="my-page__items--ranking border-bottom">
                    100위
                  </div>
                  <div style="height: 45%" class="my-page__items--buttons border-bottom">
                    <div>
                      <button>수정</button>
                    </div>
                    <div class="border-left">
                      <button>삭제</button>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="my-page__items--bottom-buttons no-gutters">
                <b-col cols="4">
                  <img src="@/assets/icons/imgBaseIcons/thumb.png" alt="" class="my-page__items--icon-1">
                  <span>엄지척(1000)</span>
                </b-col>
                <b-col cols="4" class="border-left border-right">
                  <img src="@/assets/icons/imgBaseIcons/comment.png" alt="" class="my-page__items--icon-2">
                  댓글(1000)
                </b-col>
                <b-col cols="4">
                  <img src="@/assets/icons/imgBaseIcons/share.png" alt="" class="my-page__items--icon-3">
                  친구에게 뽐내기
                </b-col>
              </b-row>
            </b-col>
            <!-- items end -->
          </b-row>
        </b-container>
        <b-container class="dg-custom-container" v-else-if="myPageTabStatus === 1" key="tabs2">
          <b-row class="my-page__my-info mobile-in-grid-p">
            <b-col>
              <b-row class="no-gutters my-page__my-info--selects" id="id-my-info-select">
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
              <b-row class="my-page__my-info--form">
                <b-col cols="4" sm="3" class="my-page__my-info--form--left">
                  <p>학교/학원</p>
                </b-col>
                <b-col cols="8" sm="9" class="my-page__my-info--form--right">
                  <b-input-group>
                    <b-form-input/>
                  </b-input-group>
                  <button>찾기</button>
                </b-col>
                <b-col cols="4" sm="3" class="my-page__my-info--form--left">
                  <p>이름/닉네임</p>
                </b-col>
                <b-col cols="8" sm="9" class="my-page__my-info--form--right">
                  <b-input-group>
                    <b-form-input/>
                  </b-input-group>
                  <button>중복확인</button>
                </b-col>
                <b-col cols="4" sm="3" class="my-page__my-info--form--left">
                  <p>학교/학원</p>
                </b-col>
                <b-col cols="8" sm="9" class="my-page__my-info--form--right">
                  kimdonggle@kimdonggle.comsdfsdfsfsdkimdonggle@kimdonggle.com
                </b-col>
                <b-col cols="12">
                  <button>
                    수정 적용하기
                  </button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="my-page__secession mobile-in-grid-p">
            <b-col>
              <button>탈퇴하기</button>
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </section>

    <footer>
      <base-footer/>
    </footer>
  </div>
</template>

<script>
  import baseHeader from "@/components/base/baseHeader.vue";
  import baseFooter from "@/components/base/baseFooter.vue";
  import advertCarousel from "@/components/advertCarousel.vue";

  export default {
    name: "myPageView",

    components: {
      baseHeader: baseHeader,
      baseFooter: baseFooter,
      advertCarousel: advertCarousel,
    },

    data() {
      return {
        myPageTabStatus: 0,
        selectIdentity: 0,
      }
    },

    methods: {

      selectClear(id) {
        let selectButtons = document.querySelector("#id-my-info-select").children;

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

      tabEvent(tabNum){
        let tab1 = document.querySelector("#id-my-page-tab-1");
        let tab2 = document.querySelector("#id-my-page-tab-2");

        if(tabNum === 0) {
          tab2.classList.toggle('active');
          tab1.classList.toggle('active');
          this.myPageTabStatus = 0;
        } else if (tabNum === 1){
          tab1.classList.toggle('active');
          tab2.classList.toggle('active');
          this.myPageTabStatus = 1;
        } else {
          console.log('wrong tab number');
        }
      },

      movePage(pageURL) {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
