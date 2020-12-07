<template>
  <div>
    <nuxt />
    <div class='social-links'>
      <a href="https://twitter.com/cobertos" target="_blank">@cobertos</a>
      <a href="https://cobertos.com" target="_blank">cob</a>
      <a href="https://patreon.com/cobertos" target="_blank">ptr</a>
    </div>
  </div>
</template>

<script>
import { hostname } from 'assets/scripts/config.js';
export default {
  head() {
    //To conform with AWS S3 redirects, there should _always_ have a
    //trailing slash. This is setup in nuxt.config.js in router
    const path = this.$route.path === '/' ? '' : this.$route.path;
    return {
      link: [
        { hid: 'canonical', rel: 'canonical', href: `${hostname}${path}` }
      ]
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_func.scss';
@import '@/assets/styles/global.scss';

.social-links {
  position: absolute;
  bottom: cRems(10px);
  left: cRems(10px);

  > * {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: cRems(50px);
    background-color: #222;
    z-index: 2;

    border-radius: 9999px;
    padding: cRems(10px) cRems(20px);
    color: #FFF;
    text-decoration: none;
    margin-left: cRems(20px);


    &:before {
      display: block;
      content: '';
      background-image: linear-gradient(#F00, #FF0);
      background-origin: border-box;
      border: cRems(2px) solid transparent;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 9999px;
      z-index: -2;
    }
    &:after {
      display: block;
      content: '';
      background-color: #222;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 9999px;
      z-index: -1;
    }

    &:hover:after {
      background-color: lighten(#222, 20%);
    }
  }
}
</style>
