import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
//import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false; //TODO: Handle this in Nuxt's config

library.add(
  faDiscord, faGithub,
  faUsers, faCircle);

Vue.component('fa', FontAwesomeIcon);
