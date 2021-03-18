<template>
  <div>
    <mover-bg
      class="mover-bg"
      :class="{ bgHighlight: shouldHighlight, bgModulate: pulsed }"
    />
    <section class="dc-hero">
      <div class="dc-hero-left">
        <h2
          class="dc-hero-title"
        >
          Disorganized
        </h2>
      </div>
      <div>
        <p class="dc-hero-description">
          Search engine for quality Discord servers and communities.
          <br><br>
          Disorganized scours the web for public Discord servers and brings them all here. Our algorithm finds more niche communities than you might find on other sites.
          <br><br><br>
          Have a question? Join our <a href="https://discord.gg/E5b5y8ue" target="_blank">Discord server</a>.

          <!--TODO: Add a modal with more content: Similar to Google, Disorganized uses a web crawler to find links around the Internet. This means we aren't restricted to admins actively uploading their servers into our database. There are downsides to this approach though. * Can't section by region of world, * Can't filter by active servers-->
        </p>
      </div>
    </section>
    <section class="dc-search-controls">
      <invite-search-controls
        :invites="json"
        @update:filtered="filteredInvites = $event"
        @input.native="pulsed = !pulsed"
      />
    </section>
    <section class="dc-results">
      <invite-card
        v-for="invite in filteredInvites"
        :invite="invite"
        @click.native="shouldHighlight = !shouldHighlight"
      />
    </section>
  </div>
</template>

<script>
import json from '@/data/invites.json';
import MoverBg from '@/components/MoverBg.vue';
import InviteCard from '@/components/InviteCard.vue';
import InviteSearchControls from '@/components/InviteSearchControls.vue';
export default {
  components: { MoverBg, InviteCard, InviteSearchControls },
  data(){
    return {
      json,
      shouldHighlight: false,
      filteredInvites: json,
      pulsed: false
    };
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_utils.scss";

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
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
  text-align: center;
  height: 40vh;

  margin: 0 10px;

  @include desktop {
    flex-direction: row;
    height: 60vh;
    margin: 0 auto;
    padding: 0 50px;
    justify-content: space-between;

  }

  > * {
    flex: 0 0 20%;

    @include desktop {
      flex: 0 0 50%;
    }
  }

  .dc-hero-title {
    text-align: center;
    font-family: $do-hyeon;
    font-size: 100px;
    color: #FFF;
    text-shadow: #ccc 0 1px 0, #c9c9c9 0 2px 0, #bbb 0 3px 0, #b9b9b9 0 4px 0, #aaa 0 5px 0,rgba(0,0,0,.1) 0 6px 1px, rgba(0,0,0,.1) 0 0 5px, rgba(0,0,0,.3) 0 1px 3px, rgba(0,0,0,.15) 0 3px 5px, rgba(0,0,0,.2) 0 5px 10px, rgba(0,0,0,.2) 0 10px 10px, rgba(0,0,0,.1) 0 20px 20px;
    transform: rotate(-5deg);
  }

  .dc-hero-description {
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
  }
}

.dc-search-controls {
  max-width: 760px;
  margin: 0 10px;

  @include desktop {
    margin: 0 auto;
  }
}

.dc-results {
  max-width: 760px;
  margin: 0 10px;

  @include desktop {
    margin: 0 auto;
  }
}


</style>