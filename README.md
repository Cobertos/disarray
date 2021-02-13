# cobertos-nuxt-template

A nuxt template with all of my best practices in Nuxt, clean and clonable (well it's eventually supposed to be x3)

It reuses as much from `npx create-nuxt-app tmp-app` as possible. Prefering ESLint, AVA, and others

## Usage

Got a new project? Just clone this instead. Merge updates from here if you're rebased to this.

* If you use fontawesome pro, remove the '\~' from `~.npmrc` and add the environment variable `FONTAWESOME_NPM_AUTH_TOKEN`


## Features
* Mobile-first 1 breakpoint workflow with help of [`nuxt-mq`](https://github.com/vanhoofmaarten/nuxt-mq/)
* Pre-installed [Font Awesome](https://github.com/FortAwesome/vue-fontawesome) as `<fa />` along with tree-shaking fix for bundle size
* Google Analytics (TODO: Replace with something self-hosted)
* Nuxt Sitemap (TODO: Document)
* All .vue files can have a `<test>` block that gets compiled only for tests

## TODO
* Update from Vue 2 to Vue 3 (I think we have to wait for Nuxt to do this)
* Add a .sublime-project ignoring the .nuxt and other build directories from searching
* Add suggestions for setting up the external webserver (200.html redirect for any thing not found that isn't in the nuxt built folder, the cache-control settings based on Vercel)
* Responsive image stuff/svg loading stuff
* Setup a default error handler + best practices for integrating with Nuxt.js's `fetch()` and the other function
* Write a document on best practices regarding multiple API environments/endpoints
* Link to some of the useful nuxt features we like to use (like inject, mounting Express apps to the normal app, etc)
* Add warnings for when specific things have not been changed (like title, ~.npmrc not being removed, etc)