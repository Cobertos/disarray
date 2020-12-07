<template>
  <img
    v-if="isResponsiveLoader"
    :src="image.placeholder"
    :srcset="image.srcSet"
    :width="image.width"
    :height="image.height"
    loading
  >
  <img
    v-else
    :src="image"
  >
</template>

<script>
/**img that can take a url or a responsive-loader image
 * object.
 */
export default {
  props: {
    //Takes a responsive-loader object
    //or a string url
    image: [Object, String]
  },
  computed: {
    //Was the image loaded with responsive-loader
    isResponsiveLoader() {
      return typeof (this.image) !== 'string';
    }
  }
};
</script>
