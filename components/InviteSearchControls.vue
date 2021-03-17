<template>
   <div
    class="invite-search-controls">
    <input
      type="text"
      v-model="textSearch">
    <p>X of Y results</p>
  </div>
</template>

<script>
//import fuzzy from 'fuzzy';

export default {
  data() {
    return {
      textSearch: ''
    };
  },
  computed: {
    filtered() {
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
      // if(this.tldSearch !== '') {
      //   return fuzzy.filter(this.tldSearch, filteredStrs, {
      //     pre: '<span class="tld-fuzzy-match">',
      //     post: '</span>'
      //   })
      //   .map(o => o.string);
      // }
      // else {
      //   return filteredStrs
      // }
    },
  }
}
</script>

<style>
.invite-search-controls {

}
</style>