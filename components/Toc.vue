<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title"> Table of Contents </p>
    </header>

    <div class="card-content toc" v-bind="$attrs">
      <div v-for="(item, index) in $page.headers" :key="index" class="toc-item">
        <a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>

.toc
  padding 10px 20px
  .toc-item
    a
      font-size 14px
      color: #bababa
    a:hover,
    a:active
      color: #4183c4;
</style>