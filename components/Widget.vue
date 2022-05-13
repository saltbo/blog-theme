<template>
    <div class="widget">
        <div class="widget-header">
            欢迎，旅行者：
        </div>
        <div class="widget-body">
            这是一个世界边缘的佛系小站，建于21世纪初，长期维护并保持低频更新。
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.widget
    margin: 1rem 0 3rem 0;
.widget-body
    font-size: .875rem;
.widget-header
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    padding-top: 2px;
    z-index: 1;
    line-height: 2;
    color: #b3b3b3;
    font-size: .875rem;
</style>