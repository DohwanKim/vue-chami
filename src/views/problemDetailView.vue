<template>
  <div id="id-problem-detail-view">
    <header>
      <div id="id-title-header" class="header">
        <b-container class="dg-custom-container">
          <b-row class="header__gird">
            <b-col class="header__gird--left">
              <img src="@/assets/images/banner/logo.png" alt="" class="header__logo">
            </b-col>
            <b-col cols="8" class="header__grid--center--detail">
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
                <b-img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
              </b-col>
              <transition name="more-img">
                <b-col cols="12" class="problem-detail__post--contents--img" v-if="moreImgStatus">
                  <b-img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  <b-img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                </b-col>
              </transition>
              <b-col cols="12" class="problem-detail__post--contents--more">
                <button @click="moreImgStatus = !moreImgStatus"> {{moreImgBtnMsg}} </button>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>

      <b-container class="dg-custom-container" style="margin-bottom: 15px">
        <b-row class="problem-detail__post--filter mobile-in-grid-p">
          <b-col>
            <b-row class="no-gutters problem-detail__post--your-post shadow">
              <div>
                <img src="@/assets/icons/imgBaseIcons/write-post.png" alt="">
              </div>
              <b-col>
                여러분의 풀이를 <span>뽐</span> 내보세요.
              </b-col>
              <div>
                <button>내 풀이 올리기</button>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-container>

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
                <b-img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
              </b-col>
              <transition name="more-img">
                <b-col cols="12" class="problem-detail__post--contents--img" v-if="moreImgStatus">
                  <b-img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  <b-img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                </b-col>
              </transition>
              <b-col cols="12" class="problem-detail__post--contents--more">
                <button @click="moreImgStatus = !moreImgStatus"> {{moreImgBtnMsg}} </button>
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
        moreImgStatus: false,
        moreImgBtnMsg: '()개의 이미지 더보기+',
        text: '',
      }
    },

    watch: {
      moreImgStatus: function(val) {
        if(val) {
          this.moreImgBtnMsg = '이미지 숨기기';
        } else {
          this.moreImgBtnMsg = '()개의 이미지 더보기+';
        }
      }
    },

    methods: {
      movePage(pageURL) {
        this.$router.push('/');
      },
    }
  }
</script>

<style scoped>

</style>
