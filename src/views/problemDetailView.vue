<template>
  <div id="id-problem-detail-view">
    <header>
      <div id="id-title-header" class="header">
        <b-container class="dg-custom-container">
          <b-row class="header__gird">
            <b-col class="header__gird--left">
              <img src="@/assets/images/banner/logo.png" alt="" class="header__logo">
            </b-col>
            <b-col cols="7" class="header__grid--center--detail">
              <h1>2020년 대비 6월 (가형) 6번sfsdfsfds</h1>
            </b-col>
            <b-col class="header__gird--right-vertical">
              <div>
                <img src="@/assets/icons/imgBaseIcons/my-post.png" alt="" class="header__login-icon" style="width: 23px">
                <a>내 게시글</a>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </header>

    <section id="id-problem-detail-view-section" class="problem-detail">
      <section class="problem-detail__post">
        <b-container class="dg-custom-container">
          <b-row class="problem-detail__post--filter mobile-in-grid-p">
            <b-col>
              <b-dropdown id="id-post-filter" text="인기 풀이 순" variant="primary" class="problem-detail__post--filter-drop-down">
                <b-dropdown-item href="#">인기 풀이 순</b-dropdown-item>
                <b-dropdown-item href="#">날짜순서로 보기</b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="dg-custom-container">
          <div class="problem-detail__post--grid mobile-in-grid-p">
            <b-row class="no-gutters border-bottom problem-detail__post--top shadow" style="padding: 10px">
              <div class="problem-detail__post--profile-img">
                <img src="@/assets/icons/imgBaseIcons/teacher.png" alt="">
              </div>
              <b-col class="problem-detail__post--title">
                <b-row class="no-gutters">
                  <b-col cols="12" class="title">
                    김동글 선생님의 개쩌는 샷빨 풀이
                  </b-col>
                  <b-col cols="12" class="date">
                    2020년 4월 15일 17시 07분 등록
                  </b-col>
                </b-row>
              </b-col>
              <div class="problem-detail__post--tier-img">
                <img src="@/assets/icons/imgBaseIcons/comment-gold.png" alt="">
              </div>
            </b-row>
            <b-row class="no-gutters problem-detail__post--contents shadow">
              <b-col cols="12" class="problem-detail__post--contents--text">
                <div> <!--에디터 html화 해서 들어오면 p 태그 사용-->
                  hisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfs
                </div>
              </b-col>
              <b-col cols="12" class="problem-detail__post--contents--img">
                <vihttps://github.com/DohwanKim/vue-chamiewer>
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  <transition name="more-img" tag="img">
                    <img v-show="moreImgStatus0" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  </transition>
                  <transition name="more-img" tag="img">
                    <img v-show="moreImgStatus0" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  </transition>
                </viewer>
              </b-col>
              <b-col cols="12" class="problem-detail__post--contents--more">
                <button @click="moreImgStatus0 = !moreImgStatus0"> {{moreImgBtnMsg0}} </button>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>

      <section>
        <b-container class="dg-custom-container" style="margin-bottom: 15px">
          <b-row class="problem-detail__post--filter mobile-in-grid-p">
            <b-col>
              <b-row class="no-gutters problem-detail__post--your-post shadow">
                <b-col cols="12" class="mb-2">
                  <img src="@/assets/icons/imgBaseIcons/write-post.png" alt="" class="book-img">
                  여러분의 풀이를 <img src="@/assets/images/banner/logo.png" alt="" class="mini-logo"> 내보세요.
                </b-col>
                <b-col cols="12">
                  <button v-b-modal.modal-posting>내 풀이 올리기</button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="problem-detail__post">
        <!-- each post -->
        <b-container class="dg-custom-container">
          <div class="problem-detail__post--grid mobile-in-grid-p">
            <b-row class="no-gutters border-bottom problem-detail__post--top shadow" style="padding: 10px">
              <div class="problem-detail__post--profile-img">
                <img src="@/assets/icons/imgBaseIcons/teacher.png" alt="">
              </div>
              <b-col class="problem-detail__post--title">
                <b-row class="no-gutters">
                  <b-col cols="12" class="title">
                    김동글 / 풀이고등학교
                  </b-col>
                  <b-col cols="12" class="date">
                    2020년 4월 15일 17시 07분 등록
                  </b-col>
                </b-row>
              </b-col>
              <div class="problem-detail__post--tier-img">
                <img src="@/assets/icons/imgBaseIcons/comment-gold.png" alt="">
              </div>
            </b-row>
            <b-row class="no-gutters problem-detail__post--contents shadow">
              <b-col cols="12" class="problem-detail__post--contents--text">
                <div> <!--에디터 html화 해서 들어오면 p 태그 사용-->
                  hisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfshisfsdfs
                </div>
              </b-col>
              <b-col cols="12" class="problem-detail__post--contents--img">
                <viewer>
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  <transition name="more-img" tag="img">
                    <img v-show="moreImgStatus1" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  </transition>
                  <transition name="more-img" tag="img">
                    <img v-show="moreImgStatus1" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  </transition>
                </viewer>
              </b-col>
              <b-col cols="12" class="problem-detail__post--contents--more">
                <button @click="moreImgStatus1 = !moreImgStatus1">{{moreImgBtnMsg1}}</button>
              </b-col>
            </b-row>
            <b-row class="no-gutters problem-detail__post--comments shadow">
              <b-col cols="12" class="border-top border-bottom problem-detail__post--comments--icons">
                <b-row class="no-gutters">
                  <b-col class="border-right">
                    <div>
                      <img src="@/assets/icons/imgBaseIcons/thumb.png" alt="">
                    </div>
                    <div><p>엄지척</p></div>
                    <div><p class="sub">(999+)</p></div>
                  </b-col>
                  <b-col class="border-right">
                    <div>
                      <img src="@/assets/icons/imgBaseIcons/comment.png" alt="">
                    </div>
                    <div><p>댓글</p></div>
                    <div><p class="sub">(999+)</p></div>
                  </b-col>
                  <b-col>
                    <div>
                      <img src="@/assets/icons/imgBaseIcons/share.png" alt="">
                    </div>
                    <div><p>친구에게 뽐내기</p></div>
                    <div><p class="sub">(999+)</p></div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" class="problem-detail__post--comments--forms border-bottom">
                <b-row class="no-gutters">
                  <b-col>
                    <b-form-textarea
                        id="textarea"
                        v-model="text"
                        placeholder="댓글을 입력하세요. 혐오, 욕설 등 비교육적 게시물일 경우 관리자에 의해 삭제 될 수 있습니다."
                        rows="2"
                        max-rows="6"
                    />
                  </b-col>
                  <div>
                    <button>
                      작성
                    </button>
                  </div>
                </b-row>
              </b-col>
              <!-- each comment -->
              <b-col cols="12" class="problem-detail__post--comments--all">
                <b-row class="no-gutters">
                  <b-col cols="12" class="title">
                    김동글 / 대청고등학교
                  </b-col>
                  <b-col cols="12">
                    <b-row class="no-gutters">
                      <b-col cols="8" class="date">
                        2020년 4월 15일 17시 07분 등록
                      </b-col>
                      <b-col class="text-right" style="margin-top: -5px">
                        <button>
                          수정
                        </button>
                        <button>
                          삭제
                        </button>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" class="comment border">
                    작성한 사람들의 댓글을 볼 수 있습니다.
                    작성한 사람들의 댓글을 볼 수 있습니다.
                    작성한 사람들의 댓글을 볼 수 있습니다.
                    작성한 사람들의 댓글을 볼 수 있습니다.
                    작성한 사람들의 댓글을 볼 수 있습니다.
                  </b-col>
                </b-row>
              </b-col>
              <!-- each comment end -->
              <b-col cols="12" class="problem-detail__post--comments--more">
                <p>- 이 게시글에 있는 댓글 더 보기 -</p>
              </b-col>
            </b-row>
          </div>
        </b-container>
        <!-- each post end -->
      </section>

      <section class="problem-detail--fixed-icon">
        <div class="shadow hvr-buzz-out" v-b-modal.modal-posting>
          <img src="@/assets/icons/imgBaseIcons/write-post-white.png" alt="">
          <p>풀이작성</p>
        </div>
      </section>

      <section class="problem-detail--modal">
        <b-modal id="modal-posting" size="lg" title="BootstrapVue" hide-header hide-footer style="padding: 0">
          <div id="id-posting-view">
            <section id="id-posting-view-section" class="posting">
              <b-container class="dg-custom-container posting__top">
                <b-row class="posting__title">
                  <b-col>
                    <h1>수학 2020년 대비 6월 (가형) 6번</h1>
                    <b-icon-x class="posting__top--icon hvr-grow" @click="hideModal"/>
                  </b-col>
                </b-row>
              </b-container>
              <div class="divider"/>
              <b-container class="dg-custom-container posting__top">
                <b-row class="posting__des">
                  <b-col cols="6" style="padding-right: 5px">
                    <label>
                      <input type="text" placeholder="학교/학원" v-model="inputIdentity">
                    </label>
                  </b-col>
                  <b-col cols="6" style="padding-left: 5px">
                    <label>
                      <input type="text" placeholder="풀이고등학교" v-model="inputSchool">
                    </label>
                  </b-col>
                </b-row>
                <b-row class="posting__option-button">
                  <b-col cols="4">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="240.000000pt" height="240.000000pt" viewBox="0 0 240.000000 240.000000"
                         preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
                         fill="#000000" stroke="none">
                        <path d="M822 2083 c-130 -193 -101 -183 -507 -183 l-315 0 0 -850 0 -850
1200 0 1200 0 0 850 0 850 -215 0 c-291 0 -281 -5 -407 183 l-78 117 -400 0
-400 0 -78 -117z m822 -159 c78 -120 167 -188 278 -214 24 -5 96 -10 161 -10
l117 0 0 -650 0 -650 -1000 0 -1000 0 0 650 0 650 218 0 c119 0 236 5 260 10
111 26 200 94 278 214 l49 76 295 0 295 0 49 -76z"/>
                        <path d="M1220 1594 c-53 -10 -147 -48 -195 -79 -90 -59 -151 -137 -195 -250
-31 -80 -34 -233 -6 -315 51 -152 156 -260 311 -320 49 -19 79 -24 165 -24 86
0 116 5 165 24 155 60 260 168 311 320 25 75 25 225 0 300 -68 202 -242 335
-451 345 -44 2 -91 2 -105 -1z m219 -229 c59 -32 100 -75 133 -138 19 -34 23
-58 23 -127 0 -69 -4 -93 -23 -127 -33 -63 -74 -106 -134 -139 -47 -26 -62
-29 -138 -29 -93 0 -137 16 -203 74 -76 67 -115 198 -88 298 24 90 116 185
205 213 17 5 63 8 102 6 55 -2 82 -9 123 -31z"/>
                        <path d="M434 1466 c-46 -46 -46 -86 0 -132 24 -24 43 -34 66 -34 44 0 100 56
100 100 0 44 -56 100 -100 100 -23 0 -41 -9 -66 -34z"/>
                        <path d="M200 2050 l0 -50 150 0 150 0 0 50 0 50 -150 0 -150 0 0 -50z"/>
                      </g>
                    </svg>
                  </b-col>
                  <b-col cols="4">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="240.000000pt" height="240.000000pt" viewBox="0 0 240.000000 240.000000"
                         preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
                         fill="#000000" stroke="none">
                        <path d="M0 1200 l0 -1000 1200 0 1200 0 0 1000 0 1000 -1200 0 -1200 0 0
-1000z m2200 0 l0 -800 -1000 0 -1000 0 0 800 0 800 1000 0 1000 0 0 -800z"/>
                        <path d="M509 1772 c-43 -23 -59 -38 -82 -82 -36 -68 -33 -125 7 -195 36 -60
114 -100 181 -92 71 7 133 50 161 110 31 68 30 113 -4 178 -22 43 -38 59 -81
81 -31 16 -69 28 -91 28 -22 0 -60 -12 -91 -28z"/>
                        <path d="M1283 1313 c-62 -98 -118 -186 -125 -195 -12 -16 -24 -8 -132 77 -66
52 -122 95 -125 95 -3 0 -45 -55 -93 -123 -48 -67 -159 -222 -247 -344 l-160
-223 799 0 800 0 -297 445 c-163 245 -299 445 -302 445 -4 0 -57 -80 -118
-177z"/>
                      </g>
                    </svg>
                  </b-col>
                  <b-col cols="4">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="240.000000pt" height="240.000000pt" viewBox="0 0 240.000000 240.000000"
                         preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
                         fill="#000000" stroke="none">
                        <path d="M214 2186 c-100 -32 -183 -121 -204 -219 -8 -36 -10 -275 -8 -792 3
-733 3 -740 24 -786 28 -60 87 -119 150 -150 l49 -24 975 0 975 0 49 24 c63
31 122 90 150 150 21 46 21 49 21 816 0 767 0 770 -21 816 -28 60 -87 119
-150 150 l-49 24 -960 2 c-762 1 -968 -1 -1001 -11z m1169 -760 c229 -132 416
-240 414 -242 -4 -4 -799 -434 -859 -465 l-38 -19 0 501 0 501 33 -19 c17 -11
220 -126 450 -257z"/>
                      </g>
                    </svg>
                  </b-col>
                </b-row>
              </b-container>
              <b-container class="dg-custom-container posting__form">
                <b-row>
                  <b-col class="posting__form--text">
                    <b-form-textarea
                        id="textarea"
                        v-model="postingText"
                        :placeholder="'여러분의 풀이를 사진으로 찍어 올려주세요.\n유튜브 링크도 환영합니다.\n 그리고 이곳에 풀이에 대한 간단한 소개를 적어주세요.'"
                        rows="6"
                        max-rows="10"
                        :state="postingText.length < 2000"
                        @keyup="limitTextArea"
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="posting__form--img">
                    <div>
                      <img src="@/assets/images/login-background.jpg" alt="">
                      <div class="posting__form--img-in-button">
                        <b-icon icon="x-circle"/>
                      </div>
                    </div>
                    <div>
                      <img src="@/assets/images/login-background.jpg" alt="">
                      <div class="posting__form--img-in-button">
                        <b-icon icon="x-circle"/>
                      </div>
                    </div>
                    <div class="posting__form--add-img">
                      <b-icon-plus/>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="posting__form--max-text-show">
                    <span>{{postingText.length}}</span>/<span>2000자</span>
                  </b-col>
                </b-row>
              </b-container>
              <b-container class="dg-custom-container posting__file-input border-top border-bottom">
                <b-row class="posting__file-input--button">
                  <b-col cols="5" class="left">
                    <button>파일 첨부하기</button>
                  </b-col>
                  <b-col cols="7" class="right">
                    <p>10mb이하의 파일만 가능합니다.</p>
                  </b-col>
                </b-row>
              </b-container>
              <b-container class="dg-custom-container posting__file-input">
                <b-row class="posting__file-input--items">
                  <!-- each items -->
                  <b-col cols="12">
                    <b-row class="no-gutters">
                      <b-col cols="11" class="posting__file-input--title">
                        <div>
                          2020년 수학 6월에 나온 공식에 대하여.pdfsdfdsfsfdsfsfdfsdfdsfsf
                        </div>
                      </b-col>
                      <b-col cols="1" class="posting__file-input--remove">
                        <b-icon icon="x"/>
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- each items end -->
                </b-row>
              </b-container>
              <b-container class="dg-custom-container posting__buttons border-top">
                <b-row>
                  <b-col class="submit">
                    <button>등록하기</button>
                  </b-col>
                  <b-col class="cancel">
                    <button>취소하기</button>
                  </b-col>
                </b-row>
              </b-container>
            </section>
          </div>
        </b-modal>
      </section>
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
    name: "problemDetailView",

    components: {
      baseHeader: baseHeader,
      baseFooter: baseFooter,
      advertCarousel: advertCarousel,
    },

    data() {
      return {
        moreImgStatus0: false,
        moreImgStatus1: false,
        moreImgBtnMsg0: '풀이 펼쳐보기',
        moreImgBtnMsg1: '풀이 펼쳐보기',
        text: '',
        postingText: '',
        inputSchool: '',
        inputIdentity: '',
      }
    },

    watch: {
      moreImgStatus0: function(val) {
        if(val) {
          this.moreImgBtnMsg0 = '이미지 숨기기';
        } else {
          this.moreImgBtnMsg0 = '풀이 펼쳐보기';
        }
      },
      moreImgStatus1: function(val) {
        if(val) {
          this.moreImgBtnMsg1 = '이미지 숨기기';
        } else {
          this.moreImgBtnMsg1 = '풀이 펼쳐보기';
        }
      },
    },

    methods: {
      movePage(pageURL) {
        this.$router.push('/');
      },
      hideModal() {
        this.$root.$emit('bv::hide::modal', 'modal-posting', '#btnShow')
      },
      limitTextArea() {
        if (this.postingText.length > 2000) {
          alert('2000자를 넘길 수 없습니다.');
          this.postingText = this.postingText.substring(0, 2000);
        }
      }
    }
  }
</script>

<style scoped>

</style>
