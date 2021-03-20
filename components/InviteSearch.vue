<template>
  <div>
    <section class="dc-search-controls">
      <invite-search-controls
        ref="searchControls"
        @input.native="pulsed = !pulsed"
      />
      <div class="control"
        :class="{ 'is-loading': loading }">
        <input
          class="input"
          type="text"
          v-model.trim="textSearch"
          placeholder="uwu, this is the search...">
      </div>
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
      />
    </section>
    <button
      v-if="filteredInvites.length > 0"
      @click="showMore"
    >
      Show More
    </button>
  </div>
</template>

<script>
import InviteCard from '@/components/InviteCard.vue';
export default {
  components: { InviteCard },
  data(){
    return {
      textSearch: '',
      pages: 0,
      filteredInvites: [],
      pulsed: false
    };
  },
  watch: {
    async textSearch(value) {
      this.pages = 0; // textSearch changing will reset the current page in the pagination
      if (value === '') {
        // Don't search, it requires a query param or it aborts
        this.filteredInvites = [];
        return;
      }

      this.loading = true;
      this.filteredInvites = await this.$api.search(value, this.pages);
      this.loading = false;
    }
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
    async showMore() {
      this.pages += 1;
      this.loading = true;
      this.filteredInvites = [
        ...this.filteredInvites,
        ...await this.$api.search(this.textSearch, this.pages)
      ];
      this.loading = false;
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