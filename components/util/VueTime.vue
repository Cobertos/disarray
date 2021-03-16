<template>
  <time
    :datetime="timestampFormat()"
    :title="timestampFormat('MMMM D, YYYY h:mm')"
    v-text="timestampFormat(format)"
  />
</template>

<script>
import dayjs from 'dayjs';
/**Wrapper around HTML5 time element for passing in dayjs readable objects
 */
export default {
  name: 'vue-time',
  props: {
    datetime: [Number, String],
    format: String
  },
  methods: {
    timestampFormat(format) {
      return dayjs(this.datetime).format(format);
    }
  }
};
</script>
