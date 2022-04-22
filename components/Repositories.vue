<template>

    <div class="card">
        <header class="card-header">
            <p class="card-header-title"> saltbo's repos on GitHub </p>
        </header>

        <div class="repo-list">
            <div class="repo" v-for="repo, idx in repos" :key="idx">
                <a class="name">{{ repo.full_name }}</a>
                <div class="intro">{{ repo.description }}</div>
                <div class="info">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fas fa-circle" :style="'color:' + getRepoColor(repo.language)"></i>
                        </span>
                        <span>{{ repo.language }}</span>
                    </span>
                    <span class="icon-text">
                        <span class="icon">
                            <i class="far fa-star"></i>
                        </span>
                        <span>{{ repo.stargazers_count }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            repos: [],
            repoLanguageColors: []
        }
    },
    methods: {
        getRepoColor(language) {
            if (!language) {
                return
            }

            return this.repoLanguageColors[language].color
        },
        loadLanguageColors() {
            axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json').then(response => {
                this.repoLanguageColors = response.data
            })
        },
        listRepos() {
            axios.get('/gh-repos-snapshot.json').then(response => {
                this.repos = response.data
            })
        },
    },
    mounted() {
        this.repoNames = this.$themeConfig.repos
        this.loadLanguageColors()
        this.listRepos()
    }
}
</script>

<style lang="stylus" scoped>
.repo
    font-size: 12px
    line-height: 150%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
    padding 10px 18px
    .name 
        font-weight: 600
        text-decoration: none
        color: #000
    .intro
        color: #57606a
    .info
        margin-top: 5px
        display flex
        .icon
            margin: 0
        .icon-text
            margin-right: 8px
</style>>