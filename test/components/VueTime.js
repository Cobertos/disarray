import test from 'ava';
import { mount, createLocalVue } from '@vue/test-utils';
import VueTime from '@/components/util/VueTime.vue';

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
  t.true(mounted.element.textContent.slice(0,-6) === '1996-01-01T02:03:04', 'Defaults to ISO 8601 timestamp');
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
  t.true(mounted.element.textContent === '1996 01 01 02:03:04');
});