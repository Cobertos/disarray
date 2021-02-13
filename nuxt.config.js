import path from 'path';
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { mobileBreakPoint } from './assets/scripts/utils.js';
import { hostname, title, description } from './assets/scripts/config.js';

export default {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },

      { hid: 'description', name: 'description', content: description },

      //== Favicon (realfavicongenerator.net) ==
      { name: 'msapplication-TileColor', content: '#603cba' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }, //Prefetch for fonts (and not preconnect because it's a static resource and will be cached)
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Trade+Winds|Cutive+Mono|PT+Sans:400,700&display=swap' },

      //== Favicon (realfavicongenerator.net) ==
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1f1b2b' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-fontawesome.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-63051093-1'
    // }]
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module' //Im tired of dealing with all the false postives constantly
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-mq', {
      // Default breakpoint for SSR
      defaultBreakpoint: 'default',
      breakpoints: {
        micro: mobileBreakPoint,
        macro: Infinity
      }
    }],
    '@nuxtjs/sitemap' //Needs to always go at the end
  ],

  //Sitemap, @nuxtjs/sitemap: https://www.npmjs.com/package/@nuxtjs/sitemap
  sitemap: {
    //Takae a look at https://www.sitemaps.org/protocol.html before configuring
    hostname
    //The old one only included loc and last-mod for all my posts
    //TODO: Make this ignore JS files in pages (or move those to another folder)
  },

  /*
  ** Build configuration
  */
  build: {
    //analyze: true isn't working
    /*plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        //openAnalyzer: false,
        logLevel: 'info'
      })
    ],*/

    babel: {
      //NOTE: I tried retargetting the build from IE9+ to IE11+ via browserlists
      //and it did not help the bundle size (March 2020)

      plugins: [
        //Fix font awesome not tree shaking (~1.32MB)
        //https://github.com/FortAwesome/react-fontawesome/issues/70#issuecomment-411165298
        ['transform-imports', {
          '@fortawesome/free-solid-svg-icons': {
            // eslint-disable-next-line no-template-curly-in-string
            transform: '@fortawesome/free-solid-svg-icons/${member}',
            skipDefaultConversion: true
          },
          '@fortawesome/free-brands-svg-icons': {
            // eslint-disable-next-line no-template-curly-in-string
            transform: '@fortawesome/free-brands-svg-icons/${member}',
            skipDefaultConversion: true
          },
          '@fortawesome/free-regular-svg-icons': {
            // eslint-disable-next-line no-template-curly-in-string
            transform: '@fortawesome/free-regular-svg-icons/${member}',
            skipDefaultConversion: true
          }
        }]
      ]
    },

    //Experimental build speedup options
    //(these speed it up quite a bit, I'm getting like 5sec vs 1min builds)
    //https://nuxtjs.org/api/configuration-build#parallel
    parallel: true,
    //https://nuxtjs.org/api/configuration-build#cache
    cache: true,
    //https://nuxtjs.org/api/configuration-build#hardsource
    //If you get weird caching errors, delete node_modules/.cache
    //or disable this...
    //hardSource: true,

    extend(config) {
      config.module.rules.push({
        resourceQuery: /blockType=test/,
        // TODO: Doesn't work with null-loader. I'm pretty sure that Vue does
        // a string search for null-loader in the stack and treats it differently
        // from looking at the GitHub issues
        loader: require.resolve('./vue-loader-null-loader')
      });
    }
  },
  // router: {
  //   //middleware: 'redirect',
  //   //Force must use trailing / to be consistent with Amazon AWS S3
  //   //Requests without the trailing slash (except on the root) will fail
  //   //which is what we want
  //   //trailingSlash: true
  // },
  // == Server ==
  server: {
    port: 8897,
    host: '0.0.0.0'
  }
};
