<template>
  <div>
    <mover-bg
      class="mover-bg"
      :class="{ bgHighlight: shouldHighlight }"
    />
    <section class="dc-hero">
      <div class="dc-hero-left">
        <h2>
          Disorganized
        </h2>
      </div>
      <div>
        <p class="subtitle">
          Find quality Discord servers and communities. Go out there and make some friends or something
        </p>
      </div>
      <div class="hero-body">
        
        
      </div>
    </section>
    <invite-search-controls />
    <section class="dc-results">
      <invite-card
        v-for="invite in json"
        v-if="invite.guild"
        :invite="invite"
        @click.native="shouldHighlight = !shouldHighlight"
      />
      <p v-else>Why is it missing the guild?</p>
    </section>
  </div>
</template>

<script>
import json from '@/../discord-crawler/invites100.json';
import MoverBg from '@/components/MoverBg.vue';
import InviteCard from '@/components/InviteCard.vue';
import InviteSearchControls from '@/components/InviteSearchControls.vue';
export default {
  components: { MoverBg, InviteCard, InviteSearchControls },
  data(){
    return {
      json,
      shouldHighlight: false
    };
  }
}
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

.dc-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 50px;
  text-align: center;
  height: 60vh;

  > * {
    flex: 0 0 50%;
  }
}

.dc-results {
  max-width: 800px;
  margin: 0 auto;
}


</style>