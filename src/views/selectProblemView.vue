<template>
  <div id="id-select-problem-view">
    <header>
      <base-header/>
    </header>

    <section id="id-advert-area">
      <advertCarousel/>
    </section>

    <section id="id-select-problem-section" class="select-problem">
      <b-container class="dg-custom-container shadow">
        <b-row>
          <b-col class="select-problem--title">
            <h1>2020년 대비 6월</h1>
          </b-col>
        </b-row>
        <b-row class="select-problem--items" v-for="n in 4" v-bind:key="n.index">
          <b-col cols="12" @click="movePage('detail')">
            <p>(가형) 1번</p>
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
  import advertCarousel from "@/components/advertCarousel.vue";

  export default {
    name: "selectProblemView",

    components: {
      baseHeader: baseHeader,
      baseFooter: baseFooter,
      advertCarousel: advertCarousel,
    },

    methods: {
      movePage(pageURL) {
        this.$router.push('/');
      }
    },
  }
</script>

<style scoped>

</style>
