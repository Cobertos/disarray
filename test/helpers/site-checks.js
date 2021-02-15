import { hostname, title, description } from '@/assets/scripts/config.js';

export function hasDefaultConfig() {
  return hostname.includes('localhost') ||
    title.includes('BASE TEMPLATE') ||
    description.includes('default description');
}