<template>
   <div
    class="invite-search-controls">
    <input
      type="text"
      v-model="textSearch">
  </div>
</template>

<script>
import fuzzy from 'fuzzy';

export default {
  data() {
    return {
      textSearch: '',
      pages: 0,
      filteredInvites: []
    };
  },
  watch: {
    filteredInvites(value) {
      this.$emit('update:filtered', value);
    },
    async textSearch(value) {
      this.pages = 0; // textSearch changing will reset the current page in the pagination
      this.filteredInvites = await this.$api.search(value, this.pages);
    }
  },
  methods: {
    async showMore() {
      this.pages += 1;
      this.filteredInvites = [
        ...this.filteredInvites,
        ...await this.$api.search(this.textSearch, this.pages)
      ];
    }
  }
}
</script>

<style lang="scss">
.invite-search-controls {
  p {
    text-align: right;
  }
}
</style>