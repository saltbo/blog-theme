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
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css' }],
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css' }],
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/github-markdown-css@5.1.0/github-markdown-light.css' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ],
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
