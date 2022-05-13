<template>
  <div id="app__global-layout">
    <main class="container is-max-widescreen">
      <div class="columns">
        <div class="column">
          <RightCard />
        </div>
        <div class="column is-three-quarters">
          <div class="default-layout">
            <DefaultGlobalLayout />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import DefaultGlobalLayout from "@app/components/GlobalLayout.vue";
import Footer from "@theme/components/Footer.vue";
import RightCard from "@theme/components/RightCard.vue";
export default {
  components: {
    DefaultGlobalLayout,
    Footer,
    RightCard,
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

.default-layout
  padding 2rem 4rem
  min-height: 350px

@media (max-width: $MQMobile)
  .default-layout
    padding: 1rem;
</style>