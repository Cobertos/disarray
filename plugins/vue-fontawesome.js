import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter, faRedditAlien, faUnity, faPython, faJs, faVuejs,
  faItchIo, faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false; //Handle this in Nuxt's config

library.add(
  faExclamationTriangle);

Vue.component('fa', FontAwesomeIcon);
