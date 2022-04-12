<template>
  <div id="app__global-layout">
    <Header />
    <DefaultGlobalLayout />
    <Footer />
  </div>
</template>

<script>
import DefaultGlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";
export default {
  components: {
    DefaultGlobalLayout,
    Header,
    Footer,
  },
  data() {
    return {
      script: Object,
      isMobileHeaderOpen: false,
    };
  },
  methods: {
    findPagesNum(id) {
      let pages = this.$site.pages.filter((item) => {
        return item.id == id;
      });

      return pages.length;
    },
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.script.fetch();
      }
    },
  },
  computed: {
    postsNum() {
      return this.findPagesNum("post");
    },
    notesNum() {
      return this.findPagesNum("note");
    },
    tagsNum() {
      return this.$tag.list.length;
    },
  },
  mounted() {
    this.script = require("busuanzi.pure.js");
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  },
};
</script>

<style lang="stylus" scoped>
#app__global-layout
  word-wrap: break-word;
</style>