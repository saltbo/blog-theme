<template>
  <div class="right-cards">
    <!-- <Search /> -->
    <!-- <TagCloud /> -->
    <Toc v-if="showToc" />
    <Repositories />
    <CustomLinks title="订阅本站" :links="links" />
  </div>
</template>

<script>
import Toc from "./Toc.vue";
import Search from "./Search.vue";
import TagCloud from "./TagCloud.vue";
import Repositories from "./Repositories.vue";
import CustomLinks from "./CustomLinks.vue";
export default {
  components: {
    Toc,
    Search,
    TagCloud,
    Repositories,
    CustomLinks,
  },

  data() {
    return {
      links: [
        { title: "Telegram订阅", iconClass: "fab fa-telegram", url: "https://t.me/saltboblog" },
        { title: "RSS订阅", iconClass: "fas fa-rss", url: "/rss.xml" },
        // { title: "Email订阅", iconClass: "fas fa-at", src: "" },
      ]
    }
  },
  computed: {
    showToc() {
      return this.$page.id == 'post'
    }
  }

}
</script>

<style lang="stylus">
.right-cards
  position: sticky;
  top: 0
  
  .card
    margin-bottom: 18px

.fa-telegram
  color: #29b6f6

.fa-rss
  color: #ff9800

.fa-at
  color: #46cf7f


@media (max-width: $MQMobile)
  .right-cards
    display: none
  
</style>>