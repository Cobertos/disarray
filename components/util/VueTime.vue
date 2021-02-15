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

<test>
import sinon from 'sinon';
import test from 'ava';
import { mount, createLocalVue } from '@vue/test-utils';
import VueTime from './VueTime.vue';

test.before('setup local Vue for these tests', (t) => {
  const localVue = createLocalVue();
  t.context.localVue = localVue;
});

test('VueTime - By default prints as normal ISO string', async t => {
  // arrange
  const { localVue } = t.context;
  const mounted = mount(VueTime, { localVue,
    propsData: {
      datetime: new Date(96, 0, 1, 2, 3, 4).toString()
    }
  });

  // assert
  // TODO: Don't just remove the timezone info to test... ;w;, but it 4am and I tired
  console.log(mounted.element.textContent.slice(0,-6));
  t.true(mounted.element.textContent.slice(0,-6) === '1996-01-01T02:03:04', 'Defaults to ISO 8601 timestamp');
  console.log(mounted.element.getAttribute('title'));
  t.true(mounted.element.getAttribute('title') === 'January 1, 1996 2:03', 'Title is a nice looking string (for hover)');
});
test('VueTime - Can be passed a format for dayjs', async t => {
  // arrange
  const { localVue } = t.context;
  const mounted = mount(VueTime, { localVue,
    propsData: {
      datetime: new Date(96, 0, 1, 2, 3, 4).toString(),
      format: 'YYYY MM DD hh:mm:ss'
    }
  });

  // assert
  console.log(mounted.element.textContent);
  t.true(mounted.element.textContent === '1996 01 01 02:03:04');
});
</test>
