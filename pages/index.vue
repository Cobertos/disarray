<template>
  <div>
    <mover-bg
      class="mover-bg"
      :class="{ bgHighlight: shouldHighlight }"
    />
    <h1>Template test site</h1>
    <nuxt-link to="style-test">Style test</nuxt-link>
    <h2>Template features</h2>
    <a
      class="guild-card"
      v-for="invite in json"
      :href="`https://discord.gg/${invite.code}`"
      v-if="invite.guild"
      @click="shouldHighlight = !shouldHighlight"
    >
      <!--div
        class="guild-card-inviter"
        v-if="invite.inviter"
      >
        <p
          :title="`User id: ${invite.inviter.id}`"
        >
          {{invite.inviter.username}}
        </p>
        <discord-image-resource
          :resourceType="'user/avatar'"
          :resource="invite.inviter"
        />
      </div-->
      <div
        class="guild-card-content"
      >
        <div
          class="guild-card-content-text"
        >
          <header>
            <h3
              class="guild-card-content-name"
              :title="`Guild id: ${invite.guild.id}`"
              v-text="invite.guild.name"
            />
            <p
              class="guild-card-content-channel"
              :title="`Channel id: ${invite.channel.id}`"
              v-text="`> #${invite.channel.name}`"
            />
          </header>
          <div
            class="guild-card-presence">
            <fa :icon="['fas', 'users']" />
            {{invite.approximate_member_count}}
            <fa class="online-icon" :icon="['fas', 'circle']" />
            {{invite.approximate_presence_count}}
          </div>
        </div>
        <discord-image-resource
          class="guild-card-image"
          :resourceType="'guild/icon'"
          :resource="invite.guild"
        />
        <p
          class="guild-card-description"
          v-if="invite.guild.description"
          v-text="invite.guild.description"
        />
      </div>
    </a>
    <p v-else>Why</p>
  </div>
</template>

<script>
import json from '@/../discord-crawler/invites100.json';
import DiscordImageResource from '@/components/discord/DiscordImageResource.vue';
import MoverBg from '@/components/MoverBg.vue';
export default {
  components: { MoverBg, DiscordImageResource },
  data(){
    return {
      json,
      shouldHighlight: false
    };
  }
}
//
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

.guild-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFF;
  background-blend-mode: difference;

  .guild-card-presence {
    margin-top: 8px;
    font-size: 16px;

    .online-icon {
      color: #7F7;
      margin-left: 5px;
    }
  }

  .guild-card-image {
    width: 96px;
    height: auto;
  }

  .guild-card-content {
    width: 100%;
    padding: 30px 10px 10px;

    .guild-card-content-text {
      header {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        h3, p {
          margin: 0;
        }

        .guild-card-content-name {

        }

        .guild-card-content-channel {
          margin-left: 20px;
          color: #CCC;
        }
      }
    }

    .guild-card-description {
      margin-top: 10px;
    }

    .guild-card-image {
      float: left;
      margin: 10px;
    }
  }
}
</style>