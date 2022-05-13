<template>
  <div>
    <div class="tabs is-small">
      <ul>
        <li class="is-active"><a>所有项目</a></li>
        <li><a>存储</a></li>
        <li><a>云原生</a></li>
      </ul>
    </div>
    <div class="wiki">
      <router-link class="card" v-for="article, idx in articles" :key="idx" :to="article.path">
        <div class="card-cover">
          <figure class="image">
            <img src="https://cdn.jsdelivr.net/gh/cdn-x/wiki@1.0.2/stellar/icon.svg" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="category">{{ article.frontmatter.category }}</div>
          <div class="title">{{ article.title }}</div>
          <p class="intro" v-html="article.excerpt"></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    archives() {
      console.log(this.$site)
      let posts = this.$site.pages.filter((item) => {
        if (item.frontmatter.draft) {
          return false
        }

        return item.id == this.$frontmatter.id &&
          (item.relativePath.endsWith('index.md') || item.relativePath.endsWith('README.md'));
      });

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

<style lang="stylus" scoped>
.tabs 
  position: sticky;
  top: 0;
  z-index: 999;
  background: $bgColor;

.wiki .card
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
  padding 10px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.02);
  .category
    font-weight: 500;
    font-size: .75rem;
  .title
    font-size 1.375rem;
    font-weight: 700;
    margin: 10px 0

.wiki .card:hover
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1),0 4px 16px 0 rgba(0,0,0,.1)
  
.card-cover
  display flex
  width: 200px;
  .image
    width: 84px
    margin: auto

.card-content
  min-width: 280px;
  flex: 1;
  overflow: hidden;
  word-wrap: break-word;

</style>