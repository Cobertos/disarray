import test from 'ava';
import { hasDefaultConfig } from './helpers/site-checks.js';

test('site-checks - Default config by default', t => {
  t.true(hasDefaultConfig());
});