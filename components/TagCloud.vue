<template>
  <div id="main" ref="main" class="tagcloud">1111</div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = new Array()
      this.$site.pages.map(page => {
        if (!page.frontmatter.tags) {
          return
        }

        page.frontmatter.tags.map(tag => {
          tags.push(tag)
        })
      });
      return tags
    },
  },
  methods: {
    init() {

    }
  },
  mounted() {
    this.init()
    console.log(this.tags)
  }
};
</script>

<style lang="stylus" scoped>
#tagcloud 
  width: 100%;
  height: 100%;
  margin: 0;
  min-height: 100px !important
  
</style>