<template>
  <div class="right-cards">
    <Header />
    <div class="widgets">
      <Widget />
      <Widget />
    </div>
    <!-- <Search /> -->
    <!-- <TagCloud /> -->
    <Toc v-if="showToc" />
    <!-- <Repositories /> -->
    <!-- <CustomLinks title="订阅本站" :links="links" /> -->
    <footer class="links">
      <div class="link-item">
        <a :href="social.link" v-for="(social, idx) in socials" :key="idx">
          <span class="icon">
            <i :class="social.icon"></i>
          </span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@theme/components/Header.vue";
import Toc from "./Toc.vue";
import Search from "./Search.vue";
import TagCloud from "./TagCloud.vue";
import Repositories from "./Repositories.vue";
import Widget from "./Widget.vue";
import CustomLinks from "./CustomLinks.vue";
export default {
  components: {
    Header,
    Toc,
    Search,
    TagCloud,
    Repositories,
    CustomLinks,
    Widget,
  },

  data() {
    return {
      socials: [
        { icon: "fab fa-github", link: "https://github.com/saltbo", },
        { icon: "fab fa-telegram", link: "https://t.me/saltboblog", },
        { icon: "fab fa-github", link: "https://github.com/saltbo", },
        { icon: "fab fa-github", link: "https://github.com/saltbo", },
      ],
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

// .fa-telegram
//   color: #29b6f6

.fa-rss
  color: #ff9800

.fa-at
  color: #46cf7f

.links
  position fixed
  bottom: 20px;
  .link-item
    margin: 0 10px


@media (max-width: $MQMobile)
  .right-cards
    display: none
  
</style>>