# cobertos-nuxt-template

A nuxt template with all of my best practices in Nuxt, clean and clonable (well it's eventually supposed to be x3)

## Features
* Mobile-first 1 breakpoint workflow with help of [`nuxt-mq`](https://github.com/vanhoofmaarten/nuxt-mq/)
* Pre-installed [Font Awesome](https://github.com/FortAwesome/vue-fontawesome) as `<font-awesome-icon />` along with tree-shaking fix for bundle size
* Google Analytics (TODO: Replace with something self-hosted)
* Nuxt Sitemap (TODO: Document)

## TODO
* Update from Vue 2 to Vue 3
* Update to latest Nuxt template
* Incorporate optional support for FontAwesome pro
* Add ava testing (maybe run the nuxt loader again, cause normally ava testing is a pain to setup from scratch, gotta webpack your files, and use `webpack-node-externals`)
* Link to some of the useful nuxt features we like to use (like inject, mounting Express apps to the normal app, etc)
* Add a .sublime-project ignoring the .nuxt and other build directories from searching
* Add suggestions for setting up the external webserver (200.html redirect for any thing not found that isn't in the nuxt built folder, the cache-control settings based on Vercel)
* Responsive image stuff/svg loading stuff
* Re-add dayjs to the package.json