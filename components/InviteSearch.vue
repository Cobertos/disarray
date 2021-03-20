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
      v-if="filteredInvites.length > 0 && !noMorePages"
      :class="{ 'is-loading': loading }"
      @click="showMore"
    >
      Show More
    </button>
    <p
      v-else-if="noMorePages"
      class="search-end-text"
    >
      That's it, you've reached the end of this search. <strong>{{filteredInvites.length}}</strong> results uwu!
    </p>
  </div>
</template>

<script>
import InviteCard from '@/components/InviteCard.vue';
export default {
  components: { InviteCard },
  data(){
    return {
      textSearch: '',
      pages: undefined,
      noMorePages: false,
      filteredInvites: [],
      pulsed: false
    };
  },
  watch: {
    async textSearch(value) {
      this.pages = undefined; // textSearch changing will reset the current page in the pagination
      this.noMorePages = false;
      this.filteredInvites = [];
      if (value === '') {
        // Don't search, it requires a query param or it aborts
        this.noMorePages = true;
        return;
      }

      this.fetchNextPage();
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
    async fetchNextPage() {
      if (this.noMorePages) {
        return;
      }
      if (this.pages === undefined) {
        this.pages = 0;
      }
      else {
        this.pages += 1;
      }

      this.loading = true;
      const newInvites = await this.$api.search(this.textSearch, this.pages);
      this.filteredInvites = [
        ...this.filteredInvites,
        ...newInvites
      ];
      this.loading = false;
      if (newInvites.length < 25) { // The normal return amount
        this.noMorePages = true;
      }
    },
    async showMore() {
      this.fetchNextPage();
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

.search-end-text {
  text-align: center;
}


</style>