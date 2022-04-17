<template>
  <div class="columns is-multiline links">
    <div class="column is-one-quarter link-item" :style="`background-color: ${link.bgColor}; `"
      v-for="link in links" :key="link.name">

      <a class="columns" :href="link.link" target="_blank" rel="noopener" :style="`color: ${link.textColor}`">
        <div class="column is-3 avatar">
          <img :src="link.avatar" alt />
        </div>
        <div class="column info">
          <h3 class="name">{{ link.name }}</h3>
          <div class="intro">{{ link.intro }}</div>
        </div>
      </a>
      <i></i>
    </div>
  </div>
</template>

<script>
// import PageEdit from "@parent-theme/components/PageEdit.vue";
export default {
  components: {
    // PageEdit,
  },
  computed: {
    links() {
      return this.$themeConfig.links
    }
  },
  mounted() {
    console.log(this.$themeConfig.links, 11)
  }
};
</script>

<style lang="stylus" scoped>
.links
  margin: 0;

.link-item
  width: 260px
  margin: 5px;
  padding 0
  border-radius: 3px
  
  a 
    margin: 0
    padding 0

  .avatar 
    padding 5px
    img
      width: 82px
      vertical-align: middle;
      border-radius: 50%
</style>