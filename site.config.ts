import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '46fa16f466e14bb685d84bc76a1cbf5d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '6fa491fc2fa74bc19d4391df4a286a1a',

  // basic site info (required)
  name: 'Linley',
  domain: 'www.lzxblog.top',
  author: 'Linley',

  // open graph metadata (optional)
  description: 'Personal site of Travis Fischer aka Transitive Bullshit',

  // social usernames (optional)
  github: 'Zab-Linley',
  linkedin: '智鑫-林-470a38221',
  zhihu: 'zhixinlin',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://transitivebullsh.it/page-icon.png',
  defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    // '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    // '/bar': '0be6efce9daf42688f65c76b89f8eb27'
    '/notes': '9830f61322cf431d8bd3a68552c13a9c',
    '/covid-19':'3bdc8aef8fc64fdfb287dd80e420b723',
    '/contact': 'c6cff7c85bb34b04a47c6006f7293fd7'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '46fa16f466e14bb685d84bc76a1cbf5d'
    },
    {
      title: 'Notes',
      pageId: '9830f61322cf431d8bd3a68552c13a9c'
    },
    {
      title: 'Covid-19',
      pageId: '3bdc8aef8fc64fdfb287dd80e420b723'
    },
    {
      title: 'Contact',
      pageId: 'c6cff7c85bb34b04a47c6006f7293fd7'
    }
  ]
})
