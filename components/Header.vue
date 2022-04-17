
<template>
  <header>
    <div class="container is-max-widescreen">
      <div class="logo">
        <div class="title">{{ $site.title }}</div>
        <div class="slogan">Keep Growth</div>
      </div>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <!-- <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div> -->

        <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" v-for="item in userLinks" :key="item.link" :href="item.link"> {{item.text}}</a>
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
  padding: 36px 0px 100px 0px
  .title
    color: #fff
    display: inline-block
  .slogan
    display: inline-block
    color: $grey
    font-size: 12px
    margin-left: 5px
  .navbar
    min-height: 0
    background: #333
  .navbar-item
    color: #fff
    padding 0 0.5rem
  .navbar-item:hover
    color: #333;
    background: #fff
  

.menu
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

.opened
  max-height: 50rem;

.closed
  @media (max-width: 1000px)
    max-height: 0;
</style>