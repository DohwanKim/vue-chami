<template>
  <div id="id-main-view">
    <header>
      <base-header/>
    </header>

    <section id="id-advert-area">
      <advertCarousel/>
    </section>

    <section id="id-main-view-section" class="main">
      <b-container class="dg-custom-container">
        <b-row class="main__filter mobile-in-grid-p">
          <b-col>
            <b-dropdown id="main--dropdown-left" text="최근년도순" variant="primary" class="main__filter--left">
              <b-dropdown-item href="#">최근 년도순</b-dropdown-item>
              <b-dropdown-item href="#">과거 년도순</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <!-- filter subject -->
          <b-col cols="4">
            <b-dropdown id="main--dropdown-right" right text="전 과목" variant="primary" class="main__filter--right">
              <b-dropdown-item href="#">전 과목</b-dropdown-item>
              <b-dropdown-item href="#">수학</b-dropdown-item>
              <b-dropdown-item href="#">영어</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <!-- filter subject end -->
        </b-row>
        <b-row>
          <b-col>
            <!-- each items -->
            <b-row class="main__menus shadow" v-for="mainEachData in mainData" v-bind:key="mainEachData.index">
                <b-col cols="4">
                  <div>
                    <p>{{mainEachData[0]}}년 대비</p>
                  </div>
                  <!-- badge -->
                  <div>
                    <span class="main__menus--badge" v-bind:class="setBadgeClass(mainEachData[1])">{{mainEachData[1]}}</span>
                  </div>
                  <!-- badge end -->
                </b-col>
                <b-col>
                  <p>6월</p>
                </b-col>
                <b-col>
                  <p>9월</p>
                </b-col>
                <b-col>
                  <p>수능</p>
                </b-col>
              </b-row>
            <!-- each items end -->
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
  import baseHeader from "@/components/base/baseHeader.vue";
  import baseFooter from "@/components/base/baseFooter.vue";
  import advertCarousel from "@/components/advertCarousel.vue"

  export default {
    name: "mainView",

    components: {
      baseHeader: baseHeader,
      baseFooter: baseFooter,
      advertCarousel: advertCarousel,
    },

    data() {
      return {
        mainData: {
          data1: ['2020', '수학'],
          data2: ['2019', '수학'],
          data3: ['2019', '영어'],
          data4: ['2018', '과학']
        },
      }
    },

    methods: {
      setBadgeClass(subject) {
        let res = '';

        if(subject === '수학') {
          res = 'badge--math';
        }else if(subject === '영어') {
          res = 'badge--english';
        } else {
          res = 'badge--others';
        }

        return res;
      },

    },
  }
</script>

<style scoped>

</style>
