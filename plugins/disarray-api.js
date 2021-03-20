import { DisarrayAPI } from '@/assets/scripts/api.js';

export default (context, inject) => {
  const api = new DisarrayAPI();
  inject('api', api); // injects to $api
};
