<template>
  <div>
    <mover-bg
      class="mover-bg"
      :class="{ bgHighlight: shouldHighlight }"
    />
    <h1>Template test site</h1>
    <nuxt-link to="style-test">Style test</nuxt-link>
    <h2>Template features</h2>
    <invite-card
      v-for="invite in json"
      v-if="invite.guild"
      :invite="invite"
      @click.native="shouldHighlight = !shouldHighlight"
    />
    <p v-else>Why is it missing the guild?</p>
  </div>
</template>

<script>
import json from '@/../discord-crawler/invites100.json';
import MoverBg from '@/components/MoverBg.vue';
import InviteCard from '@/components/InviteCard.vue';
export default {
  components: { MoverBg, InviteCard },
  data(){
    return {
      json,
      shouldHighlight: false
    };
  }
}
//
</script>

<style lang="scss">
.mover-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}


</style>