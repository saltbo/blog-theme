<template>
    <div class="books">
        <Card v-for="book in books" :key="book.key">
            <router-link :to="book.path">
                <div class="book">
                    <h2>{{ book.title }}</h2>
                    <p>{{ book.frontmatter.author }}</p>
                </div>
            </router-link>
        </Card>   </div>
</template>

<script>
export default {
    computed: {
        books() {
            let books = this.$pagination.pages
            this.sortPostsByDate(books);
            return books;
        },
    },
    mounted() {
        console.log(this)
        console.log(this.$pagination.pages)
    }
}
</script>

<style lang="stylus" scoped>
.books
    @apply flex flex-row
    .card 
        width: 160px
        height: 220px
        margin: 0 10px

.book
    height: 100%
</style>