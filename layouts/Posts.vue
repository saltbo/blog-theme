<template>
  <div class="group">
    <div class="group-item" v-for="article, idx in articles" :key="idx">
      <h2 class="group-title" v-if="!article.id">{{ article.title }}</h2>
      <div class="page-item" v-else>
        <span>{{ article.frontmatter.date | moment('MM-DD') }}</span>
        <router-link :to="article.path">{{ article.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    archives() {
      let posts = this.$site.pages.filter((item) => {
        if (item.frontmatter.draft) {
          return false
        }

        return item.id == "post";
      });
      this.sortPostsByDate(posts);

      // insert the year item into the posts array.
      let lastYear;
      for (let i = 0; i < posts.length; i++) {
        let year = posts[i].frontmatter.date.moment("YYYY");
        if (year != lastYear) {
          posts.splice(i, 0, { title: year });
        }

        lastYear = year;
      }

      return posts;
    }
  },
  computed: {
    articles() {
      if (this.$frontmatterKey) {
        console.log(this.$frontmatterKey.list)
        return
      }

      return this.archives()
    },
  },
  mounted() {
    console.log(this)
  },
};
</script>

<style lang="stylus" scoped></style>