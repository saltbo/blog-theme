
<template>
  <header>
    <div class="container is-max-widescreen">
      <div class="logo">
        <div class="title">{{ $site.title }}</div>
        <div class="slogan">Keep Growth</div>
      </div>

      <nav class="blog-navbar" role="navigation" aria-label="main navigation">
        <div id="navbar" class="blog-navbar-menu">
          <div class="blog-navbar-start">
            <a class="blog-navbar-item" v-for="item in userLinks" :key="item.link" :href="item.link"
              v-bind:class="{ active: active(item.link) }">{{ item.text }}</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    menuShow() {
      return this.menuOpen ? "opened" : "closed";
    },
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    userLinks() {
      function resolveNavLinkItem(linkItem) {
        return Object.assign(linkItem, {
          type: linkItem.items && linkItem.items.length ? "links" : "link",
        });
      }

      return (this.userNav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },
  },
  methods: {
    active(link) {
      if (link == '/' && this.$page.path != '/') {
        return ''
      }

      return this.$page.path.startsWith(link)
    },
    onMenuClick() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="stylus" scoped>
header
  // height: $headerHeight;
  background: #333;
  color: #fff;
  padding: 36px 0px 100px 20px
  .title
    color: #fff
    display: inline-block
  .slogan
    display: inline-block
    color: $grey
    font-size: 12px
    margin-left: 5px
  .blog-navbar
    min-height: 0
    background: #333
  .blog-navbar-item
    color: #fff
    padding .2rem .4rem
  .active
    background: #242424

  .blog-navbar-item:hover
    color: #333;
    background: #fff

  @media (max-width: $MQMobile)
    padding-left: 15px;

.menu
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

.opened
  max-height: 50rem;

.closed
  @media (max-width: 1000px)
    max-height: 0;
</style>