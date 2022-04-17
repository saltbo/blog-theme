<template>
  <div>
    <h1 class="page-title">{{ $frontmatter.title }}</h1>
    <div class="group">
      <div class="group-item" v-for="group, idx in this.$frontmatterKey.list" :key="idx">
        <h2 class="group-title">{{ group.name }}</h2>
        <div class="page-item" v-for="page, gidx in group.pages" :key="gidx">
          <router-link :to="page.path">{{ page.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
  },
  computed: {

  },
  mounted() {
    console.log(this)
  },
};
</script>

<style lang="stylus" scoped>
.group
  margin-top: 20px
</style>