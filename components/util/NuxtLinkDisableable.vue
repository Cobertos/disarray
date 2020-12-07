<template>
  <nuxt-link
    v-if="!disabled"
    :to="to"
  >
    <slot></slot>
  </nuxt-link>
  <a
    v-else
    class="{ disabled }"
    href="javascript:void(0);"
  >
    <slot></slot>
  </a>
</template>

<script>
/**
 * A pretty garbage wrapper around <nuxt-link> to allow it to be disabled when
 * styled as a button. The new version of nuxt should support this, TODO check
 * it out
 */
export default {
  props: {
    disabled: null,
    to: null
  }
};
</script>