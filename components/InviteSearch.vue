<template>
  <div>
    <section class="dc-search-controls">
      <invite-search-controls
        ref="searchControls"
        @update:filtered="filteredInvites = $event"
        @input.native="pulsed = !pulsed"
      />
    </section>
    <section
      class="dc-search-info"
      v-if="filteredInvites"
    >
      <p>{{dbStats.guilds.toLocaleString()}} guilds indexed</p>
      <p>{{filteredInvites.length}} of ??? results</p>
      <!-- <p v-if="$asyncComputed.filteredInvites.updating">LOADING</p> -->
    </section>
    <section class="dc-results">
      <invite-card
        v-for="invite in filteredInvites"
        :invite="invite"
        @click.native="shouldHighlight = !shouldHighlight"
      />
    </section>
    <button
      @click="showMore"
    >
      Show More
    </button>
  </div>
</template>

<script>
import InviteCard from '@/components/InviteCard.vue';
import InviteSearchControls from '@/components/InviteSearchControls.vue';
export default {
  components: { InviteCard, InviteSearchControls },
  data(){
    return {
      shouldHighlight: false,
      filteredInvites: [],
      pulsed: false
    };
  },
  asyncComputed: {
    dbStats: {
      async get() {
        return await this.$api.stats();
      },
      default: { 'guilds': 0, 'codes': 0 }
    }
  },
  methods: {
    showMore() {
      this.$refs.searchControls.showMore();
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_utils.scss";

.dc-search-controls {
  margin: 0 10px;

  @include desktop {
    margin: 0 auto;
  }
}

.dc-search-info {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 10px 10px 0;

  @include desktop {
    margin: 10px auto 0;
  }
}

.dc-results {
  margin: 0 10px;

  @include desktop {
    margin: 0 auto;
  }
}


</style>