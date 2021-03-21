<template>
  <div class="invite-search">
    <section class="invite-search-controls">
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
      class="invite-search-info"
      v-if="filteredInvites"
    >
      <p>{{dbStats.guilds.toLocaleString()}} guilds indexed</p>
      <p>{{filteredInvites.length}} of ??? results</p>
      <!-- <p v-if="$asyncComputed.filteredInvites.updating">LOADING</p> -->
    </section>
    <section class="invite-results">
      <invite-card
        v-for="invite in filteredInvites"
        :invite="invite"
      />
    </section>
    <template
      v-if="textSearch !== ''"
    >
      <p
        v-if="filteredInvites.length === 0 && noMorePages"
        class="search-end-text"
      >
        No results. Maybe try using a prefix + wildcard (<code>*</code>) for your search?
      </p>
      <button
        v-else-if="filteredInvites.length > 0 && !noMorePages"
        class="show-more-button"
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
    </template>
  </div>
</template>

<script>
import debounce from 'debounce';
import InviteCard from '@/components/InviteCard.vue';
export default {
  components: { InviteCard },
  data(){
    return {
      filteredInvites: [],
      textSearch: '',
      pages: undefined,
      noMorePages: false,
      loading: false
    };
  },
  watch: {
    async textSearch() {
      await this.newTextSearch();
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
    async newTextSearch() {
      // Called when a new text search is started
      this.pages = undefined; // textSearch changing will reset the current page in the pagination
      this.noMorePages = false;
      this.filteredInvites = [];
      if (this.textSearch === '') {
        // Don't search, it requires a query param or it aborts
        this.noMorePages = true;
        return;
      }

      // Debounced fetch the first page of the search, when the search typing settles
      // down. But we still do the above to invalidate the old search and clear
      // its results
      this.$options.dFetchNewPage();
    },
    async showMore() {
      this.fetchNextPage();
    }
  },
  created() {
    this.$options.dFetchNewPage = debounce(this.fetchNextPage.bind(this), 100);
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_utils.scss";

.invite-search {
  .invite-search-info {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin-top: 10px;
  }

  .show-more-button {
    display: block;
    margin: 0 auto;
  }

  .search-end-text {
    text-align: center;
  }
}

</style>