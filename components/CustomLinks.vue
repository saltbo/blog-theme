<template>

    <div class="card">
        <header class="card-header">
            <p class="card-header-title"> {{ title }} </p>
        </header>

        <div class="links">
            <div class="link-item columns" v-for="link, idx in links" :key="idx">
                <span class="icon column is-3">
                    <i :class="link.iconClass"></i>
                </span>
                <a class="link-title column" :href="link.url" target="_blank">{{ link.title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        links: Array
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="stylus" scoped>
.links
    // font-size: 12px
    // line-height: 150%;
    // text-align: left;
    // padding 10px 18px

    .link-item
        margin: 0
        padding 0 10px
        height: 80px
        border-bottom: 1px solid #e2e2e2;       
    .icon
        font-size: 40px
    a
        color: #000
        margin: auto;

    // .name 
    //     font-weight: 600
    //     text-decoration: none
    //     color: #000
    // .intro
    //     color: #57606a
    // .info
    //     margin-top: 5px
    //     display flex
    //     .icon
    //         margin: 0
    //     .icon-text
    //         margin-right: 8px
</style>>