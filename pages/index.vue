<template>
  <div>
    <h1>Template test site</h1>
    <nuxt-link to="style-test">Style test</nuxt-link>
    <h2>Template features</h2>
    <ul>
      <li>Global SCSS styles</li>
      <li>Utility components</li>
      <ul>
        <li>&lt;loader&gt; <loader /></li>
        <li>&lt;vue-time&gt; <vue-time /></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import Loader from '@/components/util/Loader.vue';
import VueTime from '@/components/util/VueTime.vue';
export default {
  components: { Loader, VueTime }
}
</script>

<style lang="scss">

</style>