<template>
   <div
    class="invite-search-controls">
    <input
      type="text"
      v-model="textSearch">
    <div
      class="invite-search-info"
    >
      <p>534 servers indexed</p>
      <p>{{filteredInvites.length}} of {{invites.length}} results</p>
    </div>
  </div>
</template>

<script>
import fuzzy from 'fuzzy';

export default {
  props: {
    invites: Array
  },
  data() {
    return {
      textSearch: ''
    };
  },
  watch: {
    filteredInvites(value) {
      this.$emit('update:filtered', value);
    }
  },
  computed: {
    filteredInvites() {
      if (!this.invites) {
        return [];
      }

      // if (this.) {

      // }
      // let filtered = tldData;
      // if(!this.showBrandTLDs) {
      //   filtered = filtered
      //     .filter(o => !o.isBrand);
      // }
      // if(this.showOnlyAvailable) {
      //   filtered = filtered
      //     .filter(o => o.isInGeneralAvailability || o.isInGeneralAvailability === undefined);
      // }
      // else {
      //   filtered = filtered
      //     .filter(o => !o.isInGeneralAvailability);
      // }
      // filtered = filtered
      //   .filter(o => this.showType[o.type]);
      // const filteredStrs = filtered
      //   .map(o => o.tld);
      const invites = this.invites.filter(i => !!i.guild);
      if(this.textSearch !== '') {
        // Run fuzzy filters on each text field we're curious about
        //invites.guild.name, invites.channel.name, invites.description

        // TODO: This is sorta hacky rn
        return fuzzy.filter(this.textSearch, invites, {
          pre: '<b>',
          post: '</b>',
          extract(i){ return i.guild.name + i.channel.name + i.guild.description }
        })
        .map((o) => {
          const ret = o.original;
          ret.matchStr = o.string;
          return ret;
        });
      }
      else {
        return this.invites;
      }
    },
  }
}
</script>

<style lang="scss">
.invite-search-controls {
  p {
    text-align: right;
  }
}
.invite-search-info {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 10px;
}
</style>