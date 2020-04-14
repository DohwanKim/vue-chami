<template>
  <div id="mainView">
    <header>
      <base-header/>
    </header>

    <section id="mainViewSection">
      hi
    </section>

    <footer>
      <base-footer/>
    </footer>
  </div>
</template>

<script>
  import baseFooter from "@/components/base/footer.vue";
  import baseHeader from "@/components/base/header.vue";

  export default {
    name: "mainView",
    components: {
      baseHeader: baseHeader,
      baseFooter: baseFooter,
    }
  }
</script>

<style scoped>

</style>
