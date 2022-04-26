<template>
  <div class="columns is-multiline is-mobile">
    <div class="column" v-for="link in links" :key="link.name">
      <div class="link-item" :style="`background-color: ${link.bgColor}; `">
        <a class="someone" :href="link.link" target="_blank" rel="noopener" :style="`color: ${link.textColor}`">
          <img class="avatar" :src="link.avatar" alt />
          <div class="info">
            <b class="name">{{ link.name }}</b>
            <div class="intro">{{ link.intro }}</div>
          </div>
        </a>
      </div>
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

@media (min-width: $MQMobile)
  .column
    flex-grow: 0;

.link-item
  margin: 0;
  padding 0
  font-size 12px;
  border-radius: 3px
  
  .someone 
    display:flex;align-items:center;
    width: 225px
    height: 70px

  .avatar 
    width: 55px
    height: 55px
    vertical-align: middle;
    margin-left: 5px
    border-radius: 50%

  .info 
    width: 150px;
    margin-left: 10px
    .name
      font-size: 14px
      font-weight: bold
    .intro
      overflow: hidden; 
      white-space: nowrap; 
      text-overflow: ellipsis;

</style>