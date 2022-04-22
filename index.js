const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')
const moment = require('moment')
const fs = require('fs')
const os = require('os')

module.exports = themeConfig => {
  /**
   * Default theme configuration
   */
  themeConfig = Object.assign(themeConfig, {
    nav: themeConfig.nav || [],
  })
  try {
    const data = fs.readFileSync('./.vuepress/links.json', 'utf8')
    console.log(data)
    themeConfig.links = JSON.parse(data)
  } catch (err) {
    console.error(err)
  }

  /**
   * Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: 'posts',
        path: '/',
        layout: 'Posts',
        itemPermalink: '/:regular',
        frontmatter: { title: '首页' },
      },
    ],
    frontmatters: [
      {
        id: "categorie",
        keys: ['categorie', 'categories'],
        path: '/categories/',
        layout: 'Categories',
        frontmatter: { title: '文章' },
      },
    ],
    globalPagination: {
      lengthPerPage: 10,
    },
  }

  const properties = [
    'directories',
    'frontmatters',
    'globalPagination',
    'sitemap',
    'comment',
    // 'newsletter',
    'feed',
  ]
  const themeConfigPluginOptions = {
    ...pick(themeConfig, properties),
  }

  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigPluginOptions
  )

  return {
    // extend: '@vuepress/theme-default',  // Theme Inheritance => https://vuepress.vuejs.org/theme/inheritance.html
    additionalPages: [
      // {
      //   path: '/notes/',
      //   frontmatter: {
      //     layout: 'Notes'
      //   }
      // }
    ],
    plugins: [
      // official plugins
      ['@vuepress/blog', blogPluginOptions],
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }],
      ['@vuepress/google-analytics', { 'ga': themeConfig.googleAnalytics }],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
      ['@vuepress/medium-zoom'],
      ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format('Y-M-D H:m:s')
        }
      }],

      // community plugins
      ['reading-time'],
      ['disqusjs', themeConfig.disqusjs],
      [require('./plugins/vuepress-plugin-sign')],
      [require('./plugins/vuepress-plugin-repos'), { repos: themeConfig.repos }],
    ],
  }
}
