<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title"> Table of Contents </p>
    </header>

    <div class="card-content toc" v-bind="$attrs">
      <div v-for="(item, index) in $page.headers" :key="index" class="toc-item" ref="chairTocItem"
        v-bind:class="{ active: activeIndex === index }">
        <a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
let initTop

// get offset top
function getAbsoluteTop(dom) {
  return dom && dom.getBoundingClientRect
    ? dom.getBoundingClientRect().top +
    document.body.scrollTop +
    document.documentElement.scrollTop
    : 0
}
export default {
  data() {
    return {
      activeIndex: 0,
    }
  },
  watch: {
    activeIndex() { },
    $route() { },
  },
  methods: {
    onScroll() {
      if (initTop === undefined) {
        initTop = getAbsoluteTop(this.$el)
      }

      // update position
      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop
      const headings = this.$page.headers || []

      // change active toc with scrolling
      let i = 0
      const addLink = index => {
        this.activeIndex = index
      }

      for (; i < headings.length; i++) {
        const dom = document.getElementById(headings[i].slug)
        const top = getAbsoluteTop(dom)
        if (top - 50 < scrollTop) {
          addLink(i)
        } else {
          if (!i) addLink(i)
          break
        }
      }
    },

    triggerEvt() {
      this._onScroll()
      this._onHashChange()
    },
  },
  mounted() {
    // binding event
    setTimeout(() => this.triggerEvt(), 1000)

    this._onScroll = () => this.onScroll()
    this._onHashChange = () => {
      const hash = decodeURIComponent(location.hash.substring(1))
      const index = (this.$page.headers || []).findIndex(h => h.slug === hash)
      if (index >= 0) this.activeIndex = index
      const dom = hash && document.getElementById(hash)
      if (dom) window.scrollTo(0, getAbsoluteTop(dom) - 20)
    }
    window.addEventListener('scroll', this._onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this._onScroll)
    window.removeEventListener('hashchange', this._onHashChange)
  },
}

</script>

<style lang="stylus" scoped>

.toc
  padding 10px 20px
  .toc-item
    a
      font-size 14px
      font-weight: 300
      color: $grey
    a:hover,
    a:active
      color: $accentColor;
    
    &.active
      border-left-color $accentColor
      a
        color $accentColor
        font-weight: 400
</style>