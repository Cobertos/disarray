<template>
  <div>
    <mover-bg
      class="mover-bg"
      :class="{ bgHighlight: bgHighlight }"
    />
    <section class="dc-hero">
      <div class="dc-hero-left">
        <h2
          class="dc-hero-title"
        >
          Disarray
        </h2>
        <p class="dc-hero-subtitle">
          Find Discord communities
        </p>
      </div>
      <div class="dc-hero-right">
        <p class="dc-hero-description">
          Search engine for quality Discord servers and communities
          <br><br>
          Disarray scours the web for public Discord servers and brings them all here. Our algorithm finds more niche communities than you might find on other sites.
          <br><br><br>
          Have a question? Join our <a href="https://discord.gg/E5b5y8ue" target="_blank">Discord server</a>.

          <!--TODO: Add a modal with more content: Similar to Google, Disarray uses a web crawler to find links around the Internet. This means we aren't restricted to admins actively uploading their servers into our database. There are downsides to this approach though. * Can't section by region of world, * Can't filter by active servers-->
        </p>
      </div>
    </section>
    <section class="dc-sub-hero">
      <p>Only <strong>whole</strong> words allowed. A wildcard (<code>*</code>) can be included at the end of words too</p>
      <!--h4 class="dc-sub-hero-title">Search over</h4-->
      <!--div class="dc-sub-hero-stats">
        <p>{{dbStats.guilds.toLocaleString()}} guilds</p>
        <p>{{dbStats.codes.toLocaleString()}} codes</p>
      </div-->
    </section>
    <section class="dc-search">
      <invite-search
        @search="onSearch"/>
    </section>
  </div>
</template>

<script>
import MoverBg from '@/components/MoverBg.vue';
import InviteSearch from '@/components/InviteSearch.vue';
export default {
  components: { MoverBg, InviteSearch },
  data() {
    return {
      bgHighlight: false
    };
  },
  methods: {
    onSearch(searchStr) {
      this.bgHighlight = searchStr !== '';
    }
  }
}
</script>

<style lang="scss" scoped>
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
  font-size: 40px;
  text-align: center;
  min-height: 40vh;

  margin: 50px 10px 50px;

  @include desktop {
    flex-direction: row;
    min-height: 35vh;
    margin: 50px auto 0;
    padding: 0 50px;
    justify-content: space-between;

  }

  > * {
    flex: 0 1 20%;

    @include desktop {
      flex: 0 1 50%;
    }
  }

  .dc-hero-right {
    margin-top: 30px;

    @include desktop {
      margin-top: 0;
      margin-left: 40px;
    }
  }

  .dc-hero-title {
    text-align: center;
    font-family: $do-hyeon;
    font-size: 23vw; // Dynamically grow
    color: #FFF;
    text-shadow: #ccc 0 1px 0, #c9c9c9 0 2px 0, #bbb 0 3px 0, #b9b9b9 0 4px 0, #aaa 0 5px 0,rgba(0,0,0,.1) 0 6px 1px, rgba(0,0,0,.1) 0 0 5px, rgba(0,0,0,.3) 0 1px 3px, rgba(0,0,0,.15) 0 3px 5px, rgba(0,0,0,.2) 0 5px 10px, rgba(0,0,0,.2) 0 10px 10px, rgba(0,0,0,.1) 0 20px 20px;
    transform: rotate(-5deg);

    @include desktop {
      font-size: 100px;
    }
  }

  .dc-hero-subtitle {
    font-size: 5vw; // Dynamically grow
    color: #FFF;
    text-shadow: #ccc 0 1px 0, #c9c9c9 0 2px 0, #bbb 0 3px 0, #b9b9b9 0 4px 0, #aaa 0 5px 0,rgba(0,0,0,.1) 0 6px 1px, rgba(0,0,0,.1) 0 0 5px, rgba(0,0,0,.3) 0 1px 3px, rgba(0,0,0,.15) 0 3px 5px, rgba(0,0,0,.2) 0 5px 10px, rgba(0,0,0,.2) 0 10px 10px, rgba(0,0,0,.1) 0 20px 20px;
    transform: rotate(-5deg);

    @include desktop {
      font-size: 30px;
    }
  }

  .dc-hero-description {
    max-width: 400px;
    margin: 20px auto 0;
    text-align: left;

    @include desktop {
      margin: 0 auto;
    }
  }
}

.dc-sub-hero {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
  max-width: 600px;
  margin: 0 auto;

  @include desktop {
    margin-bottom: 40px;
  }
}

//   .dc-sub-hero-title {
//     font-size: 30px;
//     font-family: $do-hyeon;

//     @include desktop {
//       font-size: 40px;
//     }
//   }

//   .dc-sub-hero-stats {
//     display: flex;
//     flex-direction: column;
//     font-size: 20px;

//     @include desktop {
//       font-size: 30px;
//       flex-direction: row;
//     }

//     > *:nth-child(n+2) {
//       margin-left: 10px;

//       @include desktop {
//         margin-left: 80px;
//       }
//     }

//     p {
//       font-size: inherit;
//     }
//   }
// }

.dc-search {
  max-width: 760px;
  margin: 0 10px 100px;

  @include desktop {
    margin: 0 auto 100px;
    padding: 0 10px;
  }
}


</style>