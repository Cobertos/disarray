# cobertos-nuxt-template

A nuxt template with all of my best practices in Nuxt, clean and clonable (well it's eventually supposed to be x3)

It reuses as much from `npx create-nuxt-app tmp-app` as possible. Prefering ESLint, AVA, and others

## Usage

Got a new project? Just clone this instead. Merge updates from here if you're rebased to this.

See the Features for all the things you can use

If you're deploying as a static site not on a static site host, make sure you:

* Create a default redirect for every non-found path to `200.html`
* Setup `Cache-Control` headers for the site such that
  * All HTML files use `no-store, max-age=0, must-revalidate`
  * All non-HTML files use `public, max-age=31536000, immutable`


## Features
* [Bulma](https://bulma.io/) as main SCSS framework, able to be configured modularly in [`global.scss`](assets/styles/global.scss) and overrides in [`_vars.scss`](assets/styles/_vars.scss)
* Mobile-first single breakpoint workflow (`mobile` and `desktop` mixins) with help of [`nuxt-mq`](https://github.com/vanhoofmaarten/nuxt-mq/) for javascript breakpoint testing
* [Font Awesome](https://github.com/FortAwesome/vue-fontawesome) as `<fa />`
  * Tree-shaking fix for bundle sizes
  * Optional pro repository support with `~.npmrc`, just remove the `~` after cloning and add your Font Awesome registry auth token to the environment variable `FONTAWESOME_NPM_AUTH_TOKEN`
* [Nuxt Sitemap](https://sitemap.nuxtjs.org/) for `sitemap.xml` by default
* AVA tests + `<test>` blocks that can be included with components, like [`VueTime.vue`](components/util/VueTime.vue)

## Nuxt best practices
* If you want to integrate something across the entire app, consider using [`inject()`](https://nuxtjs.org/docs/2.x/directory-structure/plugins/#inject-in-root--context) as it will get it into both Vue and Vuex (and other places)
* If you need to support multiple backend environments, use [`publicRuntimeConfig`](https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#runtimeconfig). It will allow Nuxt server and client to read all the keys and config values so SSR works properly. If you want to do environment _switching_ at runtime, you have to store all your configurations in the `publicRuntimeConfig` and then select them on the front _and_ backend (so dev/SSR works) using a custom plugin + something both can read like cookies.
* If you want to deploy an Express app or some other server along with Nuxt, use [`serverMiddleware`](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware/). Useful for dummy APIs

## TODO
* Update from Vue 2 to Vue 3
  * Requires Nuxt to update https://github.com/nuxt/nuxt.js/issues/5708
* Add a .sublime-project ignoring the .nuxt and other build directories from searching
* Responsive image stuff/svg loading stuff
* Setup a default error handler + best practices for integrating with Nuxt.js's `fetch()` and the other function
* Add warnings for when specific things have not been changed (like title, ~.npmrc not being removed, etc)
* Robots.txt, favicon if possible, 